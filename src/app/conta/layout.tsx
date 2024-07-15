import ContaHeader from '@/components/Conta/conta-header';

export default function ContaLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <ContaHeader />
      <h1>Menu</h1>
    </div>
  );
}
