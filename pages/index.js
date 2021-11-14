import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ODIXA EVENTS</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Caveat&display=swap"
          rel="stylesheet"
        /> */}
      </Head>

      <Header />
    </div>
  )
}
