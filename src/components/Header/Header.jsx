import Image from 'next/image'
import React from 'react'
import logo from "../../../public/assets/deal_acres_logo.webp"
import { PiUserCircleFill } from "react-icons/pi";

const Header = () => {
  return (
    <header className=' bg-blue-700 py-2 px-5 md:px-20 w-full container mx-auto flex items-center justify-between'>
            <Image src={logo} alt='logo' height={50} width={50} />
            <PiUserCircleFill className='md:mr-10' size={50} color='white'/>
    </header>
  )
}

export default Header