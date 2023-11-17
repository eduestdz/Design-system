import { Button, Link, Stack } from '@mui/material'
import React, { FC } from 'react'

const Home: FC = () => {
  return (
    <Stack spacing={2}
      direction="column"
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}>

      <Button size='large' sx={{ width: '30%' }} color='secondary' variant='contained' href="/tokens">TAREA 1 - TOKENS</Button>
      <Button size='large' sx={{ width: '30%' }} color='info' variant='contained' href="/grillas">TAREA 2 - GRILLAS Y LAYOUTS</Button>
    </Stack >
  )
}

export default Home
