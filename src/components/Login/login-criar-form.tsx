'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import ErrorMessage from '../Helper/error-message';
import React from 'react';
import styles from './login-form.module.css';
import userPost from '@/actions/user-post';

function FormButton() {
  const { pending } = useFormStatus();

  return <>{pending ? <Button disabled={pending}>Cadastrando...</Button> : <Button>Cadastrar</Button>}</>;
}

export const LoginCriarForm = () => {
  const [state, action] = useFormState(userPost, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    if (state.ok) window.location.href = '/conta';
  }, [state.ok]);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Usuário" type="text" name="username" />
        <Input label="Email" type="email" name="email" />
        <Input label="Senha" type="password" name="password" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>
    </>
  );
};
