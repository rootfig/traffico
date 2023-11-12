import Faq from '@/components/faq/faq';
import Header from '@/components/header/header';
import About from '@/components/about/About';
import Apply from '@/components/apply/apply';
import Testi from '@/components/testi/testi';
import Footer from '@/components/footer/footer';

export default function () {
  return (
    <>
      <Header />
      <main className='main'>
        <div className='wrapper'>
          <About />
          <Apply />
          <Faq />
          <Testi />
        </div>
      </main>
      <Footer />
    </>
  );
};
