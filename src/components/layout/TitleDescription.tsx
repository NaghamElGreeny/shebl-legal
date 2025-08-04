'use client'
import React from 'react'
import '../../styles/TitleDescription.scss'

export default function TitleDescription({ title, description }: {
    title: string;
    description: string;
}) {
    return (
        <>
            <div className="title-description flex flex-col gap-4 ">
                <h2 className='font-bold text-[40px]'  data-aos="fade-left">
                    {title}
                </h2>
                <p className=''  data-aos="fade-left" data-aos-delay="200">
                    {description}
                </p>
            </div>
        </>
    )
}

