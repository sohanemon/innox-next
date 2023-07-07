import Image from 'next/image';

export default function Funding() {
  return (
    <section className='container'>
      <div className='text-center'>
        <span className='text-slate-700 text-[25px] font-bold'>
          Direct Funding <br />
        </span>
        <span className='text-sky-600 text-[25px] font-bold'>for creators</span>
      </div>

      {/* first div */}
      <div className='grid grid-cols-2'>
        <div>
          <Image
            src={`/assets/images/transition/money.svg`}
            alt=''
            width={50}
            height={50}
          />
          <p className=' text-slate-700 text-[20px] font-medium'>
            Channel Funding{' '}
          </p>
        </div>
      </div>
    </section>
  );
}
