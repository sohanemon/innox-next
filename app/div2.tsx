import Muted from '@/components/ui/muted';
import Image from 'next/image';

export default function Div2() {
  return (
    <div className='grid grid-cols-12 my-20'>
      <div className='flex -space-x-16 col-span-full md:col-span-7'>
        <Image
          src={`/assets/images/mr-beast.svg`}
          alt=''
          width={350}
          height={400}
        />
        <Image
          src={`/assets/images/top-raised.svg`}
          alt=''
          className='translate-y-24'
          width={180}
          height={330}
        />
      </div>
      <div className='space-y-5 col-span-full max-md:order-first max-md:mb-10 md:col-span-5'>
        <Image
          src={`/assets/images/transition/money.svg`}
          alt=''
          width={50}
          height={50}
        />
        <p className=' text-slate-700 text-[20px] font-medium'>
          Channel Funding{' '}
        </p>
        <div className='text-[12px] font-medium'>
          <span>Investors(fans) have the opportunity to </span>
          <span className='text-sky-600'>
            crowdfund video projects from talented creators in exchange for a
            share of the revenue
          </span>
          <span>
            {' '}
            generated by the videos over a limited period of time.
            <br /> <br />
            You become an essential partner in the creation process.{' '}
          </span>
          <span className='text-sky-600'>Your financial contributions</span>
          <span>
            {' '}
            provide creators with the necessary resources to produce
            high-quality videos, unleash their artistic potential, and{' '}
          </span>
          <span className='text-sky-600'>captivate audiences</span>
          <span> around the world.</span>
        </div>
        <button className='px-6 py-2 text-sm font-medium text-white transition-all rounded-lg hover:shadow-lg bg-primary to-secondary'>
          Learn More
        </button>
      </div>
    </div>
  );
}
