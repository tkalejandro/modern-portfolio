import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import "typeface-cormorant";
import { ProjectsPage } from '../../modules';

/**
 * Projects Module
 * @returns 
 */
const Projects: NextPage = () => {
  
  return (
    <div>
      <Head>
        <title>J. Alejandro Coronado | Projects</title>
        <meta name="description" content="Projects of J. Alejandro Coronado" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProjectsPage />
    </div>
  )
}

export default Projects
