'use client'
import '../../styles/Btn.scss'
export default function PrimaryBtn({ text, arrow, width, classs }: {
    text: string;
    arrow: string;
    width?: string;
    classs?: string;
}) {

    return (
        <div className={`contact-primary-btn ${classs} flex flex-row justify-around content-center gap-1 ${width ? `w-[${width}]` : "w-[171px]"}`}>
            <div className='sm:text-sm xs:text-xs'>{text}</div>
            <div className="btn-icon">
                <img src={arrow} alt="arrow-vector" />
            </div>
        </div>
    )
}