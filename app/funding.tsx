import Image from 'next/image';

export default function Funding() {
  return (
    <section>
      <div className='text-center'>
        <span className='text-slate-700 text-[25px] font-bold'>
          Direct Funding <br />
        </span>
        <span className='text-sky-600 text-[25px] font-bold'>for creators</span>
      </div>

      {/* first div */}
      <div className='grid grid-cols-2'>
        <Image
          src={`/public/assets/images/transition/money.svg`}
          alt=''
          width={50}
          height={50}
        />
      </div>
    </section>
  );
}
