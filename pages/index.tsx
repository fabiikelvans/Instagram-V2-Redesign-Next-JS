import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Feed from '../components/Feed'
import Header from '../components/Header'
import Modal from '../components/Modal'

const Home = () => {
  return (
    <div className='bg-white dark:bg-[#090c0e] '>
      <Head>
        <title>Instagram Clone | NEXT JS & Tailwind CSS Build</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Modal/>
    <Header/>
    <Feed/>
    </div>
  )
}

export default Home
