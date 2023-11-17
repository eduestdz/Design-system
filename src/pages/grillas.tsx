import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../components/layout/layout'
import Grillas from '@/components/grillas'

const Grilla: NextPage = () => {
    return <Grillas />
}

Grilla.getLayout = page => <Layout>{page}</Layout>
export default Grilla
