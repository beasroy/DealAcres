import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import ContactNumber from '@/components/ContactNumber';
const page = () => {
    return (
        <section className='mt-12 container mx-auto lg:w-4/5'>
            <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-20 container mx-auto my-10 overflow-auto'>
                <div className='flex flex-col'>
                    <h1 className="font-semi-bold md:text-3xl text-xl  mb-4">
                        Before listing your property<br /> buyer should know about you?</h1>
                    <div className='h-full md:w-[400px] rounded-xl p-5 border-t-4 border-r-2 border-l-2 border-[#dcf0fd] border-b-4'>
                    <p className='text-md font-semibold text-gray-500 my-2'>Are You RERA registered? </p>
                    <div className='flex flex-row items-center gap-2 mb-2'>
                        <button className='h-full rounded-full border hover:border hover:border-gray-800  px-3 py-1 text-gray-500 text-md'>yes</button>
                        <button className='h-full rounded-full border hover:border hover:border-gray-800 px-3 py-1 text-gray-500 text-md'>I have applied</button>
                        <button className='h-full rounded-full border hover:border hover:border-gray-800 px-3 py-1 text-gray-500 text-md'>Not Applicable</button>
                    </div>
                    <p className='text-sm font-semibold text-gray-500'>RERA Number</p> 
                    <input type='text' className='border p-2 mb-2' />
                    <p className='text-sm font-semibold text-gray-500 mb-1'>Type of Firm</p> 
                    <div className='flex flex-row items-center gap-2 mb-4'>
                        <button className='h-full rounded-md border-r-2 border-l-2 border-t border-b border-gray-800 hover:border hover:border-gray-800  px-3  text-gray-500 text-sm py-1'>Partnership</button>
                        <button className='h-full rounded-md border-r-2 border-l-2 border-t border-b border-gray-800 border hover:border hover:border-gray-800 px-3  text-gray-500 text-sm py-1'>Proprietor</button>
                        <button className='h-full rounded-md border-r-2 border-l-2 border-t border-b border-gray-800 border hover:border hover:border-gray-800 px-3  text-gray-500 text-sm py-1'>Company</button>
                    </div>
                        <p className='text-md font-semibold text-gray-500 my-2'>Company Details </p>
                        <div className='md:w-[80%]'>
                        <input placeholder='Company Name' type='text' className='p-2  w-full mb-2 border' />
                        <input placeholder='Company URL (optional)' type='text' className='p-2  w-full mb-2 border' />
                        <input placeholder='Company Address 1' type='text' className='p-2 rounded-lg w-full mb-2 border' />
                        <input placeholder='Company Address 2 (optional)' type='text' className='p-2  w-full mb-2 border' />
                        <input placeholder='City' type='text' className='p-2  w-full mb-2 border' />
                        </div>
                        <p className='text-md font-semibold text-gray-500 mb-2'>Describe Your Company</p>
                        <textarea className='border' placeholder={'What makes your company unique?'} cols={30}/>
                        <p className='text-md font-semibold text-gray-500 mb-2'>Contact Details</p>
                        <ContactNumber />

                        <Link href={'location-details'}>
                            <button className='w-full bg-blue-600 rounded-md px-8 py-3 font-bold text-white my-3'>Continue</button>
                        </Link>
                    </div>
                </div>
                <div className='h-full w-[400px] rounded-xl bg-[#c9e2f3] p-4 flex flex-col items-center'>

                    <h1 className="text-xl text-center mt-20">
                        This information helps buyer to connect with you easily</h1>

                    <Image src={'/assets/broker.png'} alt='location' height={200} width={200} className='my-20' />
                    <h1 className='font-bold text-xl'>Need Help?</h1>
                    <p className='text-lg'>You Can Email Us</p>
                    <p className='text-lg text-blue-600 mb-20'>Contact@dealacres.com</p>
                </div>
            </div>
        </section>
    )
}

export default page