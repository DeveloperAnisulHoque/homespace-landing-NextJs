import Breadcrumb from '@/components/Common/Breadcrumb'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaCalendarAlt, FaComments, FaFacebook, FaLinkedin, FaRegStar, FaStar, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { IoBedOutline } from 'react-icons/io5'

const Page = () => {
    return (
        <div className='bg-white'>
            <Breadcrumb title='Product Details' pageName='Details' />

            <Image width={1800} height={1800} alt='banner' src={'/images/details/image1.jpg'} className='w-full   h-[400px] lg:h-[600px] object-cover' />
            <div className='container py-20 flex flex-col lg:flex-row  gap-5 lg:gap-10'>


                <div className=' lg:w-8/12 space-y-8 lg:space-y-12 '>
                    <div className='flex items-center gap-x-2 gap-y-4  flex-wrap'>
                        <span className='px-4 py-2 font-semibold bg-primary text-white uppercase rounded text-sm'>Featured</span>
                        <span className='px-4 py-2 font-semibold bg-emerald-400 text-white uppercase rounded text-sm'>For Rent</span>
                        <span className='px-4 py-2 font-semibold bg-gray-200 text-gray-700 uppercase rounded text-sm'>For Sale</span>
                        <div className='flex items-center gap-1 text-sm text-gray-500 font-medium sm:ms-6'><FaCalendarAlt className='mb-1 text-primary w-5 h-5' />
                            <span>
                                May 19, 2021
                            </span>
                        </div>
                        <div className='flex items-center gap-1 text-sm text-gray-500 font-medium ms-4'><FaComments className='mb-1 w-5 h-5 text-primary' />
                            <span>
                                35 Comments
                            </span>
                        </div>
                    </div>

                    <h3 className='text-3xl font-bold'>Diamond Manor Apartment</h3>
                    <div className='text-sm text-gray-500 flex items-center gap-2'>
                        <FaLocationDot className='text-primary' />
                        <p>Belmont Gardens, Chicago</p>

                    </div>

                    <div className='border-l-2 border-l-primary  ps-3'>
                        <p className='text-xl text-gray-800 font-semibold'>Description</p>
                    </div>

                    <p className='text-gray-600 leading-relaxed'>Massa tempor nec feugiat nisl pretium. Egestas fringilla phasellus faucibus scelerisque eleifend donec Porta nibh venenatis cras sed felis eget velit aliquet. Neque volutpat ac tincidunt vitae semper quis lectus. Turpis in eu mi bibendum neque egestas congue quisque. Sed elementum tempus egestas sed sed risus pretium quam. Dignissim sodales ut eu sem. Nibh mauris cursus mattis molestee iaculis at erat pellentesque. Id interdum velit laoreet id donec ultrices tincidunt.
                        <br />
                        <br />
                        To the left is the modern kitchen with central island, leading through to the unique breakfast family room which feature glass walls and doors out onto the garden and access to the separate utility room.
                    </p>

                    <div className='border-l-2 border-l-primary  ps-3'>
                        <p className='text-xl text-gray-800 font-semibold'>Property Detail</p>
                    </div>

                    <div className=' bg-slate-100 rounded divide-y md:divide-y-0 md:divide-x divide-slate-300 flex flex-col  md:flex-row  '>
                        <div className='p-8  lg:w-[320px] space-y-4'>
                            <div className='flex items-center gap-2'>

                                <p className='text-sm text-gray-600 font-medium  min-w-[150px]'>Property ID:</p><span className='text-gray-800 font-semibold'> HZ29</span>
                            </div>
                            <div className='flex items-center gap-2'>

                                <p className='text-sm text-gray-600 font-medium  min-w-[150px]'>Home Area:</p><span className='text-gray-800 font-semibold'>  120 sqft</span>
                            </div>
                            <div className='flex items-center gap-2'>

                                <p className='text-sm text-gray-600 font-medium  min-w-[150px]'>Rooms:</p><span className='text-gray-800 font-semibold'>  7</span>
                            </div>
                            <div className='flex items-center gap-2'>

                                <p className='text-sm text-gray-600 font-medium  min-w-[150px]'>Baths:</p><span className='text-gray-800 font-semibold'>  2</span>
                            </div>
                            <div className='flex items-center gap-2'>

                                <p className='text-sm text-gray-600 font-medium  min-w-[150px]'>Year built:</p><span className='text-gray-800 font-semibold'> 1992</span>
                            </div>
                        </div>
                        <div className='p-8 flex-1 space-y-4'>
                            <div className='flex items-center gap-2'>

                                <p className='text-sm text-gray-600 font-medium  min-w-[150px]'>Lot Area:</p><span className='text-gray-800 font-semibold'> HZ29</span>
                            </div>
                            <div className='flex items-center gap-2'>

                                <p className='text-sm text-gray-600 font-medium  min-w-[150px]'>Lot dimensions:</p><span className='text-gray-800 font-semibold'> 120 sqft</span>
                            </div>
                            <div className='flex items-center gap-2'>

                                <p className='text-sm text-gray-600 font-medium  min-w-[150px]'>Beds:</p><span className='text-gray-800 font-semibold'> 6</span>
                            </div>
                            <div className='flex items-center gap-2'>

                                <p className='text-sm text-gray-600 font-medium  min-w-[150px]'>Beds:</p><span className='text-gray-800 font-semibold'> 1200$</span>
                            </div>
                            <div className='flex items-center gap-2'>

                                <p className='text-sm text-gray-600 font-medium  min-w-[150px]'>Property Status:</p><span className='text-gray-800 font-semibold'> For sale</span>
                            </div>
                        </div>
                    </div>
                    <div className='border-l-2 border-l-primary  ps-3'>
                        <p className='text-xl text-gray-800 font-semibold'>Facts and Features</p>
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-x-4 gap-y-8'>
                        <div className=' flex gap-3'>
                            <IoBedOutline className='w-10 h-10 p-2 rounded-sm bg-primary/10 text-primary' />
                            <div>
                                <p className='text-sm  font-medium text-gray-900'>Living Room</p>
                                <p className='text-sm   text-gray-500'>20 x 16 sq feet</p>
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <IoBedOutline className='w-10 h-10 p-2 rounded-sm bg-primary/10 text-primary' />
                            <div>
                                <p className='text-sm  font-medium text-gray-900'>Garage</p>
                                <p className='text-sm   text-gray-500'>20 x 16 sq feet</p>
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <IoBedOutline className='w-10 h-10 p-2 rounded-sm bg-primary/10 text-primary' />
                            <div>
                                <p className='text-sm  font-medium text-gray-900'>Dining Area</p>
                                <p className='text-sm   text-gray-500'>20 x 16 sq feet</p>
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <IoBedOutline className='w-10 h-10 p-2 rounded-sm bg-primary/10 text-primary' />
                            <div>
                                <p className='text-sm  font-medium text-gray-900'>Bedroom</p>
                                <p className='text-sm   text-gray-500'>20 x 16 sq feet</p>
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <IoBedOutline className='w-10 h-10 p-2 rounded-sm bg-primary/10 text-primary' />
                            <div>
                                <p className='text-sm  font-medium text-gray-900'>
                                    Gym Area</p>
                                <p className='text-sm   text-gray-500'>20 x 16 sq feet</p>
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <IoBedOutline className='w-10 h-10 p-2 rounded-sm bg-primary/10 text-primary' />
                            <div>
                                <p className='text-sm  font-medium text-gray-900'>
                                    Garden</p>
                                <p className='text-sm   text-gray-500'>20 x 16 sq feet</p>
                            </div>
                        </div>
                        <div className=' flex gap-3'>
                            <IoBedOutline className='w-10 h-10 p-2 rounded-sm bg-primary/10 text-primary' />
                            <div>
                                <p className='text-sm  font-medium text-gray-900'>
                                    Parking</p>
                                <p className='text-sm   text-gray-500'>20 x 16 sq feet</p>
                            </div>
                        </div>
                    </div>
                    <div className='border-l-2 border-l-primary  ps-3'>
                        <p className='text-xl text-gray-800 font-semibold'>From Our Gallery</p>
                    </div>



                    <div className='grid  grid-cols-1  lg:grid-cols-2 gap-5'>
                        <Image width={1800} height={1800} alt='banner' src={'/images/details/image2.jpg'} className='w-full   h-[400px] object-cover rounded' />
                        <div className='grid grid-rows-2  h-[600px] md:h-[400px] gap-5'>
                            <Image width={1800} height={1800} alt='banner' src={'/images/details/image3.jpg'} className='w-full   h-full  object-cover rounded ' />
                            <Image width={1800} height={1800} alt='banner' src={'/images/details/image4.jpg'} className='w-full   h-full  object-cover rounded ' />

                        </div>
                    </div>
                    <div className='border-l-2 border-l-primary  ps-3'>
                        <p className='text-xl text-gray-800 font-semibold'>Customer Reviews</p>
                    </div>
                    <div className='flex items-center gap-[2px]'>
                        <FaStar className='text-amber-400 w-5 h-5' />
                        <FaStar className='text-amber-400 w-5 h-5' />
                        <FaStar className='text-amber-400  w-5 h-5' />
                        <FaStar className='text-amber-400 w-5 h-5 ' />
                        <FaRegStar className='text-amber-400 w-5 h-5' />
                        <span className='text-sm text-amber-400 hover:text-red-500 cursor-pointer duration-150  mt-1'>
                            ( 95 Reviews )
                        </span>

                    </div>
                </div>
                <div className='lg:w-4/12 space-y-5'>
                       <div className='p-6 border-2 space-y-3'>
                         <div className='w-28 h-28 rounded-full bg-gray-100 mx-auto'>
                           <Image  width={700} height={700} alt='user' className='w-full h-full object-cover rounded-full' src={"/images/details/user1.jpg"}    />
                         </div>
                           <h3 className='text-lg font-bold text-center'>Rosalina D. Willaimson</h3>
                           <p className='text-sm text-gray-500 text-center'>Traveller/Photographer</p>
                           <p className='text-sm text-gray-500 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
                           <div className='flex items-center justify-center gap-[2px]'>
                        <FaStar className='text-amber-400 ' />
                        <FaStar className='text-amber-400  ' />
                        <FaStar className='text-amber-400   ' />
                        <FaStar className='text-amber-400   ' />
                        <FaRegStar className='text-amber-400  ' />
                        <span className='text-sm text-amber-400 hover:text-red-500 cursor-pointer duration-150  mt-1'>
                            ( 1 Reviews )
                        </span>

                    </div>
                    <div className='flex items-center gap-3 justify-center  text-gray-400 text-lg'>
<Link href={'#'}  className='hover:text-primary duration-200'><FaFacebook  /></Link>
<Link href={'#'}  className='hover:text-primary duration-200'><FaYoutube /></Link>
<Link href={'#'}  className='hover:text-primary duration-200'><FaTwitter /></Link>
<Link href={'#'}  className='hover:text-primary duration-200'><FaLinkedin /></Link>
 
                    </div>
                       </div>
                       <div className='p-6 border-2 space-y-3'>
                       <div className='border-l-2 border-l-primary  ps-3'>
                        <p className='text-xl text-gray-800 font-semibold'>  Popular Tags</p>
                    </div>
                      <div className='flex items-center gap-2 flex-wrap py-4'>
<Link href={"#"} className='px-6 py-2 text-sm font-semibold bg-slate-100 text-slate-600 hover:text-white hover:bg-primary duration-500 uppercase'>Popular</Link>
<Link href={"#"} className='px-6 py-2 text-sm font-semibold bg-slate-100 text-slate-600 hover:text-white hover:bg-primary duration-500 uppercase'>desgin</Link>
<Link href={"#"} className='px-6 py-2 text-sm font-semibold bg-slate-100 text-slate-600 hover:text-white hover:bg-primary duration-500 uppercase'>Ux</Link>
<Link href={"#"} className='px-6 py-2 text-sm font-semibold bg-slate-100 text-slate-600 hover:text-white hover:bg-primary duration-500 uppercase'>usability</Link>
<Link href={"#"} className='px-6 py-2 text-sm font-semibold bg-slate-100 text-slate-600 hover:text-white hover:bg-primary duration-500 uppercase'>develop</Link>
<Link href={"#"} className='px-6 py-2 text-sm font-semibold bg-slate-100 text-slate-600 hover:text-white hover:bg-primary duration-500 uppercase'>icon</Link>
<Link href={"#"} className='px-6 py-2 text-sm font-semibold bg-slate-100 text-slate-600 hover:text-white hover:bg-primary duration-500 uppercase'>car</Link>
<Link href={"#"} className='px-6 py-2 text-sm font-semibold bg-slate-100 text-slate-600 hover:text-white hover:bg-primary duration-500 uppercase'>Service</Link>
<Link href={"#"} className='px-6 py-2 text-sm font-semibold bg-slate-100 text-slate-600 hover:text-white hover:bg-primary duration-500 uppercase'>Auto Parts</Link>
                      </div>
                       </div>
                </div>
            </div>
        </div>
    )
}

export default Page