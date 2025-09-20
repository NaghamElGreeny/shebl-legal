"use client";
import Image from "next/image";
import "../../styles/Btn.scss";
import { useTranslations } from "next-intl";
export default function ContactBtn() {
  const t = useTranslations("Btns");
  return (
    <div className="contact-primary-btn flex flex-row justify-around content-center gap-1">
      <div> {t("contact")}</div>
      <div className="btn-icon">
        <Image loading="lazy" src={t("arrow")} alt="arrow-vector" />
      </div>
    </div>
  );
}
