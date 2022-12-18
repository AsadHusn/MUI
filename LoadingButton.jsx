import { LoadingButton } from '@mui/lab'
import { Button, Stack } from '@mui/material'
import { Save } from '@mui/icons-material/'
import * as React from 'react'

export default function MUILoadingButton() {
  const [value, setValue] = React.useState(true)
  return (
    <>
      <Button variant='contained' onClick={e => setValue(!value)}>Change LOADING</Button>

      <Stack spacing={2} direction='row' m={4}>

        <LoadingButton loading={value} variant='text'>Submit</LoadingButton>

        <LoadingButton loading={value} variant='contained' >Submit</LoadingButton>

        <LoadingButton loading={value} variant='outlined' >Submit</LoadingButton>

        <LoadingButton loading={value} variant='outlined' loadingIndicator='Loading...' >Submit</LoadingButton>

        <LoadingButton loading={value} variant='outlined' loadingPosition='start' startIcon={<Save />} >Submit</LoadingButton>

        <LoadingButton loading={value} variant='outlined' loadingPosition='end' endIcon={<Save />} >Submit</LoadingButton>
        
      </Stack>
    </>
  )
}