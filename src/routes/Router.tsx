import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="grow" />
      <Footer />
    </div>
  );
}
