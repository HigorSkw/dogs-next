import PhotosGet from '@/actions/photos-get';
import Feed from '@/components/Feed/feed';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minha Conta',
};

export default async function Home() {
  const { data } = await PhotosGet();

  return (
    <>
      <section className="container mainContainer">{data && <Feed photos={data} />}</section>
    </>
  );
}
