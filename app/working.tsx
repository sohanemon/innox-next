import Muted from '@/components/ui/muted';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Working() {
  return (
    <section>
      <p className='min-w-[282px] text-center text-slate-700 text-[25px] font-bold'>
        How it works?
      </p>
      <ul className='flex justify-center gap-10 my-4'>
        <div className={cn('capitalize  text-sm pb-1 relative')}>
          <div className='absolute w-full h-1 rounded-full -bottom-1 bg-gradient-to-r from-primary via-primary/60 to-transparent ' />
          <p className=''>For Creator</p>
        </div>
        <div className={cn('capitalize  text-sm pb-1  relative')}>
          <p className=''>For Users</p>
        </div>
      </ul>
      {/* transition grid */}
      <div className='flex flex-wrap justify-center gap-4 my-20'>
        {data.map((_) => (
          <div key={_.title} className='max-w-[280px]'>
            <div className='flex gap-2'>
              <Image src={_.icon} alt='' width={38} height={30} />{' '}
              {_.transitionIcon && (
                <Image
                  src={_.transitionIcon}
                  className='block w-full mx-6 grow'
                  alt=''
                  width={220}
                  height={60}
                />
              )}
            </div>
            <div className=' text-slate-700 my-2.5 text-[15px] font-medium'>
              {_.title}
            </div>
            <Muted>{_.node}</Muted>
          </div>
        ))}
      </div>
    </section>
  );
}

const data = [
  {
    icon: '/assets/images/transition/mail.svg',
    transitionIcon: '/assets/images/dash-up.svg',
    title: 'Set up your wallet',
    node: (
      <>
        Create an account as a “content creator” by{' '}
        <span className='text-sky-600 '>connecting your wallet</span>
      </>
    ),
  },
  {
    icon: '/assets/images/transition/verify.svg',
    transitionIcon: '/assets/images/dash-down.svg',
    title: 'Verify channel ',
    node: (
      <>
        Verify your channel exists within our ecosystem so we can{' '}
        <span className='text-sky-600 '>issue the valuation </span>
        of your token{' '}
      </>
    ),
  },
  {
    icon: '/assets/images/transition/brush.svg',
    transitionIcon: '/assets/images/dash-up.svg',
    title: 'Personalize Token',
    node: (
      <>
        Personalize your token based on your preferences and creative touch in
        order to <span className='text-sky-600 '>stand out from the rest </span>
      </>
    ),
  },
  {
    icon: '/assets/images/transition/bag.svg',
    title: 'List in Marketplace',
    node: (
      <>
        When you are ready to publish your token{' '}
        <span className='text-sky-600 '>publish to marketplace</span> and share
        with your audience.
      </>
    ),
  },
];
