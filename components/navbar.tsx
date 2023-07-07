'use client';

import { cn } from '@/lib/utils';
import { AlignJustify, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Brand from './ui/brand';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section>
      <nav className='flex items-center justify-between container mt-8'>
        <Brand />
        <NavContent />
        <Action />
        {!isMenuOpen ? (
          <AlignJustify
            onClick={() => setIsMenuOpen(true)}
            size={36}
            className='cursor-pointer lg:hidden text-foreground'
          />
        ) : (
          <X
            onClick={() => setIsMenuOpen(false)}
            size={36}
            className='cursor-pointer lg:hidden text-foreground'
          />
        )}
      </nav>

      {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
    </section>
  );
}

const NavContent = () => {
  return (
    <>
      <ul className='flex items-center gap-[15%] font-medium whitespace-nowrap max-lg:hidden '>
        {nav.map((_) => (
          <li key={_}>
            <h3
              className={cn(
                'capitalize  from-primary via-primary/70 to-transparent text-sm pb-2.5 ',
                {
                  'bg-gradient-to-r': _ === 'home',
                }
              )}
            >
              <Link className='bg-white pb-2' href={_}>
                {_}
              </Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  return (
    <>
      <ul className='absolute inset-x-0 flex flex-col font-medium items-start lg:hidden'>
        {nav.map((_) => (
          <li onClick={() => setIsMenuOpen(false)} key={_}>
            <h3 className='capitalize'>
              <Link href={_}>{_}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const nav = ['home', 'How it works', 'Marketplace', 'About'];

const Action = () => {
  return (
    <div className='flex items-center bg-primary/5 cursor-pointer hover:bg-primary/10 transition-all px-3 gap-2.5 rounded-lg'>
      <Image src={`/assets/images/mail.svg`} alt='' width={20} height={20} />
      <p className='text-foreground text-xs font-semibold'>Connect Wallet</p>
      <div className='w-0.5 ml-4 h-10 bg-primary/50' />
      <Image src={`/assets/images/user.svg`} alt='' width={20} height={20} />
    </div>
  );
};
