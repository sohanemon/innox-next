import BlurryDiv from '@/components/ui/blurry-div';
import Muted from '@/components/ui/muted';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className='grid items-center grid-cols-7 py-24 '>
      <BlurryDiv className='right-0 -top-24' />
      <BlurryDiv className='bottom-0 left-0' />
      <div className='relative col-span-3 space-y-10 duration-1000 animate-in slide-in-from-left-32 fade-in-0 max-md:col-span-full lg:pl-10 '>
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
          className='absolute duration-1000 w-52 h-52 max-md:hidden -right-24 top-6 animate-in slide-in-from-left-4 slide-in-from-top-2'
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
          <button className='px-6 py-3 text-sm font-medium text-white transition-all rounded-lg hover:shadow-lg bg-gradient-to-r from-primary to-secondary'>
            Explore Creators
          </button>
          <button className='px-6 py-3 text-sm font-medium transition-all border rounded-lg text-primary hover:bg-primary/5'>
            Start investing{' '}
          </button>
        </div>
        {/* stat section */}
        <div className='flex gap-10'>
          {stat.map((el) => (
            <div key={el.title}>
              <p className=' text-secondary text-xl md:text-[25px] font-bold whitespace-nowrap'>
                {el.amount}
              </p>
              <Muted>{el.title}</Muted>
            </div>
          ))}
        </div>
      </div>
      <Image
        className='col-span-2 transition-all duration-1000 select-none animate-in slide-in-from-bottom-10 slide-in-from-right-20 fade-in-0 max-md:mt-10 md:translate-x-28 max-md:col-span-4 hover:drop-shadow-2xl '
        src={`/assets/images/hero.svg`}
        alt=''
        width={280}
        priority
        height={303}
      />
      <Image
        className='col-span-2 transition-all duration-1000 select-none animate-in slide-in-from-right-28 fade-in-0 max-md:mt-10 md:translate-x-28 md:translate-y-20 max-md:col-span-3 hover:drop-shadow-2xl '
        src={`/assets/images/hero-alt.svg`}
        alt=''
        width={238}
        priority
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
