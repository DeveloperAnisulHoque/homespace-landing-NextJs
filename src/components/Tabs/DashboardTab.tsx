import React from 'react'

const DashboardTab = () => {
  return (
    <div   
      data-aos="fade-up"
  data-aos-duration="200"
    data-aos-easing="linear"
       className=' '
       >
        <div className='space-y-5'>
            
        <p className='px-4 py-6 bg-slate-100 rounded '>Hello <span className='font-semibold'>UserName</span></p>
        <p className='px-4 py-6 bg-slate-100 rounded '>
        From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details.
        </p>
        <button className='px-4 py-2 bg-rose-400 hover:bg-rose-500 duration-150 text-white rounded font-medium'>Log out</button>
        </div>
       </div>
  )
}

export default DashboardTab