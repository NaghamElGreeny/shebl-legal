"use client";
import "../../styles/Faq.scss";
import Link from "next/link";
import PrimaryBtn from "../ui/PrimaryBtn";
import { useTranslations } from "next-intl";
import { FaqResponse } from "../../../types";
import { useEffect, useState } from "react";
import { getFaq } from "../../../services/ClientApiHandler";
import Image from "next/image";

export default function Faq({
  faqClass,
  btnClass,
  roundClass,
  bgClass,
  txtClass,
}: {
readonly  faqClass: string;
readonly  btnClass: string;
readonly  roundClass: string;
readonly  bgClass?: string;
readonly  txtClass?: string;
}) {
  const t = useTranslations("Faq");
  const [openId, setOpenId] = useState<number | null>(null);
  const [faqData, setFaqData] = useState<FaqResponse | null>(null);
  function answer(id: number) {
    setOpenId((prevId) => (prevId === id ? null : id));
  }
  useEffect(() => {
    getFaq().then((faqData: FaqResponse) => {
      setFaqData(faqData);
    });
  }, []);
  const faq = faqData?.faq;
  return (
    <div
      // data-aos="zoom-in"
      className="wrapper w-full flex justify-center items-center"
    >
      <div
        className={`faq relative flex justify-center items-center ${faqClass}`}
      >
        <div className={`overlay absolute inset-0 ${roundClass} ${bgClass}`}>
          {" "}
        </div>
        <div className="container relative flex flex-col pt-5 items-center content-evenly  w-full py-3 md:px-4 px-2 ">
          <div className="group1 flex justify-between w-full items-center">
            <h3
              className={`font-bold lg:text-[40px] sm:text-2xl text-base ${txtClass}`}
            >
              {t("title")}
            </h3>
            <Link href={"/faq"} className={`${btnClass}`}>
              {" "}
              <PrimaryBtn
                text={t("btnText")}
                width="161px"
                classs="second-btn-clr"
              />
            </Link>
          </div>
          <div className="group2 flex flex-col justify-between w-full  ">
            {faq?.map((q, index) => (
              <div key={q.id} className={`question`}>
                <div className="q-ans gap-4 flex flex-col justify-between">
                  <h4 className={`${txtClass}`}>
                    {index + 1} . {q.question}
                  </h4>
                  <p
                    id={`${q.id}`}
                    className={`${openId === q.id ? "block" : "hidden"}`}
                  >
                    {q.answer}
                  </p>
                </div>
                <button
                  type="button"
                  className="showAns"
                  onClick={() => answer(q.id)}
                  aria-label={
                    openId === q.id ? t("hideAnswer") : t("showAnswer")
                  }
                  title={openId === q.id ? t("hideAnswer") : t("showAnswer")}
                >
                  <Image
                    loading="lazy"
                    src={`/assets/icons/${
                      openId === q.id ? "hide" : "show"
                    }.svg`}
                    alt={openId === q.id ? t("hideAnswer") : t("showAnswer")}
                    width={24}
                    height={24}
                    className="text-MainColor"
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
