import React from 'react'
import type { NextPage } from 'next'
import { Layout } from '../components/layout/layout'
import Tokens from '@/components/tokens'

const Token: NextPage = () => {
    return <Tokens />
}

Token.getLayout = page => <Layout>{page}</Layout>
export default Token
