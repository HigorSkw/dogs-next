'use client';

import logoutAction from '@/actions/logout';
import validateToken from '@/actions/validate-token';
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction, useEffect } from 'react';

type IUser = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type IUserContext = {
  user: IUser | null;
  setUserState: Dispatch<SetStateAction<IUser | null>>;
};

const UserContext = createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = useContext(UserContext);
  if (context == null) {
    throw new Error('useContenxt deve estar dentro do Provider');
  }
  return context;
};

export function UserContextProvider({ children, user }: { children: ReactNode; user: IUser | null }) {
  const [userState, setUserState] = useState<IUser | null>(null);

  useEffect(() => {
    async function validate() {
      const { ok } = await validateToken();
      if (!ok) await logoutAction();
    }

    if (userState) validate();
  }, [userState]);

  return <UserContext.Provider value={{ user: userState, setUserState }}></UserContext.Provider>;
}
