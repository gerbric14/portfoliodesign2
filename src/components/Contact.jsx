import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-5xl m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action="https://getform.io/f/40b2d75e-abd3-4cb1-b6b8-4732858729bf" method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full'>
                <div className='flex flex-col'>
                    <label htmlFor="name" className='uppercase text-sm py-2 font-semibold'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 hover:border-[#001b5e] focus:outline-none focus:border-[#001b5e]' type="text" name="name" id='name'/>
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="phone" className='uppercase text-sm py-2 font-semibold'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300 hover:border-[#001b5e] focus:outline-none focus:border-[#001b5e]' type="text" name="phone" id='phone' />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="email" className='uppercase text-sm py-2 font-semibold'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 hover:border-[#001b5e] focus:outline-none focus:border-[#001b5e]' type="email" name="email" id="email" />
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="subject" className='uppercase text-sm py-2 font-semibold'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300 hover:border-[#001b5e] focus:outline-none focus:border-[#001b5e]' type="text" name="subject" id="subject" />
            </div>
            <div className='flex flex-col py-2'>
                <label htmlFor="message" className='uppercase text-sm py-2 font-semibold'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300 hover:border-[#001b5e] focus:outline-none focus:border-[#001b5e]' name="message" id="message" cols="10" rows="5"></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 uppercase font-semibold rounded-lg'>
                Send Message
            </button>
        </form>

    </div>
  )
}

export default Contact