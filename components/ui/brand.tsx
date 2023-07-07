import Image from 'next/image';
import Link from 'next/link';

export default function Brand() {
  return (
    <Link href={'/'}>
      <Image
        src={'/assets/images/logo.svg'}
        alt='logo'
        width={55}
        height={55}
      />
      <p className='text-primary text-xl'>Innox</p>
    </Link>
  );
}
