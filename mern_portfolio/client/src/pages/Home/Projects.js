import React, { useState } from 'react'
import SectionTitle from '../../components/SectionTitle'
import { useSelector } from 'react-redux'

function Projects() {
    const [selectedItemIndex, setSelectedItemIndex] = useState(0);
    const { portfolioData } = useSelector((state) => state.root);
    const { project } = portfolioData;
    return (
        <div>
            <SectionTitle title="Projects" />
            <div className='flex py-10 gap-20 sm:flex-col '>
                <div className='sm:flex-row sm:overflow-x-scroll w-1/3 flex flex-col gap-10 border-l-2 border-[#135e4c82] '>
                    {project.map((experience, index) => (
                        <div onClick={() => {
                            setSelectedItemIndex(index);
                        }} className="cursor-pointer">
                            <h1 className={`text-xl px-5 ${selectedItemIndex === index ? 'text-tertiary py-3 border-tertiary bg-[#1a7f5a31]  border-l-4 -ml-[3px]' : 'text-white'}`}>{experience.title}</h1>
                        </div>
                    ))}
                </div>

                <div className='flex items-center justify-between gap-10 sm:flex-col'>
                    <img src={project[selectedItemIndex].image} alt="" className='h-60 w-72 mr-7' />
                    <div className='flex flex-col gap-5'>
                        <h1 className="text-secondary text-2xl">{project[selectedItemIndex].title}</h1>
                        <p className="text-white text-2xl">{project[selectedItemIndex].description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects