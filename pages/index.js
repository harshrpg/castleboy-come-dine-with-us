import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Home() {

  const router = useRouter();

  const voteKatie = () => {
    router.push({
      pathname: "/vote",
      query: {user: 'katie'}
    });
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Come dine with us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Castleboy <a href="/">Come Dine with us!</a>
        </h1>

        <p className={styles.description}>
        Vote here
        </p>

        <div className={styles.grid}>
          <div className={styles.card} onClick={voteKatie}>
            <h3>Katie &rarr;</h3>
          </div>

          <div className={styles.card}>
            <h3>John &rarr;</h3>
          </div>

          <div className={styles.card}>
            <h3>Jack &rarr;</h3>
          </div>

          <div className={styles.card}>
            <h3>Harsh &rarr;</h3>
          </div>

          <div className={styles.card}>
            <h3>Shauna &rarr;</h3>
          </div>

          <div className={styles.card}>
            <h3>Karen &rarr;</h3>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
