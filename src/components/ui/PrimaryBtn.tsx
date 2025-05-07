'use client'
import { JSX } from 'react/jsx-runtime';
import '../../styles/Btn.scss'
import { useTranslations } from 'next-intl';
export default function PrimaryBtn({ text, arrow, width, classs }: {
    text: string;
    arrow: string;
    width?: string;
    classs?: string;
}) {
    const t = useTranslations('Btns');
    return (
        <div className={`contact-primary-btn ${classs} flex flex-row justify-around content-center gap-1 ${width ? `w-[${width}]` : "w-[171px]"}`}>
            <div> {text}</div>
            <div className="btn-icon">
                <img src={arrow} alt="arrow-vector" />
            </div>
        </div>
    )
}