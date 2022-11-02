import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import "typeface-cormorant";
import { ContactPage } from '../../modules';

/**
 * Contact Module
 * @returns 
 */
const Contact: NextPage = () => {
  
  return (
    <div>
      <Head>
        <title>J. Alejandro Coronado | Contact</title>
        <meta name="description" content="Contact of J. Alejandro Coronado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContactPage />
    </div>
  )
}

export default Contact
