'use client'
export default function ContactBtn() {

    return (
        <div className="contact-btn flex flex-row justify-around content-center gap-1">
            <div> contact us</div>
            <div className="btn-icon">
                <img src={"/assets/icons/vector.png"} alt="arrow-vector" />
            </div>
        </div>
    )
}