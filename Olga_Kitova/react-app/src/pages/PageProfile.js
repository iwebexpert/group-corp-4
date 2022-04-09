import React from 'react'
import {Helmet} from "react-helmet"
import PropTypes from 'prop-types'
import { Divider, ListItemText, Typography } from '@mui/material'
import WrapperPages from './WrapperPages'

export let roleName = {
  admin: "Administrator",
  user: "User"
}

export default function PageProfile({user}) {
  return (<>
    <Helmet>
    <title>Profile</title>
  </Helmet>
    <WrapperPages>
      <Typography component="h2" color="primary" gutterBottom>User profile</Typography>
      <Typography component="h5" color="secondary" >Name</Typography>
      <ListItemText primary={user?.name} />
       <Divider />
      <Typography component="h5" color="secondary">Email</Typography>
      <ListItemText primary={user?.email} />
       <Divider />
      <Typography component="h5" color="secondary">Password</Typography>
      <ListItemText primary={user?.password} />
       <Divider />
      <Typography component="h5" color="secondary">Role</Typography>
      <ListItemText primary={roleName[user?.role]}/>
    </WrapperPages>
  </>)
}

//Props types
PageProfile.defaultProps = {
  user: {}
}
PageProfile.propTypes = {
user: PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired

})
}
