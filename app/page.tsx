import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <h2 className='text-xl py-2'>Mobiles</h2>
      <div className='py-4'>
        <div className='w-64'>
          <div>
            <Image
              src='/products/iphone.png'
              width={200}
              height={200}
              alt='iPhone'
            />
          </div>
        </div>
      </div>
      <div className='card w-96 bg-base-100 shadow-xl py-5'>
        <figure className='bg-blue-100 p-5 rounded-xl w-10/12 mx-auto'>
          <Image
            src='/products/iphone.png'
            width={200}
            height={200}
            alt='iPhone'
          />
        </figure>
        <div className='card-body'>
          <h2 className='card-title'>iPhone 14 Pro</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className='card-actions justify-between items-center'>
            <span className='text-xl'>£1,199</span>
            <button className='btn btn-primary'>Buy Now</button>
          </div>
        </div>
      </div>
    </main>
  );
}
