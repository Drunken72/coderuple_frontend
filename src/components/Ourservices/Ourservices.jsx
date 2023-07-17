import React from 'react'
import Image from 'next/image'
import Company from '../../Images/company.jpg'
const Ourservices = (props) => {
    return (
        <>

            <div className={`relative ${props.reverse ? 'bg-[#FFFFFF]' : 'bg-[#D9D9D9]'}  flex justify-center`}>
                <div className='responsive-container flex flex-col py-20 gap-2'>
                    <h1 className=' capitalize text-3xl  md:text-5xl font-medium'>
                        {props.heading}
                    </h1>
                    <div className={`flex flex-col  ${props.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}>
                        <div className='flex flex-col gap-4 md:w-1/2 font-light'>
                            <p className='text-left'>
                                {props.contentone}
                            </p>
                            <p>
                                {props.contenttwo}
                            </p>
                        </div>
                        <div className=' flex justify-end h-auto w-auto sm:h-72 sm:w-[450px] md:w-1/2'>
                            <Image src={props.image} className='rounded-3xl  lg:h-[310px] bg-white' alt="image" ></Image>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Ourservices