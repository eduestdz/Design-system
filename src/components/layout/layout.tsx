import React from 'react'
import type { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Card, Box } from '@mui/material'

interface Props {
  children?: ReactNode
}

export const Layout: FC<Props> = props => {
  const { children } = props

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}
    >
      <Box
        component="main"
        sx={{ my: { md: 8, xs: 0 }, mx: 'auto' }}
        maxWidth="sm"
      >
        <Card
          variant="outlined"
          sx={{
            padding: {
              md: '32px 54px 32px 54px',
              xs: '24px 24px 32px 24px'
            },
            maxWidth: '516px',
            minHeight: { xs: 'calc(100vh - 87px - 54px)', md: 'auto' },
            height: 'auto',
            boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.22)',
            overflow: 'auto',
            borderRadius: { xs: '0px', md: '15px' }
          }}
        >
          {children}
        </Card>
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}
