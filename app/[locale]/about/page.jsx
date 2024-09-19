import styles from "./../page.module.css";
import { useTranslations } from "next-intl";

export default function About({ params: { locale } }) {
  const t = useTranslations("");

  return (
    <main className={styles.main}>
      <h1>{t("about.title")}</h1>
    </main>
  );
}
