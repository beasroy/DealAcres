import Image from 'next/image'
import React from 'react'

const Card = ({src,heading,description}) => {
    return (
        <div className='flex flex-col items-center md:items-start justify-center'>
            <Image src={src} alt='details' width={120} height={120} className='mb-5' />
            <div>
                <p className='md:font-semibold mb-2 text-xl'>
                    {heading}
                </p>
                <p className='text-xl'>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card