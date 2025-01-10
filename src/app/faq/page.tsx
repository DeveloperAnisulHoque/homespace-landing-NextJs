"use client"
import Breadcrumb from '@/components/Common/Breadcrumb'
import cn from '@/utils/cn'
import Image from 'next/image'
import React, { useState } from 'react'
import { GoPlus } from 'react-icons/go'

const faqContent = [
    {
        id: 1,
        question: "How to buy a product?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id."
    },
    {
        id: 2,
        question: "How can i make refund from your website?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id."
    },
    {
        id: 3,
        question: "Returns and refunds",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id."
    },
    {
        id: 4,
        question: "Are my details secured?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id."
    },
]

const Page = () => {
    const [active, setActive] = useState(1)
    return (
        <div>

            <Breadcrumb title='Frequently asked questions' pageName='faq' />

            <section className=" py-10 lg:py-28 bg-white">
                <div className='container flex flex-col md:flex-row gap-4 md:gap-8'>
                    <div className=' border divide-y rounded h-fit flex-1'>
                        {faqContent.map((item, index) => (
                            <div key={index} className='p-5  space-y-5   '>

                                <div className="flex items-center justify-between gap-3 bg-white">
                                    <p className='text-base  md:text-lg font-bold'>

                                        {item.question}
                                    </p>
                                    <button onClick={() => {
                                        if (item.id == active) {
                                            setActive(0)

                                        } else {

                                            setActive(item.id)
                                        }
                                    }}>
                                        <GoPlus className={cn(' w-6 h-6 md:w-9  md:h-9 p-1 bg-gray-100 border border-transparent  hover:border-primary/40 rounded text-gray-600 hover:text-primary duration-150', {
                                            "bg-white text-primary border-primary/50": item.id == active
                                        })} />
                                    </button>

                                </div>

                                <div className={`  ${active == item.id ? "h-fit opacity-100 pb-5  " : "h-0 opacity-0 "}  transition-all duration-200`}>{item.answer}</div>
                            </div>
                        ))}

                    </div>
                    <div className=' w-full md:w-5/12  lg:w-3/12 bg-gray-100 h-fit'>
                        <Image width={1000} height={1000} alt='banner-faq' className='w-full h-[400px]  object-cover rounded shadow hover:shadow-md duration-150  ' src={'/images/faq/banner1.jpg'} />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Page