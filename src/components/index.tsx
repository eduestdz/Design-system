import { Box, Button, Checkbox, Stack, Typography } from '@mui/material'
import React, { FC, useState } from 'react'

const Home: FC = () => {
  const [checked, setChecked] = useState(false)
  const [error, setError] = useState(false)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }

  const toggleError = () => {
    setError(!error)
  }

  const nameStyle = () => {
    if (error) return '-error'
    if (!checked) return ''
    if (checked) return '-checked'
  }
  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="center"
      >
        <Typography fontSize={30} mt={4} fontWeight={800}>TOKENS</Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
        mt={9}
      >
        <Box
          className={`--component-border${nameStyle()} --corner-s-1 --component-surface${nameStyle()}`}
          sx={{
            width: '350px',
            height: '150px'
          }}
        />
        <Stack >
          <Checkbox disableRipple={true} color='success' checked={checked} onChange={handleChange} />
          <Button color='error' variant="contained" onClick={() => toggleError()}>
            Activar Error
          </Button>
        </Stack>
      </Stack >
    </Stack>
  )
}

export default Home
