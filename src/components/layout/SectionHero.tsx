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
                <div className="hero w-full relative flex justify-center items-center" style={{ background: `url(${image})`, backgroundSize: 'cover' }}>
                    {/* <div className={`container w-full h-[556px] relative pr-12 pl-12 pt-[206px] bg-cover flex flex-col justify-center items-center`} > */}
                    <div className="overlay absolute inset-0"> </div>
                    <div className="container relative flex justify-center items-center  w-3/5 h-[556px] pr-12 pl-12 pt-[206px] flex-col items-cente gap-10">
                        <h2 style={{ color: 'var(--bg-color)' }} className='font-bold text-[40px] text-center'>
                            {title}
                        </h2>
                        <p style={{ color: 'var(--bg-color)' }} className='text-base font-normal text-center'>
                            {description}
                        </p>
                    </div>
                </div>
            </div >
        </>
    )
}

