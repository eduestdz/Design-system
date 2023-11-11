import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../components/layout/layout'
import HomeApp from '../components/index'

const Home: NextPage = () => {
  return <HomeApp />
}

Home.getLayout = page => <Layout>{page}</Layout>
export default Home
