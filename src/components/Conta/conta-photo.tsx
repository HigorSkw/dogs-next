'use client';

import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/Forms/Button';
import Input from '@/components/Forms/Input';
import ErrorMessage from '../Helper/error-message';
import React from 'react';
import styles from './conta-photo-post.module.css';
import photoPost from '@/actions/photo.post';

function FormButton() {
  const { pending } = useFormStatus();

  return <>{pending ? <Button disabled={pending}>Enviando...</Button> : <Button>Enviar</Button>}</>;
}

export const ContaPhotoPost = () => {
  const [state, action] = useFormState(photoPost, {
    ok: false,
    error: '',
    data: null,
  });

  const [img, setImg] = React.useState('');

  function handleImgChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    if (target.files) {
      setImg(URL.createObjectURL(target.files[0]));
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form action={action}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="number" name="peso" />
        <Input label="Idade" type="number" name="idade" />
        <input type="file" name="img" id="img" className="styles.file" onChange={handleImgChange} />

        <ErrorMessage error={state.error} />
        <FormButton />
      </form>

      <div>
        <div className={styles.preview} style={{ backgroundImage: `url(${img})` }}></div>
      </div>
    </section>
  );
};
