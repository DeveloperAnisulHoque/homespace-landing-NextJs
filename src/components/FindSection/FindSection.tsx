import React from 'react'

const FindSection = () => {
  return (
    <div className=" container   p-6  lg:p-8 bg-white shadow-md       grid  grid-cols-1 md:grid-cols-2  lg:grid-cols-3  xl:grid-cols-4 gap-5 lg:gap-8 ">

 

    <select
    name="options"
    id="options"
    className="p-4  w-full text-gray-700 bg-white border   border-gray-200  shadow-sm hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary  transition-all duration-300 ease-in-out"
  >
    <option value="val1" className="">Choose Area</option>
    <option value="val2">Option 2</option>
    <option value="val3">Option 3</option>
  </select>
  
    <select
    name="options"
    id="options"
    className="p-4  w-full text-gray-700 bg-white border   border-gray-200  shadow-sm hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary  transition-all duration-300 ease-in-out"
  >
    <option value="val1">Property Status</option>
    <option value="val2">Option 2</option>
    <option value="val3">Option 3</option>
  </select>
    <select
    name="options"
    id="options"
    className="p-4  w-full text-gray-700 bg-white border   border-gray-200  shadow-sm hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary  transition-all duration-300 ease-in-out"
  >
    <option value="val1">Property Type</option>
    <option value="val2">Option 2</option>
    <option value="val3">Option 3</option>
  </select>
  
  <button className="  px-5 lg:px-8    py-2  lg:py-4 text-lg bg-primary text-white   hover:opacity-95  uppercase md:max-w-[270px] w-full   ms-auto">Find Now</button>
  
  
  </div>  )
}

export default FindSection