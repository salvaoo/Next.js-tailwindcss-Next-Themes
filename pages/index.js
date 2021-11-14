import Head from 'next/head'
import ChangeDarkMode from '../components/ChangeDarkMode'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TITLE</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC&family=Caveat&display=swap"
          rel="stylesheet"
        /> */}
      </Head>

      <ChangeDarkMode />
    </div>
  )
}
