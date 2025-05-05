'use client'
import { JSX } from 'react/jsx-runtime';
import '../../styles/Btn.scss'
import { useTranslations } from 'next-intl';
export default function ContactBtn({ text, arrow }: {
    text: string;
    arrow: string;
}) {
    const t = useTranslations('Btns');
    return (
        <div className="contact-primary-btn flex flex-row justify-around content-center gap-1">
            <div> {text}</div>
            <div className="btn-icon">
                <img src={arrow} alt="arrow-vector" />
            </div>
        </div>
    )
}