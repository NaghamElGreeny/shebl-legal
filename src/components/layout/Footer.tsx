"use client";
import "@/src/styles/Footer.scss";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Social } from "@/types";
import { useEffect, useState } from "react";
import Popup from "../ui/PopUp";
import { getSocial } from "@/services/ClientApiHandler";

export default function Footer() {
  const [social, setSocial] = useState<Social[] | null>(null);
  useEffect(() => {
    getSocial().then((social: Social[]) => {
      setSocial(social);
    });
  }, []);

  const t = useTranslations("Footer");
  const whatsapp = social?.find((social) => social.key === "phone");
  const facebook = social?.find((social) => social.key === "facebook");
  const x = social?.find((social) => social.key === "x");
  const instagram = social?.find((social) => social.key === "instagram");
  const description = social?.find((social) => social.key === "desc");

  return (
    <>
      <footer className="w-full mt-auto  relative flex justify-center items-center gap-16 bg-[url('/assets/footer/footer.png')] bg-cover  ">
        <div className="overlay absolute inset-0"> </div>
        <div className="foot-container w-full relative flex gap-10 flex-col">
          <div className="footer-shebl flex gap-6">
            <div className="logo">
              <Image
                src={"/assets/logo/Logo-main.png"}
                alt="shebl-logo"
                width={64}
                height={64}
                // className="lg:w-[78px] lg:h-[98px] md:w-[62px] md:h-[78px] w-[46px] h-[58px]"
                className="w-14 h-17"
              />
            </div>
            <div className="description flex flex-col justify-end lg:w-[615px] md:w-[615px] w-[299px] min-h-[98px] gap-3">
              <h3 className="font-bold text-base ">{t("title")}</h3>
              <p className="lg:text-sm font-normal text-xs">
                {description ? description.value : t("description")}
              </p>
            </div>
          </div>
          <div className="line"></div>
          <div className="footer-links flex md:flex-row lg:flex-row flex-col items-center gap-5 justify-between ">
            <div className="terms-privacy flex flex-row gap-4">
              <Popup />
            </div>

            <div className="social-links">
              <ul className="flex md:gap-8 gap-5">
                <li>
                  <Link
                    href={`https://wa.me/${whatsapp?.value}`}
                    target="_blank"
                  >
                    <Image
                      src={"/assets/footer/whatsapp.png"}
                      alt="whatsapp"
                      width={32}
                      height={32}
                    />
                  </Link>
                </li>
                <li>
                  {x?.value ? (
                    <Link href={x?.value} target="_blank">
                      <Image
                        src={"/assets/footer/x.png"}
                        alt="x"
                        width={32}
                        height={32}
                      />
                    </Link>
                  ) : (
                    <Link href="" target="_blank">
                      <Image
                        src={"/assets/footer/x.png"}
                        alt="x"
                        width={32}
                        height={32}
                      />
                    </Link>
                  )}
                </li>
                <li>
                  {instagram?.value ? (
                    <Link href={instagram?.value} target="_blank">
                      <Image
                        src={"/assets/footer/instagram.png"}
                        alt="instagram"
                        width={32}
                        height={32}
                      />
                    </Link>
                  ) : (
                    <Link href="" target="_blank">
                      <Image
                        src={"/assets/footer/instagram.png"}
                        alt="instagram"
                        width={32}
                        height={32}
                      />
                    </Link>
                  )}
                </li>
                <li>
                  {facebook?.value ? (
                    <Link href={facebook?.value} target="_blank">
                      <Image
                        src={"/assets/footer/facebook.png"}
                        alt="Facebook"
                        width={32}
                        height={32}
                      />
                    </Link>
                  ) : (
                    <Link href="" target="_blank">
                      {/* <Image src={'/assets/footer/facebook.png'} alt="Facebook" width={32} height={32} /> */}
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
