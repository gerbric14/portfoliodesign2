import React from 'react'
import ProjectItem from './ProjectItem'
import p1 from '../assets/p1.avif'

const Projects = () => {
  return (
    <div id='project' className='max-w-5xl m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur omnis dolore rem consequuntur at doloremque dolor culpa, a nemo earum reiciendis et incidunt, enim libero similique perspiciatis iure beatae alias.</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={p1} title='app1'  />
            <ProjectItem img={p1} title='app2'  />
            <ProjectItem img={p1} title='app3'  />
            <ProjectItem img={p1} title='app4'  />
        </div>
    </div>
  )
}

export default Projects