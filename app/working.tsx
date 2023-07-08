'use client';
import Muted from '@/components/ui/muted';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useState } from 'react';

export default function Working() {
  const [isUser, setIsUser] = useState(false);
  return (
    <section id='how-it-works' className='scroll-m-20'>
      <p className='min-w-[282px] text-center text-slate-700 text-[25px] font-bold'>
        How it works?
      </p>
      <ul className='flex justify-center gap-10 my-4'>
        <div
          onClick={() => setIsUser(false)}
          className={cn('capitalize cursor-pointer text-sm pb-1 relative')}
        >
          {!isUser && (
            <div className='absolute w-full h-1 duration-500 rounded-full animate-in slide-in-from-right-20 -bottom-1 bg-gradient-to-r from-primary via-primary/60 to-transparent ' />
          )}
          <p className=''>For Creator</p>
        </div>
        <div
          onClick={() => setIsUser(true)}
          className={cn('capitalize cursor-pointer text-sm pb-1  relative')}
        >
          {' '}
          {isUser && (
            <div className='absolute w-full h-1 duration-500 rounded-full animate-in slide-in-from-left-20 -bottom-1 bg-gradient-to-r from-primary via-primary/60 to-transparent ' />
          )}
          <p className=''>For Users</p>
        </div>
      </ul>
      {/* transition grid */}
      <div className='flex flex-wrap justify-center gap-4 my-20'>
        {(!isUser ? data.slice(0, 4) : data.slice(4)).map((_) => (
          <div
            key={_.title}
            className={cn(
              'max-w-[17.5rem] animate-in duration-300 fade-out-0 slide-out-to-top-12 fade-in-25 slide-in-from-bottom-16'
            )}
          >
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
  {
    icon: '/assets/images/transition/verify.svg',
    transitionIcon: '/assets/images/dash-down.svg',
    title: 'Create an Account ',
    node: (
      <>
        Verify your channel exists within our ecosystem so we can{' '}
        <span className='text-sky-600 '>issue the valuation </span>
        of your token{' '}
      </>
    ),
  },
  {
    icon: '/assets/images/transition/mail.svg',
    transitionIcon: '/assets/images/dash-up.svg',
    title: 'Create Wallet',
    node: (
      <>
        Create an account as a “content creator” by{' '}
        <span className='text-sky-600 '>connecting your wallet</span>
      </>
    ),
  },

  {
    icon: '/assets/images/transition/bag.svg',
    title: 'Start Investing',
    node: (
      <>
        When you are ready to publish your token{' '}
        <span className='text-sky-600 '>publish to marketplace</span> and share
        with your audience.
      </>
    ),
  },
];
