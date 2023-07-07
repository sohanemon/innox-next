import Image from 'next/image';

export default function Creators() {
  return (
    <section>
      <div className='flex flex-col w-fit mx-auto my-20'>
        <div className='text-center text-sky-950 text-[25px] font-bold capitalize leading-10'>
          Trending Creators
        </div>
        <div className='h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full' />
      </div>{' '}
      <div className='flex justify-center gap-8 flex-wrap'>
        {data.map((_) => (
          <div key={_.title}>
            <Image
              src={_.photo}
              alt=''
              className='rounded-full mb-3'
              width={85}
              height={85}
            />
            <p className='text-center mb-1 text-zinc-800 text-[12px] font-bold capitalize leading-relaxed'>
              {_.title}
            </p>
            <p className='text-center text-sky-600 text-[12px] font-bold leading-snug'>
              {_.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
const data = [
  {
    photo: '/assets/images/avt/avt1.svg',
    title: 'Crispin Berry',
    value: '214.2 ETH',
  },
  {
    photo: '/assets/images/avt/avt2.svg',
    title: 'Samson Frost',
    value: '205.43 ETH',
  },
  {
    photo: '/assets/images/avt/avt3.svg',
    title: 'Tommy Alvarez',
    value: '170.3 ETH',
  },
  {
    photo: '/assets/images/avt/avt4.svg',
    title: 'Windsor Lane',
    value: '120.7 ETH',
  },
  {
    photo: '/assets/images/avt/avt5.svg',
    title: 'Andy Hurlbutt',
    value: '82.79 ETH',
  },
  {
    photo: '/assets/images/avt/avt6.svg',
    title: 'Blake Banks',
    value: '68.2 ETH',
  },
  {
    photo: '/assets/images/avt/avt7.svg',
    title: 'Monica Lucas',
    value: '52.8 ETH',
  },
  {
    photo: '/assets/images/avt/avt1.svg',
    title: 'Matt Ramos',
    value: '38.4 ETH',
  },
  {
    photo: '/assets/images/avt/avt2.svg',
    title: 'Harper Wilcher',
    value: '29.2 ETH',
  },
];
