import React from 'react'
import { Avatar } from '@mui/material'

export default function AvatarIcon({ name, style }) {
  const getName = () => {
    if (name) {
      return name.charAt(0)
    }
    return 'U'
  }
  return (
    <Avatar area-label={name} sx={{ width: 32, height: 32, ...style }}>
      {getName()}
    </Avatar>
  )
}
