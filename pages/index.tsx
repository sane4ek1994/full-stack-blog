import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import stylyes from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return <div className={stylyes.container}>Start my blog page</div>
}
