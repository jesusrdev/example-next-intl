import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

const locales = ["en", "de", "es", "ja"];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    messages: {
      ...(await import(`./locales/${locale}/home.json`)).default,
      ...(await import(`./locales/${locale}/about.json`)).default,
    },
  };
});

// export default getRequestConfig(async ({ locale, pathname }) => {
//   // Define a function to determine which namespace to load based on the pathname
//   const namespace =
//     pathname === "/" ? "home" : pathname.split("/")[1] || "common";

//   let messages;
//   try {
//     // Dynamically import the messages for the current locale and namespace
//     messages = (await import(`./locales/${locale}/${namespace}.json`)).default;
//   } catch (error) {
//     console.error(
//       `Error loading messages for locale ${locale} and namespace ${namespace}`,
//       error,
//     );
//     messages = {};
//   }

//   return {
//     locale,
//     messages,
//   };
// });
