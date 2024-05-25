import Image from 'next/image'
import React from 'react'

function Card({image,title,para}) {
  return (


          <div class="relative flex lg:h-full h-[50vh] lg:w-80 w-[80%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md card duration-500 ">
        <div class="relative mx-4 -mt-6 lg:h-40 h-[20vh] overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-[hotpink]">
          <Image src={image} alt='..'/>
        </div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans lg:text-[2vw] text-center text-[7vw] font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
          </h5>
          <p class="lg:block hidden font-sans text-[1vw] font-light leading-relaxed text-inherit antialiased">
            {para}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button data-ripple-light="true" type="button" class="select-none rounded-lg lg:w-full w-full lg:h-full h-[7vh] bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Read More
          </button>
        </div>
      </div>
  )
}

export default Card