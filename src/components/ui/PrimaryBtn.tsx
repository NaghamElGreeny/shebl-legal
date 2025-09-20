"use client";
import Image from "next/image";
import "../../styles/Btn.scss";
export default function PrimaryBtn({
  text,
  width,
  classs,
}: {
  text: string;
  width?: string;
  classs?: string;
}) {
  return (
    <div
      className={`contact-primary-btn ${classs} flex flex-row justify-around content-center gap-1 ${
        width ? `w-[${width}]` : "w-[171px]"
      }`}
    >
      <div className="text-xs md:text-sm">{text}</div>
      <div className="btn-icon">
        <Image
          loading="lazy"
          src="/assets/icons/Vector.png"
          alt="arrow"
          width={24}
          height={24}
          className="ltr:rotate-180"
        />
      </div>
    </div>
  );
}
