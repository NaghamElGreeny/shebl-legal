'use client'
import Image from 'next/image';
import '../../styles/Btn.scss'
export default function PrimaryBtn({ text, width, classs }: {
    text: string;
    width?: string;
    classs?: string;
}) {

    return (
        <div className={`contact-primary-btn ${classs} flex flex-row justify-around content-center gap-1 ${width ? `w-[${width}]` : "w-[171px]"}`}>
            <div className='sm:text-sm xs:text-xs'>{text}</div>
            <div className="btn-icon">
                <Image src="/assets/icons/vector.png" alt="arrow-vector" width={24} height={24} className='ltr:rotate-180'/>
            </div>
        </div>
    )
}