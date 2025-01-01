import React from 'react'

const ContactSection = () => {
  return (
    <div className="contact-bg ">
<div className="bg-primary/70">

  <div className="container py-24 space-y-10">
    <h3 className=" text-2xl  md:text-3xl font-bold text-center text-white">Contact us today if you’d like to know more  <br /> about how we help buy, sell or rent your home</h3>
  <div className="  p-4  md:p-10 bg-white rounded max-w-[720px] mx-auto space-y-4">
  <h4 className= " text-lg md:text-xl font-semibold text-center">Schedule a meeting with our team</h4>
  <p className="text-center text-gray-500  max-w-md mx-auto ">Our experts and developers would love to contribute their expertise and insights to your real estate plans.</p>
  <div className="py-4 space-y-3"> 
     <div className="flex  flex-col md:flex-row  items-center gap-3">
    <input type="text" className="text-gray-600   outline-none focus:border-gray-400 duration-150 w-full md:w-6/12 font-medium px-4 py-2  rounded bg-gray-50 border border-gray-100"  placeholder="Name"  />
    <input type="text" className="text-gray-600   outline-none focus:border-gray-400 duration-150 w-full md:w-6/12 font-medium px-4 py-2  rounded bg-gray-50 border border-gray-100"  placeholder="Mobile"  />
 </div>     <div className="flex flex-col md:flex-row items-center gap-3">
    <input type="text" className="text-gray-600   outline-none focus:border-gray-400 duration-150 w-full  md:w-6/12 font-medium px-4 py-2  rounded bg-gray-50 border border-gray-100"  placeholder="Email"  />
    <input type="text" className="text-gray-600   outline-none focus:border-gray-400 duration-150 w-full   md:w-6/12 font-medium px-4 py-2  rounded bg-gray-50 border border-gray-100"  placeholder="City"  />
 </div>
 <textarea name="" id=""  className="text-gray-600    outline-none focus:border-gray-400 duration-150 w-full font-medium px-4 py-2  rounded bg-gray-50 border border-gray-100"  placeholder="Message"></textarea>
  
 
<button className="btn  uppercase w-full rounded ">Send Email</button>
  </div>
  </div>
</div>
</div>
</div>
  )
}

export default ContactSection