import PhotosGet from '@/actions/photos-get';
import Feed from '@/components/Feed/feed';

export default async function PerfilUserPage({ params }: { params: { user: string } }) {
  const { data } = await PhotosGet({ user: params.user });

  if (!data) return null;

  return (
    <section className="container mainContainer">
      <h1 className="title">{params.user}</h1>
      <Feed photos={data} user={params.user} />
    </section>
  );
}
