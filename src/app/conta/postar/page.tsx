import ContaPhotoPost from '@/components/Conta/conta-photo';
import { Metadata } from 'next';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Postar | Minha Conta',
};

export default async function PostarPage() {
  return <ContaPhotoPost />;
}
