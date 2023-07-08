import Creators from './creators';
import Footer from './footer';
import Funding from './funding';
import Hero from './hero';
import Working from './working';

export default function Home() {
  return (
    <main className='container [&>*]:relative'>
      <Hero />
      <Working />
      <Funding />
      <Creators />
      <Footer />
    </main>
  );
}
