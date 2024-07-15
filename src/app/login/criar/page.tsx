import { LoginCriarForm } from '@/components/Login/login-criar-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Crie sua Conta',
  description: 'Crie sua conta no site Dogs.',
};

export default async function CriarPage() {
  return (
    <div className="animeLeft">
      <h1 className="title">Cadastra-se</h1>
      <LoginCriarForm />
    </div>
  );
}
