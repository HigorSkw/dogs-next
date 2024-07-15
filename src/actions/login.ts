'use server';

import { cookies } from 'next/headers';

export default async function loginAction(formData: FormData) {
  const username = formData.get('username') as string | null;
  const password = formData.get('password') as string | null;

  const respose = await fetch('/jwt-auth/v1/token', {
    method: 'POST',
    body: JSON.stringify(formData),
  });

  const data = await respose.json();

  cookies().set('token', data.token, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 60 * 60 * 24,
  });

  return data;
}
