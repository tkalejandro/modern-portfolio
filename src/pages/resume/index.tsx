import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import "typeface-cormorant";
import Layout from '../../layout/Layout';
import { ResumePage } from '../../modules';

/**
 * Resume Module
 * @returns 
 */
const Resume: NextPage = () => {
  
  return (
    <div>
      <Head>
        <title>J. Alejandro Coronado | Resume</title>
        <meta name="description" content="Resume of J. Alejandro Coronado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ResumePage />
    </div>
  )
}

export default Resume
