"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Script from 'next/script'
import { Head } from 'next/document'
import { Blog1 } from '@/app/components'

export default function Home() {
  return (
    <>
      {/* <Head>
        <title>Raksha Bandhan 2023 - Blog</title>
        <meta
          name="description"
          content="Celebrate Raksha Bandhan's timeless bond of love and protection with meaningful traditions and heartfelt exchanges."
        />
        <meta
          name="keywords"
          content="raksha bandhan, happy raksha bandhan, raksha bandhan 2023, happy raksha bandhan 2023"
        />
      </Head> */}
      <main className={styles.main}>
        <Blog1 />
      </main>
    </>)
}
