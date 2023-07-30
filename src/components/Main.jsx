import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {FaInstagram, FaLinkedinIn, FaTwitter} from 'react-icons/fa'
import p2 from '../assets/p2.avif'

const Main = () => {
  return (
    <div id='main' >
        <img className='w-full h-screen object-cover object-left ]' src={p2} alt="img fondo" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/25'>
        <div className='max-w-3xl m-auto h-full flex flex-col justify-center lg:items-start items-center'>
            <h1 className='sm:text-5xl text-4xl font-bold text-[#001b5e]'>I'm German Briceno</h1>
            <h2 className='flex sm:text-3xl text-2xl pt-4 text-[#001b5e]'>I'm a 
            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    'Web',
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Web Developer',
                    2000,
                    'Design Developer',
                    2000,
                    'Front-end Developer',
                    2000
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '1em', display: 'inline-block', paddingLeft:'5px' }}
                repeat={Infinity}
            />
            </h2>
            <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                <FaInstagram className='cursor-pointer hover:text-rose-600' size={20}/>
                <FaLinkedinIn className='cursor-pointer hover:text-white' size={20}/>
                <FaTwitter className='cursor-pointer hover:text-blue-600' size={20}/>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Main