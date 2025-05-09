'use client'
import React from 'react'

export default function SectionHero({ title, description }: {
    title: string;
    description: string;
}) {
    return (
        <>
            <div className="title-description flex flex-col gap-4 ">
                <h2 className='font-bold text-[40px]'>
                    {title}
                </h2>
                <p className=''>
                    {description}
                </p>
            </div>
        </>
    )
}

