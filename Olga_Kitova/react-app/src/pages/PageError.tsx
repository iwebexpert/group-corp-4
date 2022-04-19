import React from 'react'
import { Helmet } from 'react-helmet'
import WrapperPages from './WrapperPages'
import { Stack, Typography } from '@mui/material'
import iconPageNotFound from 'assets/img/pageNotFound.png'

export default function PageError() {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
      </Helmet>
      <WrapperPages>
        <Stack direction="column" spacing={4} sx={{ display: 'flex', alignItems: 'center' }}>
          <div>
            <img src={iconPageNotFound} />
          </div>
          <Typography variant="body2">Page Not Found</Typography>
        </Stack>
      </WrapperPages>
    </>
  )
}
