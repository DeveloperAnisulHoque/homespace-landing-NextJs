import React from 'react'
import { FaHome } from 'react-icons/fa'

const Loading = () => {
    return (
        <>
        <div className='fixed z-[100]  top-0 left-0 h-full w-full bg-white/50 backdrop-blur-sm flex items-center justify-center'>

            <FaHome className='w-12 h-12 text-primary animate-bounce' />

        </div>
        <div className='min-h-screen'></div>
        </>
    )
}

export default Loading