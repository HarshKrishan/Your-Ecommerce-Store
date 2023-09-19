import Products from '@/components/Products'

import Image from 'next/image'


export default function Home() {
  // console.log("auth: ",auth);
  // const auth = getAuth();
  
  return (
    <div className=''>
      <div className=''>
        <Image className="mx-auto" src="/home.jpg" width={1000} height={1000} alt="logo" />
      </div>
      <Products />
    </div>
  )
}
