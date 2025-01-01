import React from 'react'
import { BiHomeSmile } from 'react-icons/bi'
import { FaAngleRight, FaHandHolding } from 'react-icons/fa'
import { TbHomeEco, TbHomeStats } from 'react-icons/tb'

const MainFocusSection = () => {
  return (
    <div className='bg-secondary  py-[70px] lg:py-[120px]'>
        <div className='container space-y-4'  >
<span className='badge'>Our Services
</span>

<h2 className='section-title'>Our Main Focus
</h2>
<div className='pt-12 grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10'>
  <div className='px-6 py-10 bg-white text-center space-y-4 group relative shadow rounded-sm'>
  <BiHomeSmile className='w-20 h-auto  text-primary/90 mx-auto' />

<h3 className='text-2xl font-extrabold hover:text-primary duration-150'>Buy a home</h3>
<p className='text-sm  text-gray-500'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
  <button className='text-sm font-semibold text-gray-500 flex items-center  mx-auto group-hover:text-primary'>Find A Home  <FaAngleRight className='ms-1 group-hover:ms-2 duration-200'/> </button>
  
  <div className='absolute bottom-1 left-1  w-0  group-hover:w-[98%] h-[6px] duration-300 bg-primary '>

  </div>
  </div>
  <div className='px-6 py-10 bg-white text-center space-y-4 group relative shadow rounded-sm'>
  <TbHomeEco className='w-20 h-auto  text-primary/90 mx-auto' />

<h3 className='text-2xl font-extrabold hover:text-primary duration-150'>Rent a home</h3>
<p className='text-sm  text-gray-500'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
  <button className='text-sm font-semibold text-gray-500 flex items-center  mx-auto group-hover:text-primary'>Find A Home  <FaAngleRight className='ms-1 group-hover:ms-2 duration-200'/> </button>
  
  <div className='absolute bottom-1 left-1  w-0  group-hover:w-[98%] h-[6px] duration-300 bg-primary '>

  </div>
  </div>
  <div className='px-6 py-10 bg-white text-center space-y-4 group relative shadow rounded-sm'>
  <TbHomeStats className='w-20 h-auto  text-primary/90 mx-auto' />

<h3 className='text-2xl font-extrabold hover:text-primary duration-150'>Sell a home</h3>
<p className='text-sm  text-gray-500'>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
  <button className='text-sm font-semibold text-gray-500 flex items-center  mx-auto group-hover:text-primary'>Find A Home  <FaAngleRight className='ms-1 group-hover:ms-2 duration-200'/> </button>
  
  <div className='absolute bottom-1 left-1  w-0  group-hover:w-[98%] h-[6px] duration-300 bg-primary '>

  </div>
  </div>
</div>
            
        </div>
    </div>
  )
}

export default MainFocusSection