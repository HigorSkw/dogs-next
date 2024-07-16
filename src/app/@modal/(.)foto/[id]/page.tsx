import PhotoGet from '@/actions/photo.get';
import FeedModal from '@/components/Feed/feed-modal';
import { notFound } from 'next/navigation';

type FotoIdParams = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: FotoIdParams) {
  const { data } = await PhotoGet(params.id);

  if (!data) return { title: 'Fotos' };

  return { title: data.photo.title };
}

export default async function FotoIdPage({ params }: FotoIdParams) {
  const { data } = await PhotoGet(params.id);

  if (!data) return notFound();

  return <FeedModal photo={data} />;
}
