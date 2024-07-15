import { LoginPerdeuForm } from '@/components/Login/login-perdeu-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perdeu a Senha | Dogs',
  description: 'Recupere a sua senha.',
};

export default async function PerdeuPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Perdeu a Senha?</h1>
      <LoginPerdeuForm />
    </div>
  );
}
