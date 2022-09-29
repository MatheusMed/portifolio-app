import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import styles from '../styles/Home.module.css'

import 'animate.css';
import InfoComponent from '../components/infoComponent'
import ListBudge from '../components/ListBudge'
import ListSocial from '../components/ListBudge/listaSocial';

const Home: NextPage = () => {


  const [showAbout, setAbout] = useState(false);
  const [showSkill, setSkill] = useState(false);



  function handleSobreInfo() {


    setAbout(!showAbout);
    setSkill(false);

  }

  function handleSobreSill() {


    setSkill(!showSkill);
    setAbout(false);

  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Portfólio</title>

      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}> Portfólio</h1>


        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: "center" }} >
          <InfoComponent text='Sobre Mim' onTap={handleSobreInfo} />


          <InfoComponent text='Skills' onTap={handleSobreSill} />

        </div>


        {
          showAbout &&
          <div className={styles.ContainerSobre} >
            <p className={styles.textSobre} >
              Oi, Meu nome é <a target='blank' href='https://www.linkedin.com/in/matheus-medeiros-4210871a6/'>Matheus </a>
              Tenho 25 anos sou desenvolvedor Mobile / Web e também estudo
              um pouco de Back End, estou me formando em análise e
              desenvolvimento de sistemas pela faculdade UNOPAR;
            </p>

          </div>
        }

        {
          showSkill &&
          <div className={styles.ContainerSobre} >
            <ListBudge />
          </div>
        }



      </main>

      <footer className={styles.footer}>
        Powered by <code className={styles.codeInfoFooter}>Matheus Medeiros</code>

        {ListSocial.map((item, index) => (

          <div key={index} style={{ paddingLeft: 10 }} >
            <a target='blank' href={item.url}>
              <img style={{ borderRadius: 8 }} src={item.img} width={130} height={50} alt="" />
            </a>
          </div>


        ))}

      </footer>
    </div>
  )
}

export default Home
