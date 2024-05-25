import React from 'react'
import DoctorCard from './doctorsec/doctorCard'


function Doctorsec() {
  return (
    <div className='  lg:px-[10%] py-[5%] lg:h-[110vh] h-[200vh]'>
        <div className='h-full flex flex-col gap-[1%] justify-center items-center'>
            <h1 className='lg:text-[3vw] text-[8vw] font-extrabold lg:h-[15vh] h-[10vh]'>
                <span className='text-pri'>Our</span> Doctors
            </h1>
            <h2 className='lg:h-[15vh] h-[30vh] lg:text-[1.5vw] text-[5vw] font-bold'>
                <span className='text-pri'>Meet Our</span> Exceptional Doctors
            </h2>
            <div className='h-[70vh] flex lg:flex-row flex-col  gap-[10%] w-full justify-center items-center'>
                <DoctorCard

                    image="/doctor1.png"
                    name="Jonh Doe"
                    specialization="UVWXYZ"
                />
                <DoctorCard
                    image="/doctor2.png"
                    name="Renuka Mittal"
                    specialization="UVWXYZ"
                />
            </div>
        </div>

    </div>
  )
}

export default Doctorsec