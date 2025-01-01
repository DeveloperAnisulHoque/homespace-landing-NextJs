import Link from 'next/link'
import React from 'react'
import { FaAngleDoubleRight, FaSwimmingPool } from 'react-icons/fa'
import { FaUserDoctor } from 'react-icons/fa6'
import { MdDirectionsCarFilled, MdSecurity } from 'react-icons/md'



const SectionData = [
  { icon: MdDirectionsCarFilled, title: "Parking Space", link: "#" },
  { icon: FaSwimmingPool, title: "Swimming Pool", link: "#" },
  { icon: MdSecurity, title: "Private Security", link: "#" },
  { icon: FaUserDoctor, title: "Medical Center", link: "#" },
]

const BuildingAminitieSection = () => {
  return (
    <div className='bg-white  py-[70px] lg:py-[120px]'>
      <div className='container space-y-4'  >
        <div className='flex flex-col gap-4 items-center justify-center'>

          <span className='badge   '>Our Aminities

          </span>

          <h2 className='section-title'>Building Aminities

          </h2>
        </div>
        <div className=' grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-8  pt-14'>
          {SectionData.map((item, index) => {
             const delay = 300 + index * 150;
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={delay}
                key={index} className='  flex gap-3 lg:gap-6 flex-col items-center justify-center   p-4 lg:p-6 shadow  rounded-xl border border-gray-100  bg-white hover:bg-primary group duration-150 cursor-pointer'>

                <item.icon className=' w-20 h-20  lg:w-24 lg:h-24 p-4 rounded-full bg-primary/10 text-primary group-hover:bg-white' />
                <h3 className=' text-xl lg:text-2xl  font-bold text-gray-600 group-hover:text-white duration-150'>{item.title}</h3>
                <Link href={item.link} className='inline-block p-2 bg-primary text-white rounded border border-transparent group-hover:border-white duration-200'><FaAngleDoubleRight /></Link>

              </div>
            )
          })}

        </div>

      </div>
    </div>
  )
}

export default BuildingAminitieSection