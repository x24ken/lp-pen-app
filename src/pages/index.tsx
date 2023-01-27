import { Inter } from '@next/font/google'
import Head from 'next/head'
import { useState } from 'react'
import Card from '@/components/Card'
import CardList from '@/components/CardList'
import Hero from '@/components/Hero'
import HeroSection from '@/components/HeroSection'
import Modal from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const cards = [
    {
      title: 'Card 1',
      description: 'This is card 1',
      imageUrl: 'https://via.placeholder.com/150',
      buttonText: 'これはボタン',
    },
    {
      title: 'Card 2',
      description: 'This is card 2',
      imageUrl: 'https://via.placeholder.com/150',
      buttonText: 'これはボタン2',
    },
  ]

  return (
    <>
      <Head>
        <title>Pen LPサイト</title>
        <meta name='description' content='たぶんGoogle' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        {/* <Hero imageUrl='/img/hero-image.jpg' /> */}
        <HeroSection imageUrl='/img/hero-image.jpg' productName='サーフィンしているぜえ' />
        <CardList cards={cards} />
      </main>
    </>
  )
}
