import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resenha a sua Senha| Dogs',
  description: 'Resete a sua senha.',
};

export default async function ResetarPage() {
  return (
    <main>
      <h1>Resetar Page</h1>
    </main>
  );
}
