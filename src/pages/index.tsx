import { Inter } from '@next/font/google'
import Head from 'next/head'
import Hero from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Pen LPサイト</title>
        <meta name='description' content='たぶんGoogle' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <Hero imageUrl='/img/hero-image.jpg' />
      </main>
    </>
  )
}
