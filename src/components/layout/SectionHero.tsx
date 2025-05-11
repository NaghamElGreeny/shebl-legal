'use client'
import React from 'react'
import '../../styles/SectionHero.scss'
export default function SectionHero({ title, description, image }: {
    title: string;
    description: string;
    image: string;
}) {
    return (
        <>
            <div className="section-hero">
                <div className="hero w-full relative flex justify-center items-center" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
                    <div className="overlay absolute inset-0"> </div>
                    <div className="container relative flex justify-center items-center  w-3/5 h-[556px] pr-12 pl-12 pt-[206px] flex-col items-cente gap-10">
                        <h2 className='font-bold text-[40px] text-center'>
                            {title}
                        </h2>
                        <p className='text-center'>
                            {description}
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}

