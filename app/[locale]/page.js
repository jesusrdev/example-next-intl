import { Link } from '@/navigation';
import styles from './page.module.css';
import { useTranslations } from 'next-intl';
import LanguageChanger from '@/components/LanguageChanger';

export default function Home({ params: { locale } }) {
  const t = useTranslations('home');

  return (
    <main className={styles.main}>
      <h1>{t('header')}</h1>
      <div className={styles.links}>
        <Link href="/products">{t('links.products')}</Link>
        <Link href="/contact">{t('links.contact')}</Link>
      </div>
        <LanguageChanger locale={locale}/>
    </main>
  );
}