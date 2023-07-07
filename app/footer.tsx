import Brand from '@/components/ui/brand';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className='flex flex-wrap justify-between gap-10 py-10 mt-32 bg-white'>
      <div className='space-y-4'>
        <Brand />
        <p className='text-neutral-800 text-[14px] font-normal leading-snug'>
          Lorem ipsum dolor sit amet,consectetur
          <br />
          adipisicing elit. Quis non,{' '}
        </p>
        <div className='flex gap-2'>
          {Array.from(Array(4).keys()).map((_) => (
            <Link href={'/'} key={_}>
              <Image
                src={`/assets/images/${_ + 1}.svg`}
                alt='   '
                width={26}
                height={26}
              />
            </Link>
          ))}
        </div>
      </div>
      {/* middle part */}
      <div className='flex flex-wrap gap-12 '>
        {data.map((_) => (
          <div key={_.title}>
            <p className=' pb-1 text-neutral-800 text-[15px] font-bold capitalize leading-relaxed'>
              {_.title}
            </p>
            {_.sub.map((__) => (
              <Link
                className='text-neutral-800 py-1.5 block text-[14px] font-normal leading-snug'
                href={__}
                key={__}
              >
                {__}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <div className='max-w-xs'>
        <p className=' pb-1 text-neutral-800 text-[15px] font-bold capitalize leading-relaxed'>
          Subscribe
        </p>{' '}
        <Link
          className='text-neutral-800 py-1.5 block text-[14px] font-normal leading-snug'
          href={'/'}
        >
          Signup for our newsletter to get the latest news in your inbox.
        </Link>
        <div>
          <input type='text' placeholder='Info@yourgmail.com' />
          <button></button>
        </div>
      </div>
    </section>
  );
}

const data = [
  {
    title: 'My Account ',
    sub: ['Authors', 'Collection', 'Author Profile', 'Create Collection'],
  },
  {
    title: 'Resources ',
    sub: ['Help & Support', 'Live Auctions', 'Item Details', 'Activity'],
  },
  {
    title: 'Company ',
    sub: ['About Us', 'Contact Us', 'Our Blog', 'Discover'],
  },
];
