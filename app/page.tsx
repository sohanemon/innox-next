import Funding from './funding';
import Hero from './hero';
import Working from './working';

export default function Home() {
  return (
    <main className='container'>
      <Hero />
      <Working />
      <Funding />
    </main>
  );
}
