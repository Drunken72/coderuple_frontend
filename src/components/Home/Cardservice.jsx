import React, { useState } from 'react'
import company from '../../Images/company.jpg'
import Image from 'next/image';
const Cardservice = (props) => {
  return (
    <div className='flex flex-col lg:flex-row flex-wrap justify-center gap-5 lg:w-4/12 lg:items-start'>
      <div className={` w-full lg:w-full flex flex-col  lg:flex-col justify-center items-center gap-7  ${props.reverse == true ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
        <Image src={props.images} className='h-52 w-auto md:w-full rounded-md bg-white' alt="image"></Image>
        <div className='flex flex-col justify-center '>
          <h4 className='capitalize text-2xl font-semibold text-center pb-3'>{props.heading}</h4>
          <p className='text-center  font-light'>{props.content}</p>
        </div>
      </div>

    </div>
  )
}

export default Cardservice