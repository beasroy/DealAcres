import React from 'react'
import Button from '../Button/Button'
import Image from 'next/image'
import Free from "../../../public/assets/free.png"

const Herosection = () => {
    return (
        <section className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 container mx-auto mt-10 overflow-auto'>
            <div className='h-full md:mt-20 rounded-xl p-4 gradient-shadow'>
                <h1 className="font-heading my-2">
                    Post Your Property for free
                </h1>
                <p>
                    Add Basic Details
                </p>
                <p className='py-2 font-bold'>
                    Looking For..........
                </p>
                <div className='flex gap-3 items-center mb-2'>
                    <Button heading={'Sell'} />
                    <Button heading={'Rent'} />
                </div>
                <p className='py-2 font-bold'>
                    Property Type
                </p>
                <div className='flex gap-3 items-center mb-2'>
                    <Button heading={'Residential'} />
                    <Button heading={'Commercial'} />
                </div>
            </div>
            <div className='h-full w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center'>
                <div className='flex flex-row gap-2 mt-20 mb-10'>
                    <h1 className="text-lg mt-2 font-semibold mb-6">
                        Post property Ad to <br />
                        sell or rent online for</h1>
                    <h1 className='text-7xl font-bold italic uppercase '>Free</h1>
                </div>
                
                <ul className="list-disc pl-5 text-xl">
                    <li className="mb-2">Advertise For FREE</li>
                    <li className="mb-2">Sell 10 X faster</li>
                    <li className="mb-2">Connect with genuine buyers</li>
                    <li className="mb-2">Get unlimited enquiries</li>
                </ul>
                <Image src={Free} alt='free'height={280} width={280} className='mt-20'/>
            </div>
        </section>
    )
}

export default Herosection