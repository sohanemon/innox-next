import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Working() {
  return (
    <section>
      <p className='min-w-[282px] text-center text-slate-700 text-[25px] font-bold'>
        How it works?
      </p>
      <ul className='flex justify-center gap-10 my-4'>
        <h3
          className={cn(
            'capitalize  from-primary to-transparent text-sm pb-1 bg-gradient-to-r'
          )}
        >
          <p className='bg-white pb-2'>For Creator</p>
        </h3>
        <h3
          className={cn(
            'capitalize  from-primary to-transparent text-sm pb-1 bg-gradient-to-r'
          )}
        >
          <p className='bg-white pb-2'>For Creator</p>
        </h3>
      </ul>
      {/* transition grid */}
      <div className='gric grid-cols-4 mb-20'>
        <div></div>
      </div>
    </section>
  );
}
