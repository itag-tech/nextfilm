import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

import Layout from '../components/Layout'
import Collection from '../components/Collection/Collection'
import SearchBar from '../components/SearchBar'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Technical test</title>
        <meta name="description" content="GetHeroes technical test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SearchBar />
      <Collection />
    </ Layout>
  )
}

export default Home
