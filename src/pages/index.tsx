import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import LandingPage from '../modules/LandingPage/LandingPage'
import "typeface-cormorant";

// TO DO! FIX THIS TYPE PROBLEMS

interface HomeProps {
  setThemeMode: (value : string) => void
}
/**
 * Landing Page Module
 * @returns 
 */
const Home: NextPage = ({setThemeMode} : any) => {
  
  return (
    <div>
      <Head>
        <title>J. Alejandro Coronado | Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage
        setThemeMode={setThemeMode}
      />
    </div>
  )
}

export default Home
