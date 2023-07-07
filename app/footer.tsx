import Brand from '@/components/ui/brand';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <section className='flex justify-between flex-wrap gap-10 mt-32 py-10 bg-white'>
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
    </section>
  );
}


const data = [


    title: 'My Account ', sub: []
    title: 'Resources ', sub: []
    title: 'Company ', sub: []
    title: 'Subscribe ', sub: []

]


