import BlurryDiv from '@/components/ui/blurry-div';
import Div1 from './div1';
import Div2 from './div2';

export default function Funding() {
  return (
    <section className='max-w-5xl mx-auto'>
      <BlurryDiv className='top-0 right-0' />
      <BlurryDiv className='bottom-0 left-0' />
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
