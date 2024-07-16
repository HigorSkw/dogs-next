import { IComment } from '@/actions/photo.get';
import { useFormState, useFormStatus } from 'react-dom';
import styles from './photo-comments.form.module.css';
import EnviarIcon from '@/icons/enviar-icon';
import ErrorMessage from '../Helper/error-message';
import commentPost from '@/actions/comments-post';
import { useEffect, useState } from 'react';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className={styles.button}>
      <EnviarIcon />
    </button>
  );
}

export default function PhotoCommentsForm({
  single,
  id,
  setComments,
}: {
  single: boolean;
  id: number;
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}) {
  const [state, action] = useFormState(commentPost, {
    ok: false,
    data: null,
    error: '',
  });

  useEffect(() => {
    if (state.ok && state.data) {
      setComments((comments) => [...comments, state.data]);
      setComment('');
    }
  }, [state, setComments]);

  const [comment, setComment] = useState('');

  return (
    <form action={action} className={`${styles.form} ${single ? styles.single : ''}`}>
      <input type="hidden" name="id" id="id" value={id} />
      <textarea
        className={styles.textarea}
        name="comment"
        id="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}></textarea>
      <h1>Alguma coisa</h1>
      <FormButton />
      <ErrorMessage error={state.error} />
    </form>
  );
}
