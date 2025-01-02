import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaHome, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FaRightLong } from 'react-icons/fa6'

const Footer = () => {
  return (
<section className="py-10 bg-gray-900 sm:pt-16 lg:pt-24">
    <div className="container ">
        <div className="grid grid-cols-2 gap-x-5 gap-y-12 md:grid-cols-4 md:gap-x-12">
            <div>
                <p className="text-base text-gray-500">Company</p>

                <ul className="mt-8 space-y-4">
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80 flex items-center gap-2 group">  
                            <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>
                            
                             About </Link>
                    </li>
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80 flex items-center gap-2 group">
                        <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>

                             Features </Link>
                    </li>
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">
                        <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>

                             Works </Link>
                    </li>
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">
                        <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>

                             Career </Link>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-base text-gray-500">Help</p>

                <ul className="mt-8 space-y-4">
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">
                        <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>

                             Customer Support </Link>
                    </li>
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">
                        <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>

                             Delivery Details </Link>
                    </li>
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">
                        <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>

                             Terms & Conditions </Link>
                    </li>
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">
                        <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>

                             Privacy Policy </Link>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-base text-gray-500">Resources</p>

                <ul className="mt-8 space-y-4">
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">                            <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>
                        Free eBooks </Link>
                    </li>
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">                            <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>
                        Development Tutorial </Link>
                    </li>
                    <li>
                        <Link href="https://ultra.realhomes.io/"  target='_blank' title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">                             <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>
                        Demo 2</Link>
                    </li>
                    <li>
                        <Link href="https://tunatheme.com/tf/react/quarter-preview/quarter/#/" target='_blank' title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">                            <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>
                        Demo 1
                          </Link>
                    </li>
                </ul>
            </div>

            <div>
                <p className="text-base text-gray-500">Extra Links</p>

                <ul className="mt-8 space-y-4">
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">                            <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>
                        Customer Support </Link>
                    </li>
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">                            <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>
                        Delivery Details </Link>
                    </li>
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">                            <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>
                        Terms & Conditions </Link>
                    </li>
                    <li>
                        <Link href="#" title="" className="text-base text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80  flex items-center gap-2 group">                            <span className="opacity-0 group-hover:opacity-100 duration-300 text-white  -ms-5 group-hover:ms-0 group-hover:text-primary"><FaRightLong/></span>
                        Privacy Policy </Link>
                    </li>
                </ul>
            </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-800" />

        <div className="flex flex-wrap items-center justify-between">
            <Link href={'/'}>
   <Image   width={600} height={600} alt='logo' src={'/images/logo/logo.png'} className='  h-[35px]  md:h-[40px] w-auto object-contain '  />
 
            </Link>
            <ul className="flex items-center space-x-3 md:order-3">
                <li>
                    <Link href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-primary hover:bg-primary hover:border-primary focus:border-primary">
             <FaFacebook/>
                    </Link>
                </li>

                <li>
                    <Link href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-primary hover:bg-primary hover:border-primary focus:border-primary">
                   <FaYoutube/>
                    </Link>
                </li>

                <li>
                    <Link href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-primary hover:bg-primary hover:border-primary focus:border-primary">
              <FaLinkedin/>
                    </Link>
                </li>

                <li>
                    <Link href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-transparent border border-gray-700 rounded-full w-7 h-7 focus:bg-primary hover:bg-primary hover:border-primary focus:border-primary">
             <FaTwitter/>
                    </Link>
                </li>
            </ul>

            <p className="w-full mt-8 text-sm text-center text-gray-100 md:mt-0 md:w-auto md:order-2">© Copyright 2021, All Rights Reserved by Dream-Home</p>
        </div>
    </div>
</section>

  )
}

export default Footer