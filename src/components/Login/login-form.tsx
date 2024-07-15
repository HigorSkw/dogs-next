'use client';

import loginAction from '@/actions/login';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import ErrorMessage from '../Helper/error-message';
import React from 'react';
import Link from 'next/link';
import styles from './login-form.module.css';

function FormButton() {
  const { pending } = useFormStatus();

  return <>{pending ? <Button disabled={pending}>Enviado...</Button> : <Button>Entrar</Button>}</>;
}

export const LoginForm = () => {
  const [state, action] = useFormState(loginAction, {
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
        <Input label="Usuário" type="text" name="username" placeholder="Usuário" />
        <Input label="Senha" type="password" name="password" placeholder="Senha" />
        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <Link href={'/login/perdeu'} className={styles.perdeu}>
        Perdeu a senha?
      </Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site</p>
        <Link href={'/login/criar'} className="button">
          Cadastro
        </Link>
      </div>
    </>
  );
};
