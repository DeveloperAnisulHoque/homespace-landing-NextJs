import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { MdEmail, MdLocationPin } from 'react-icons/md'

const HeaderTop = () => {
    return (
        <div className=' bg-gray-900   text-primary  py-1 md:py-0'>
            <div className='container  flex items-center gap-x-10 justify-center md:justify-normal flex-wrap'>
                <div className='flex items-center gap-2 py-2 md:py-0 '>

                    <MdEmail className='w-4 h-4' />
                    <span className='text-white font-medium text-sm'>

                        infodemo@gmail.com
                    </span>
                </div>
                <div className='flex items-center gap-2 py-2 md:py-0'>

                    <MdLocationPin className='w-4 h-4' />
                    <span className='text-white font-medium text-sm'>
                        65/F
                        North , Uk</span>
                </div>


                <div className='md:ms-auto flex items-center gap-4'>
                    <Link href={'/'}>
                        <FaFacebook className='text-white' />
                    </Link>

                    <Link href={'/'}>
                        <FaTwitter className='text-white' />
                    </Link>
                    <Link href={'/'}>
                        <FaLinkedin className='text-white' />
                    </Link>

                </div>
                <Link href={'/add'} target='_blank' className='text-white bg bg-primary hover:bg-opacity-95 duration-150  px-4 py-1 md:py-3 font-medium  text-sm'>Add Listing</Link>
            </div>
        </div>
    )
}

export default HeaderTop