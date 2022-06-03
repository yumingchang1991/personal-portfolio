import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Yu-Ming Chang</title>
        <meta name="description" content="Yu-Ming's online portfolio as JavaScript Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hi, </h1>
        <h1>I'm <span className={styles['developer-name']}>Yu-Ming</span></h1>
        <h1>A JavaScript developer in Taiwan</h1>
      </main>
    </div>
  )
}

Home.getLayout = function getLayout(page) {
  return (
    <Layout>
      <NestedLayout>{page}</NestedLayout>
    </Layout>
  )
}
