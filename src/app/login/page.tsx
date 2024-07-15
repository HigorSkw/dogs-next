import { LoginForm } from '@/components/Login/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Dogs',
  description: 'Logue na sua conta no site Dogs.',
};

export default async function LoginPage() {
  return (
    <section className="animeLeft">
      <h1 className="title">Login Page</h1>
      <LoginForm />
    </section>
  );
}
