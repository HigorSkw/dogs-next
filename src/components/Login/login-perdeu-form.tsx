'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import ErrorMessage from '../Helper/error-message';
import React from 'react';
import styles from './login-form.module.css';
import passwordLost from '@/actions/password-lost';

function FormButton() {
  const { pending } = useFormStatus();

  return <>{pending ? <Button disabled={pending}>Enviando...</Button> : <Button>Enviar Email</Button>}</>;
}

// Primeira Solução
// export const dynamic = 'force-dynamic';

export const LoginPerdeuForm = () => {
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  });

  const [url, setUrl] = React.useState('');

  React.useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Email / Usuário" type="text" name="login" />
        <input type="hidden" value={url} name="url" />
        <ErrorMessage error={state.error} />
        {state.ok ? <p style={{ color: '#4c1' }}>Email Enviado!</p> : <FormButton />}
      </form>
    </>
  );
};
