import Head from 'next/head'
import ChangeDarkMode from '../components/ChangeDarkMode'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TITLE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChangeDarkMode />
    </div>
  )
}
