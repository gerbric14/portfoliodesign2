import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: 2023,
        title: 'Web Developer',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam facere quidem est voluptates ratione, sint sapiente natus cupiditate dicta.'
    },
    {
        year: 2023,
        title: 'Web Developer',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam facere quidem est voluptates ratione, sint sapiente natus cupiditate dicta.'
    },
    {
        year: 2023,
        title: 'Web Developer',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam facere quidem est voluptates ratione, sint sapiente natus cupiditate dicta.'
    },
    {
        year: 2023,
        title: 'Web Developer',
        duration: '3 Years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam facere quidem est voluptates ratione, sint sapiente natus cupiditate dicta.'
    }
];

const Work = () => {
  return (
    <div id='work' className='max-w-5xl m-auto md:pl-20 p-4 py-16'>
       <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
       {
        data.map((item, idx) => (
            <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title} 
                duration={item.duration} 
                details={item.details}
            />
        ))
       }
    </div>
  )
}

export default Work