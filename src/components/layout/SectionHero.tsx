'use client';

import React from 'react';

interface SectionHeroProps {
readonly  title: string;
readonly  description: string;
readonly  image: string;
}

export default function SectionHero({ title, description, image }: SectionHeroProps) {
  return (
    <section className="section-hero relative w-full flex justify-center items-center">
      {/* Background image */}
      <header
        className={`hero relative w-full flex justify-center items-center bg-cover bg-center min-h-[400px] md:min-h-[500px] lg:min-h-[556px]`}
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay */}
        <div className="overlay bg-overlay absolute inset-0" />

        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center gap-6 px-4 sm:px-8 md:px-12 lg:px-20 text-center max-w-3xl">
          <h2 className="font-bold text-[clamp(24px,5vw,40px)] leading-tight text-white">
            {title}
          </h2>
          <p className="text-[clamp(14px,3vw,18px)] leading-relaxed text-white/90">
            {description}
          </p>
        </div>
      </header>
    </section>
  );
}
