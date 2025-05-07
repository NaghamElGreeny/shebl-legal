import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.scss";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// export const metadata = {
//   title: "SHEBL",
// };
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

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <head>
        <title>{locale === "ar" ? "شبل" : "shebl"}</title>
        <link rel="icon" href="/assets/logo/logo-head.png" />
      </head>
      <body>

        <NextIntlClientProvider>
          <>
            <Navbar />
            {children}
            <Footer />
          </>

        </NextIntlClientProvider>
      </body>
    </html>
  );
}
