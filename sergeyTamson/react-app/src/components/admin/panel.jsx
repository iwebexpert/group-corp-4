import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const AdminPanel = () => {
  // const pages = useSelector((state) => state.page.data)

  const pages = [
    {
      id: 1,
      url: 'pages',
      title: 'Страницы',
    },
    {
      id: 2,
      url: 'comments',
      title: 'Комментарии',
    },
    {
      id: 3,
      url: 'users',
      title: 'Пользователи',
    },
    {
      id: 4,
      url: 'profile',
      title: 'Мой профиль',
    },
    {
      id: 5,
      url: 'stats',
      title: 'Логи',
    },
    {
      id: 6,
      url: 'logout',
      title: 'Выход',
    },
  ]

  return (
    <List color="secondary" component="nav">
      {pages?.map((page) => (
        <Link to={page.url} key={page.id}>
          <ListItemButton color="secondary">
            <ListItemText primary={page.title} color="secondary" />
          </ListItemButton>
        </Link>
      ))}
    </List>
  )
}

export default AdminPanel
