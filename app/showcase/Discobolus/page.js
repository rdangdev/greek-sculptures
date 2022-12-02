
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import '../../../styles/globals.css'

export default function Kouros() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classical Studies: Greek Sculptures</title>
        <meta name="description" content="Showcase of Ancient Greek Sculptures" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" /> #TODO: fix this
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a href=" ">Discobolus</a>
        </h1>

        <div className={styles.grid}>
          <a href="" className={styles.card}>
            <h2>Discobolus</h2>
            <p>Repudiandae sint nulla impedit. Et non eum inventore dignissimos. Quasi illo quis quia omnis consequatur qui.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/rdangdev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Designed by Raymond
        </a>
      </footer>
    </div>
  )
}


