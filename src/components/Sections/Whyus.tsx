'use client'
import '../../styles/WhyUs.scss'
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn"
import { useTranslations } from 'next-intl';

export default function Whyus() {
    const t = useTranslations("Why-us-section");
  return (
    <>
    <div className="wrapper h-screen w-full flex justify-center items-center">

    <div className="why-us flex w-[95%] h-[90%] rounded-[40px] bg-[url('/assets/images/image.png')] bg-cover ">
    <div className="container h-full w-screen">

    </div>
    </div>

    </div>
    </>
  )
}

