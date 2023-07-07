import Brand from '@/components/ui/brand';

export default function Footer() {
  return (
    <section className='flex justify-between flex-wrap gap-10'>
      <div>
        <Brand />
        <p className='text-neutral-800 text-[14px] font-normal leading-snug'>
          Lorem ipsum dolor sit amet,consectetur
          <br />
          adipisicing elit. Quis non,{' '}
        </p>
      </div>
    </section>
  );
}
