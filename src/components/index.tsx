import { Box, Button, Checkbox, Stack } from '@mui/material'
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

  const getStatus = () => {
    if (error) return 'error.main'
    if (!checked) return 'primary.main'
    if (checked) return 'success.main'
  }

  const getStatusName = () => {
    if (error) return '-error'
    if (!checked) return ''
    if (checked) return '-checked'
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Checkbox {...label} checked={checked} onChange={handleChange} />
        {getStatus()}
        <Box
          className={`--component-border${getStatusName()} --corner-s-1 --component-surface${getStatusName()}`}
          sx={{
            width: '150px',
            height: '150px'
            // bgcolor: `${getStatus()}`
          }}
        />
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        mt={2}
      >
        <Button variant="contained" onClick={() => toggleError()}>
          On / Off Error
        </Button>
      </Stack>
    </>
  )
}

export default Home
