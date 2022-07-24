import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MouseScrollDown from '../components/mouseScrollDown'
import About from '../components/about'

export default function Home() {
  return (
    <>
      <Head>
        {/* open graph */}
        <meta name="og:profile:first_name" content='Yu-Ming' />
        <meta name="og:profile:last_name" content='Chang' />
        <meta name="og:profile:username" content='yumingchang' />
        <meta name="og:profile:gender" content='male' />
        {/* fontawesome kit */}
        <title>Backend Developer Portfolio by Yu-Ming Chang</title>
      </Head>

      <div id='home-container' className={styles.container}>
        <main className={styles.main}>
          <h1>Hi, </h1>
          <h1>I'm <span className={styles['developer-name']}>Yu-Ming</span></h1>
          <h1>A JavaScript developer in Taiwan</h1>
          <MouseScrollDown />
        </main>
      </div>

      <About />
    </>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}