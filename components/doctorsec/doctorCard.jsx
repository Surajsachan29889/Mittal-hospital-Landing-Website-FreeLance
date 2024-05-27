import React from 'react'

function DoctorCard({image,name,specialization}) {
  return (
    <div className='h-[100%] lg:w-[30%] w-[60%] flex flex-col lg:gap-5  rounded-2xl shadow-xl p-[2%] doctorcard duration-500'>
        <div className='bg-pri h-[75%] rounded-2xl'>
            <img src={image} alt="doctor1" className='h-[100%] w-full' />
        </div>
        <h1 className='lg:text-[1.5vw] text-[5vw] font-bold text-center border-b-pri border-b-[2px]'><span className='text-pri'>Dr.</span> {name}</h1>
        <h2 className='lg:text-[1vw] text-[3vw] font-semibold text-center'>{specialization}</h2>

    </div>
  )
}

export default DoctorCard