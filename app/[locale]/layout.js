import "./globals.css";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { locales } from "@/navigation";

export default function RootLayout({ children, params: { locale } }) {
  if (!locales.includes(locale)) {
    notFound();
  }

  // const homeMessages = require(`@/locales/${locale}/home.json`);
  // console.log("home: " + homeMessages);
  // const aboutMessages = require(`@/locales/${locale}/about.json`);
  // console.log("about: " + aboutMessages);

  // const combinedMessages = {
  //   ...aboutMessages,
  //   ...homeMessages,
  // };

  // console.log("messagessss: " + JSON.stringify(combinedMessages));

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale}>
        <body>{children}</body>
      </NextIntlClientProvider>
    </html>
  );
}
