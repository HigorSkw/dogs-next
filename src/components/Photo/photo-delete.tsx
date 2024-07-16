'use client';

import photoDeleteFunction from '@/actions/photo-delete';
import { useState } from 'react';

export default function PhotoDelete({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      await photoDeleteFunction(id);
    }
    setLoading(false);
  }

  return <>{loading ? <button disabled>Deletar</button> : <button onClick={handleClick}>Deletar: {id}</button>}</>;
}
