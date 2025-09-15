import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import "../globals.scss";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";
import { cookies } from "next/headers";
import AosWrapper from "@/src/components/layout/AosWrapper";
import "aos/dist/aos.css";
import ScrollBtn from "@/src/components/ui/ScrollBtn";
import { Metadata } from "next";


export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const locale = params.locale;

  return {
    title: locale === "ar" ? "شبل" : "Shebl",
    description:
      locale === "ar"
        ? "شبل - منصة تقدم مجموعة شاملة من الخدمات القانونية."
        : "Shebl - we offer a comprehensive range of legal services.",
    icons: {
      icon: "/assets/logo/logo-head.png",
    },
    openGraph: {
      title: locale === "ar" ? "شبل" : "Shebl",
      description:
        locale === "ar"
          ? "تعرف على أهداف شبل ورؤيته وقيمه الأساسية."
          : "Discover Shebl’s goals, vision, and core values.",
      url: `https:/shebl-legal.vercel.app/${locale}`,
      siteName: "Shebl",
      images: [
        {
          url: "/assets/logo/logo-head.png",
          width: 1200,
          height: 630,
          alt: locale === "ar" ? "شبل" : "Shebl",
        },
      ],
      locale: locale,
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const appCookies = await cookies()

  const themeMode = appCookies.get('modeLayout')

  return (
    <html className={`${themeMode ? themeMode : ''}`} lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body className=" flex flex-col min-h-screen">
        {/* <ChangeThem /> */}
        <NextIntlClientProvider>
          <>
            <AosWrapper>

              <Navbar />
              {children}
              <Footer />
            </AosWrapper>
            <ScrollBtn />
          </>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
