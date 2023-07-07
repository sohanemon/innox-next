import Image from 'next/image';

export default function Creators() {
  return (
    <section className='flex flex-col w-fit mx-auto my-20'>
      <div className='text-center text-sky-950 text-[25px] font-bold capitalize leading-10'>
        Trending Creators
      </div>
      <div className='h-1 w-full bg-gradient-to-r from-primary via-primary/70 to-transparent rounded-full' />
      <div className='flex'>
        {data.map((_) => (
          <div key={_.title}>
            <Image src={_.value} alt='' width={100} height={100} />
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
