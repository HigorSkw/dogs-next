'use server';

import { STATS_GET } from '@/functions/api';
import apiError from '@/functions/api.error';
import { cookies } from 'next/headers';

export default async function validateToken() {
  try {
    const token = cookies().get('token')?.value;
    if (!token) new Error('Acesso Negado');

    const { url } = STATS_GET();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });

    if (!response.ok) throw new Error('Erro ao buscar os dados.');
    const data = await response.json();
    return { data, ok: true, error: '' };
  } catch (error) {
    return apiError(error);
  }
}
