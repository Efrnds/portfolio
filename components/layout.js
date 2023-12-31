import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';

export const siteTitle = 'EF Portfolio';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/images/favicon.svg" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <Link href='/'>
          <Image
            priority
            src="/images/logo.svg"
            height={100}
            width={100}
            alt="logo"
          />
        </Link>
        <Link href="/contact" className={styles.contactButton}>Contact-me</Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>
          Todos os direitos reservados sob os termos da <Link href="https://creativecommons.org/licenses/by-nc-sa/3.0/" target='_blank'>Creative Commons Attribution-NonCommercial-ShareAlike.</Link>
        </p>
      </footer>
    </div>
  )
    ;
}