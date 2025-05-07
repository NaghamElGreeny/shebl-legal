'use client'
import { JSX } from 'react/jsx-runtime';
import '../../styles/Btn.scss'
import { useTranslations } from 'next-intl';
export default function PrimaryBtn({ text, arrow, width }: {
    text: string;
    arrow: string;
    width?: string;
}) {
    const t = useTranslations('Btns');
    return (
        <div className={`contact-primary-btn flex flex-row justify-around content-center gap-1 !w-[${width}px]`}>
            <div> {text}</div>
            <div className="btn-icon">
                <img src={arrow} alt="arrow-vector" />
            </div>
        </div>
    )
}