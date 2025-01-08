import React from 'react'

const ChangePasswordTab = () => {
  return (
    <div
    data-aos="fade-up"
    data-aos-duration="200"
      data-aos-easing="linear"
    className='space-y-5'>
 <h3 className='text-lg font-bold'>Change Password</h3>

   <input type="text" className='p-4 border-2 outline-none border-gray-300  focus:border-primary duration-150  w-full rounded max-w-xl ' placeholder='Current Password *' />
   <input type="text" className='p-4 border-2 outline-none border-gray-300  focus:border-primary duration-150  w-full rounded max-w-xl ' placeholder='New Password *' />
   <input type="text" className='p-4 border-2 outline-none border-gray-300  focus:border-primary duration-150  w-full rounded max-w-xl ' placeholder='Confirm Password *' />
<button className='btn block rounded'>Save Changes</button>

    </div>
  )
}

export default ChangePasswordTab