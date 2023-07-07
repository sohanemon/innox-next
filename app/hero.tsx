import Muted from '@/components/ui/muted';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='container py-24 grid grid-cols-7 items-center'>
      <div className='pl-20 space-y-10 col-span-3 relative '>
        <h1 className='max-w-[344px]  text-[40px] font-bold'>
          <span className='text-slate-700 '>
            Invest and grow
            <br />
            your{' '}
          </span>
          <span className='text-sky-600 '>
            favourite <br />
          </span>
          <span className='text-slate-700 '>creators</span>
        </h1>
        <Image
          className='absolute w-52 h-52 -right-24 top-6 animate-in slide-in-from-left-4 slide-in-from-top-2 duration-1000'
          src={`/assets/images/arrow.svg`}
          alt=''
          width={200}
          height={200}
        />
        <h3 className='max-w-[373px] text-[15px] font-medium'>
          <span className='text-slate-700 '>
            Welcome to the first marketplace that allows you to{' '}
          </span>
          <span className='text-sky-600 '>invest in content creators</span>
          <span className='text-slate-700 '>
            {' '}
            through tokens
            <br />
            and direct funding solutions
          </span>
        </h3>
        <div className='flex items-center gap-5'>
          <button className='text-sm text-white rounded-lg hover:shadow-lg transition-all  font-medium bg-gradient-to-r from-primary to-secondary px-6 py-3'>
            Explore Creators
          </button>
          <button className='text-sm text-primary border rounded-lg hover:bg-primary/5 transition-all  font-medium  px-6 py-3'>
            Start investing{' '}
          </button>
        </div>
        {/* stat section */}
        <div className='flex gap-10'>
          {stat.map((el) => (
            <div key={el.title}>
              <p className=' text-secondary text-[25px] font-bold whitespace-nowrap'>
                {el.amount}
              </p>
              <Muted>{el.title}</Muted>
            </div>
          ))}
        </div>
      </div>
      <Image
        className='col-span-2 hover:drop-shadow-2xl select-none transition-all translate-x-20  duration-long '
        src={`/assets/images/hero.svg`}
        alt=''
        width={238}
        height={283}
      />
      <Image
        className='col-span-2 hover:drop-shadow-2xl select-none transition-all translate-x-20   duration-long '
        src={`/assets/images/hero-alt.svg`}
        alt=''
        width={238}
        height={283}
      />
    </section>
  );
}

const stat = [
  { title: 'Creators', amount: '100k+' },
  { title: 'Total Users', amount: '300k+' },
  { title: 'Volume Traded', amount: '250+ ETH' },
];
