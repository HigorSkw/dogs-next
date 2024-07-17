import ContaHeader from '@/components/Conta/conta-header';

export default async function ContaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <ContaHeader />
      {children}
    </div>
  );
}
