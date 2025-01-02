"use client"
import React, { useState, useEffect } from 'react';
import { FaCamera, FaHeart } from 'react-icons/fa';
import CustomGallery from '../CustomGallary/CustomGallary';
import { FaLocationPin } from 'react-icons/fa6';
import { SlLocationPin } from 'react-icons/sl';
 
const images = [
  {
      full: '/images/banner/banner-1.jpg',
      thumb: '/images/banner/banner-1.jpg',
  },
  {
      full: '/images/banner/banner-2.jpg',
      thumb: '/images/banner/banner-2.jpg',
  },
  {
      full: '/images/banner/banner-3.jpg',
      thumb: '/images/banner/banner-3.jpg',
  },
];

const FeaturedListSection = () => {
  const [gallary, setGallary] = useState(false);

  useEffect(() => {
    // Automatically open the gallery on component mount
    setGallary(true);
  }, []); // Empty dependency array ensures this runs once when the component is mounted

  return (
    <div className="bg-white py-[70px] lg:py-[120px]">
        <div className="container space-y-4">
            <span className="badge">Properties</span>
            <h2 className="section-title">Discover Latest Properties</h2>
            <p className="subtitle">Newest Properties Around You</p>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-12">
              <div className=' space-y-2  lg:space-y-4'>

                <div className="p-4 bg-[url('/images/banner/banner-1.jpg')] bg-cover bg-center rounded-xl min-h-52 lg:min-h-64 relative">
                    <div className="flex justify-between gap-10">
                        <div className="flex-1 flex gap-2 items-center flex-wrap">
                            <span className="px-3 py-1 bg-white font-medium rounded-full text-gray-700 text-sm">For Sale</span>
                            <span className="px-3 py-1 bg-rose-500 font-medium rounded-full text-gray-100 text-sm">For Rent</span>
                        </div>   
                        <button 
                            onClick={() => setGallary(!gallary)}
                            className="px-3 py-1 bg-white font-medium rounded-full text-gray-500 text-sm h-fit hover:text-gray-800 duration-150 flex items-center justify-center gap-1">
                            <FaCamera /> <span className="text-xs">4</span>
                        </button>
                    </div>
                    <button 
                             className=" absolute bottom-2 right-2 w-8 h-8 flex items-center justify-center text-primary bg-white hover:bg-white/80 backdrop-blur-sm duration-150 rounded-full">
                         <FaHeart/>
                        </button>

                       
                </div>          
                
                <div className='space-y-3 p-4 rounded-2xl border border-primary/5 shadow  hover:shadow-md duration-200' >
                  <h4 className='font-bold hover:text-primary duration-150 cursor-pointer w-fit'>Home in Norway</h4>
                  <p className='flex items-center  font-medium gap-1 text-sm text-gray-500'>  <SlLocationPin className='w-4 h-4 text-primary'/>  Lorem ipsum dolor sit amet consectetur.</p>
                  <span className='font-medium text-sm inline-block'>Vila</span>
                  <h3 className='text-lg font-bold'>$450.00</h3>
                <p className='text-xs text-gray-400  font-semibold'><span className='font-semibold text-gray-800'>Added : </span>15 March 2023</p>
                </div>
                    </div>

            </div>
        </div>
{/* 
        {gallary && (
            <CustomGallery 
                images={images} 
                speed={500} 
                isOpen={gallary} 
                setIsOpen={setGallary} 
            />
        )} */}

    
    </div>
  );
};

export default FeaturedListSection;
