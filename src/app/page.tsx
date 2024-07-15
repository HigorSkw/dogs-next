import PhotosGet from '@/actions/photos-get';
import Feed from '@/components/Feed/feed';

export default async function Home() {
  const data = await PhotosGet();

  return (
    <section className="container mainContainer">
      <Feed photos={data} />
    </section>
  );
}
