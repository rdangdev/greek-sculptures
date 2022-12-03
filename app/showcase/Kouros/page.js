/* page.js showcase/kouros */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/showcase.module.css'
import '../../../styles/globals.css'

function image(props) {
  // const name = props.src;
  return (
    <div className="main-image">
      <Image
        src={'/images/greek-sculptures/' + props.src}
        alt='image of Kouros'
        fill blur
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
};


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
          <a href=" ">Kouros</a>
        </h1>

        <div className={styles.grid}>
          /*<Image src='/images/greek-sculptures/zoi.jpg' fill sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
    fill blur
              33vw"/> */
          <img src='/images/greek-sculptures/zoi.jpg' />
          <a href="/showcase/Kouros" className={styles.card}>
            <h2>Kouros &rarr;</h2>
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


