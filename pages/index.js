import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hey, I’m Felix Mutua
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>I'm a developer, architect, and creator. I work as Software Engineer at ImaliPay.
              You’ve found my personal slice of the internet while you're here click to learn more about me.</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Portfolio &rarr;</h3>
            <p>Learn about me!</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Blog &rarr;</h3>
            <p>Discover some awesome pieces i have created.</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Contact Me &rarr;</h3>
            <p>
              Hire me
            </p>
          </a>
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
