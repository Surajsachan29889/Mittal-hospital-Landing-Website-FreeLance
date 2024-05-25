import React from 'react'

function AboutUs() {
  return (
    <div className='lg:h-[150vh] py-[5%] bg-[#fffefe] relative overflow-hidden'>
        <div className='h-[60%] blur-[250px] w-[25%] rounded-full absolute left-[-10%] top-[20%] bg-pri'></div>
        <div className='h-[60%] blur-[250px] w-[25%] rounded-full absolute right-[-10%] top-[20%] bg-pri'></div>
        <div className='flex justify-center items-center flex-col'>
            <h1 className='lg:text-[3vw] font-extrabold'><span className='text-pri'>About</span> Us</h1>
            <h2 className='lg:text-[1.3vw] font-bold'>Leading healthcare institution deticated to exceptional medical services and personlized care.</h2>
        </div>

    </div>
  )
}

export default AboutUs