export default async function PerfilUserPage({ params }: { params: { user: string } }) {
  return (
    <main>
      <h1>Perfil User Page - {params.user}</h1>
    </main>
  );
}
