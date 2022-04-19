import React from 'react'
import { Helmet } from 'react-helmet'
import { Divider, ListItemText, Typography } from '@mui/material'
import WrapperPages from './WrapperPages'

type PageProfileProps = {
  user: UserType
}

export default function PageProfile({ user }: PageProfileProps) {
  return (
    <>
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <WrapperPages>
        <Typography component="h2" color="primary" gutterBottom>
          User profile
        </Typography>
        <Typography component="h5" color="secondary">
          Name
        </Typography>
        <ListItemText primary={user?.name} />
        <Divider />
        <Typography component="h5" color="secondary">
          Email
        </Typography>
        <ListItemText primary={user?.email} />
        <Divider />
        <Typography component="h5" color="secondary">
          Password
        </Typography>
        <ListItemText primary={user?.password} />
        <Divider />
        <Typography component="h5" color="secondary">
          Role
        </Typography>
        <ListItemText primary={user?.role} />
      </WrapperPages>
    </>
  )
}
