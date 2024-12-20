"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import menuData from './menuData'
import HeaderTop from './HeaderTop'
import Image from 'next/image'
import { FaBars, FaChrome, FaSearch, FaStar, FaUser } from 'react-icons/fa'
import { FaBarsStaggered, FaCartShopping } from 'react-icons/fa6'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { IoIosSettings, IoMdMoon, IoMdSunny } from 'react-icons/io'
import { MdLogout } from 'react-icons/md'
 import { PiMoonStarsDuotone } from 'react-icons/pi'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'


const Header = () => {
    const { theme, setTheme } = useTheme();



    useEffect(()=>{
        console.log(theme);

    },[theme])


    

    const [sticky, setSticky] = useState(false)
    const [isMenu, setMenu] = useState(false)
    const pathName = usePathname()

    useEffect(() => {
        setMenu(false)
    }, [pathName])



    const handleStickyNavbar = () => {
        if (window.scrollY >= 170) {

            setSticky(true)
        } else {
            setSticky(false)
        }

 
    }



    useEffect(() => {
        window.addEventListener("scroll", handleStickyNavbar);
    });





  return (

    <>
    <HeaderTop/>
     <div className='relative'>


    <div className={`   left-0 w-full   z-20   duration-500 transition-all   ${sticky ? "fixed z-20 top-0 bg-white !bg-opacity-80  backdrop-blur-sm transition  shadow" : "absolute  top-3  bg-transparent"}`}>
        
<div className=' container   flex items-center justify-between py-2  md:py-3'>
   <Link href={'/'} className=''>
   <Image   width={600} height={600} alt='logo' src={'/images/logo/logo.png'} className='  h-[35px]  md:h-[40px] w-auto object-contain '  />
   </Link>
   <div className=' hidden  lg:flex items-center gap-6'>

    {menuData.map((item,index)=>{
        
        return(
            <Link  key={index}   href={item.path||"/"}  className=' font-medium text-gray-700 hover:text-primary duration-200 uppercase ' >{item.title}</Link>
        )
    })}
   </div>

   <div className='flex gap-3'>
    <button className='md:w-11 md:h-11 w-9 h-9  hidden  md:flex items-center justify-center   text-primary border border-primary/50 rounded-sm hover:bg-primary hover:text-white duration-150'>
<FaSearch/>
    </button>


    <Menu>
          <MenuButton>
 
   
          <button className='md:w-11 md:h-11 w-9 h-9  flex items-center justify-center   text-primary border border-primary/50 rounded-sm hover:bg-primary hover:text-white duration-150'>
          <FaUser/>
    </button>

           </MenuButton>
          <MenuItems 
          transition
          anchor="bottom end"
          className=" mt-2    w-[300px] px-2 py-3 bg-white rounded-md shadow-lg focus:outline-none  space-y-3          ">
           <div className=' px-3 flex gap-3 items-center'>
           <div className="w-12 h-12 rounded-full ring-2 ring-offset-2 ring-blue-500  bg-white shadow-sm hover:shadow duration-150 border border-slate-400 cursor-pointer overflow-hidden">
              <Image
                width={500}
                height={500}
                alt="user"
                src={'/images/user-placholder.png'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className='flex-1 '>
    <h3 className='text-gray-900  font-bold' >Mark Stivs</h3>
    <h3 className='text-gray-600 text-sm'>user@gmail.com</h3>
            </div>
           </div>
            <hr />
            <div>
       <button className=' flex items-center gap-2 text-sm text-gray-500 font-medium  rounded hover:bg-gray-50 duration-200 hover:text-gray-800 w-ful p-3  w-full '>  <FaUser   className='w-5 h-5' />   Profile View       
       </button>
       <button className=' flex items-center gap-2 text-sm text-gray-500 font-medium  rounded hover:bg-gray-50 duration-200 hover:text-gray-800 w-ful p-3  w-full '>  <IoIosSettings   className='w-5 h-5' />   Account Settings       
       </button>

    
       <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className=' flex items-center gap-2 text-sm text-gray-500 font-medium  rounded hover:bg-gray-50 duration-200 hover:text-gray-800 w-ful p-3  w-full '> 
      {theme=="dark"?
      <>
     <PiMoonStarsDuotone  className='w-5 h-5' />   Dark Mode       
     </>
     
     :
     <>
     <IoMdSunny  className='w-5 h-5' />   Light Mode       
  </>
   }
   
       </button>
  
           
            </div>     <hr />
       <button className=' flex items-center gap-2 text-sm text-gray-500 font-medium  rounded hover:bg-gray-50 duration-200 hover:text-gray-800 w-ful p-3  w-full '>  <MdLogout   className='w-5 h-5' />   Logout       
       
       </button>
          </MenuItems>
        </Menu>




        <button className='md:w-11 md:h-11 w-9 h-9 hidden  md:flex items-center justify-center   text-primary border border-primary/50 rounded-sm hover:bg-primary hover:text-white duration-150'>
        <FaCartShopping/>
    </button>    <button
    
    onClick={()=>setMenu(!isMenu)}
    className='md:w-11 md:h-11 w-9 h-9  lg:hidden   flex items-center justify-center  bg-gray-900  text-white border border-black rounded-sm  hover:bg-opacity-90 duration-150'>
      {isMenu?
      <FaBarsStaggered/>
      :
<FaBars/>
      }
    </button>
   </div>
</div>



    </div>     </div>

    <div className={`fixed  z-30   top-0 xl:hidden left-0 h-full w-9/12 bg-white border-r border-r-slate-100  max-w-sm p-4 space-y-10  ${isMenu ? "translate-x-0" : "-translate-x-[110%]"}   transition-transform ease-in duration-200`}>
    <Image   width={600} height={600} alt='logo' src={'/images/logo/logo.png'} className='  h-[35px]  md:h-[40px] w-auto object-contain '  />

                    <div className='flex flex-col  gap-4 '>
                        {menuData.map((item, index) => (
                            <div
                                key={index}
                            >
                                {item.submenu ?
                                    <div className='flex gap-2 items-center'>
                                        <Link href={item.path||'/'} className='text-[16px] font-medium text-[#545655] hover:text-primary
                '>{item.title}</Link>
                                        <span className='px-3 py-[2px]  rounded-full bg-secondary text-primary border-primary/20  font-medium text-[13px]'>New</span>
                                    </div>
                                    :
                                    <Link href={item.path||"/"} className='text-[16px] font-medium text-[#545655] hover:text-primary'>{item.title}</Link>}
                            </div>
                        ))}
                    </div>
            
                </div>
                {

                 isMenu&& <div className=' fixed top-0 left-0 w-full h-full bg-black/30 z-20' onClick={()=>setMenu(false)} /> 
                }


    </>
  )
}

export default Header