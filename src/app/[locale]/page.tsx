import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const ab = useTranslations("AboutPage");
  return (
    <div>
      <h1>{t("title")}</h1>
      {/* <Link href="/about">{t("about")}</Link> */}
      {/* <p className="md:bg-red-700 bg-green-500   text-rose-300 vision font-[din]">{ab("ourVision")}</p> */}
      {/* <h1 className="text-xl font-bold underline text-green-600"></h1> */}
    </div>
  );
}
