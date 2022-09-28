import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

import 'animate.css';

const Home: NextPage = () => {




  const [showAbout, setAbout] = useState(false);



  function handleSobreInfo() {


    setAbout(!showAbout);

  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio</title>

      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}> Portfólio</h1>


        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }} >
          <div onClick={handleSobreInfo}   >
            <code
              className={styles.codeSobre}
            >Sobre Min</code>
          </div>

          <div onClick={handleSobreInfo} >
            <code
              className={styles.codeInfo}
            >Skills</code>
          </div>
        </div>


        {
          showAbout &&
          <div className={styles.ContainerSobre} >
            <p>
              ABOOUT
            </p>
          </div>
        }



      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
