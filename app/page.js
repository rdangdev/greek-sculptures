// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import '../styles/globals.css'

export default function Home() {
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
          <a href=" ">Greek Sculptures</a> Showcase
        </h1>

        <p className={styles.description}>
          Peer-reviewed analyses of the Ancient Greek Sculptures{' '}
        </p>

        {/* <p className={styles.underDescription}> #TODO: implement view more or smth. idk i just like the cool button.
          <code className={styles.code}>view more</code>
           </p> */}

        <div className={styles.grid}>
          <a href="/showcase/Kouros" className={styles.card}>
            <h2>Kouros &rarr;</h2>
            <p>Repudiandae sint nulla impedit. Et non eum inventore dignissimos. Quasi illo quis quia omnis consequatur qui.</p>
          </a>

          <a href=" " className={styles.card}>
            <h2>Kritios &rarr;</h2>
            <p>Rerum accusamus consequatur commodi qui unde sit iusto. Facilis est autem est laborum corporis eligendi. Nisi soluta qui consequatur hic. Voluptatum eos minus repudiandae.</p>
          </a>

          <a href=" " className={styles.card}>
            <h2>Doryphoros &rarr;</h2>
            <p>Molestiae quibusdam quasi assumenda cupiditate minima recusandae facilis magnam. Delectus sit itaque qui recusandae dignissimos et fuga esse. Rerum minus sed dignissimos et voluptatibus alias.</p>
          </a>

          <a href=" " target="_blank" rel="noopener noreferrer" className={styles.card}>
            <h2>Discobolus &rarr;</h2>
            <p>Officia id repellat adipisci autem sit culpa. Sed porro tempore doloribus deleniti enim. Molestiae illo praesentium voluptatibus rem et dolores.</p>
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

