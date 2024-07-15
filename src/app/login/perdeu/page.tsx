import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu a Senha | Dogs',
  description: 'Recupere a sua senha.',
};

export default async function PerdeuPage() {
  return (
    <main>
      <h1>Perdeu Page</h1>
    </main>
  );
}
