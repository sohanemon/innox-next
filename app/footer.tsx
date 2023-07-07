import Brand from '@/components/ui/brand';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className='flex flex-wrap justify-between gap-10 py-10 px-3 mt-32 bg-[#f8f8f8]'>
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
        <div className='flex items-stretch overflow-hidden border rounded-lg border-black/5 w-fit '>
          <input
            type='text'
            placeholder='Info@yourgmail.com'
            className='h-8 pl-3 '
          />
          <button className='flex h-full px-2 bg-secondary '>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-6 h-8 fill-white stroke-secondary bg-secondary'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5'
              />
            </svg>
          </button>
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
