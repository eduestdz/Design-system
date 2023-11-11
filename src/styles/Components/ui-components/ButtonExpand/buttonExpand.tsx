import React from 'react'
import { Box, Typography } from '@mui/material'
import { ExpandMore, ExpandLess } from '@mui/icons-material'

interface ButtonExpandType {
  label: string
  onToogle: () => void
  expand: boolean
}

const ButtonExpand = ({ label, onToogle, expand }: ButtonExpandType) => {
  const handleClick = () => {
    onToogle()
  }

  return (
    <Box
      role="button"
      display={'flex'}
      alignItems={'center'}
      className={expand ? ' __expanded' : ''}
      gap={1}
      sx={{
        height: '32px',
        borderRadius: '100px',
        padding: '4px 8px 4px 8px',
        cursor: 'pointer',
        '&.__expanded': {
          background: '#E6F5F5',
          color: '#008A8A'
        }
      }}
      onClick={handleClick}
    >
      <Typography
        sx={{
          fontSize: '1em',
          fontWeight: 700,
          lineHeight: '1.25em'
        }}
      >
        {label}
      </Typography>
      {expand ? <ExpandMore /> : <ExpandLess />}
    </Box>
  )
}

export default ButtonExpand
