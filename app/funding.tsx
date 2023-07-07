import Muted from '@/components/ui/muted';
import Image from 'next/image';
import Div1 from './div1';
import Div2 from './div2';

export default function Funding() {
  return (
    <section className=''>
      <div className='text-center'>
        <span className='text-slate-700 text-[25px] font-bold'>
          Direct Funding <br />
        </span>
        <span className='text-sky-600 text-[25px] font-bold'>for creators</span>
      </div>
      {/* first div */}
      <Div1 />
      <Div2 />
    </section>
  );
}
