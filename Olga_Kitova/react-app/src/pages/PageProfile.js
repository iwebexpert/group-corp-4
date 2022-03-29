import React from 'react'
import PropTypes from 'prop-types'
import { Divider, ListItemText, Typography } from '@mui/material'
import WrapperPages from './WrapperPages'

let roleName = {
  admin: "Администратор",
  user: "Пользователь"
}

export default function PageProfile({user}) {
  return (
    <WrapperPages>
      <Typography component="h3" color="primary" gutterBottom>Профиль пользователя</Typography>
      <Typography component="h5" color="secondary" >Имя</Typography>
      <ListItemText primary={user.name} />
       <Divider />
      <Typography component="h5" color="secondary">Email</Typography>
      <ListItemText primary={user.email} />
       <Divider />
      <Typography component="h5" color="secondary">Пароль</Typography>
      <ListItemText primary={user.password} />
       <Divider />
      <Typography component="h5" color="secondary">Роль</Typography>
      <ListItemText primary={roleName[user.role]}/>
    </WrapperPages>
  )
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
