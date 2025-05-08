'use client'
import React from 'react'
import '../../styles/SectionHero.scss'
import Link from "next/link";
import { useTranslations } from 'next-intl';

import ContactBtn from '../ui/ContactBtn';

export default function SectionHero({ title, description, image }: {
    title: string;
    description: string;
    image: string;
}) {
    return (
        <>
            <div className="section-hero">
                {/* <div className={`container w-full h-[556px] relative pr-12 pl-12 pt-[206px] bg-cover `} style={{ backgroundImage: `url(${image})` }}> */}
                <div className={`container w-full h-[556px] relative pr-12 pl-12 pt-[206px] bg-cover flex flex-col justify-center items-center`} >
                    <div className="overlay absolute inset-0"> </div>

                    <h2 style={{ color: 'var(--bg-color)' }} className='font-bold text-[40px]'>
                        {title}
                    </h2>
                    <p style={{ color: 'var(--font-sub2)' }} className='text-base font-normal'>
                        {description}
                    </p>
                </div>
            </div >
        </>
    )
}

