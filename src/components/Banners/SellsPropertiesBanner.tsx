import Image from 'next/image'
import React from 'react'
import { CgEditBlackPoint } from 'react-icons/cg'

const SellsPropertiesBanner = () => {
  return (
    <div className='py-[120px]'> 
      <div className='container flex flex-col lg:flex-row gap-5'>
   <div className=' lg:w-6/12  space-y-6'>

   <span className='badge'>About Us</span>
  <h3 className='section-title'>Today Sells Properties</h3>
  <p className=' subtitle'>  Houzez allow you to design unlimited panels and real estate custom <br /> forms to capture leads and keep record of all information
  </p>
  <div className='space-y-5 py-4'>

   <div className='flex items-center gap-4'>
   <CgEditBlackPoint className='text-black/30 w-6 h-6' />

  {/* <span className='w-4 h-[2px] bg-primary'></span> */}
  <p className=' subtitle'> Live Music Cocerts at Luviana
  </p>

   </div>
   <div className='flex items-center gap-4'>
   <CgEditBlackPoint className='text-black/30 w-6 h-6' />

  {/* <span className='w-4 h-[2px] bg-primary'></span> */}
  <p className=' subtitle'> Our SecretIsland Boat Tour is Just for You

  </p>

   </div>
   <div className='flex items-center gap-4'>
   <CgEditBlackPoint className='text-black/30 w-6 h-6' />

  {/* <span className='w-4 h-[2px] bg-primary'></span> */}
  <p className=' subtitle'> Live Music Cocerts at Luviana


  </p>

   </div>
   <div className='flex items-center gap-4'>
   <CgEditBlackPoint className='text-black/30 w-6 h-6' />

  {/* <span className='w-4 h-[2px] bg-primary'></span> */}
  <p className=' subtitle'>  Unwind with Live Music Under the Stars at Luviana


  </p>

   </div>
   <div className='flex items-center gap-4'>
   <CgEditBlackPoint className='text-black/30 w-6 h-6' />

  {/* <span className='w-4 h-[2px] bg-primary'></span> */}
  <p className=' subtitle'>Live Music Cocerts at Luviana

  </p>

   </div>
   <div className='flex items-center gap-4'>
   <CgEditBlackPoint className='text-black/30 w-6 h-6' />

  {/* <span className='w-4 h-[2px] bg-primary'></span> */}
  <p className=' subtitle'> Experience Live Music Like Never Before at Luviana

  </p>

   </div>
  </div>

   </div>

   <div className='lg:w-6/12 flex flex-col md:flex-row  gap-4 '> 
<div className='md:w-6/12 bg-gray-100 rounded-md min-h-[500px]'>
<Image  width={1000} height={1000} alt='banner-1' className='w-full h-full object-cover rounded-lg' src={'/images/banner/banner-1.jpg'}   />
</div>
<div className='md:w-6/12  flex flex-col gap-4 min-h-[500px]'>
<div className='h-1/2 rounded-md bg-gray-100'>
<Image  width={1000} height={1000} alt='banner-2' className='w-full h-full object-cover rounded-lg' src={'/images/banner/banner-2.jpg'}   />

</div>
<div className='h-1/2 rounded-md bg-gray-100'>
<Image  width={1000} height={1000} alt='banner-3' className='w-full h-full object-cover rounded-lg' src={'/images/banner/banner-3.jpg'}   />

</div>

</div>
   </div>
      </div>
    
    
    </div>
  )
}

export default SellsPropertiesBanner