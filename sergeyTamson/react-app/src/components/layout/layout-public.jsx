import React, { useEffect } from 'react'
import { Box, Container } from '@mui/material'
import Header from '../header/header'
import { Outlet, useLocation } from 'react-router'
import Copyright from '../copyright/copyright'
import AddCommentsForm from '../forms/add-comments-form/add-comments-form'
import { useDispatch, useSelector } from 'react-redux'
import { commentsFindByPageIdFetch } from '../../actions/comments'
import CommentsTable from '../comments/comments'

const Layout = ({ setIsDarkMode }) => {
  const user = useSelector((state) => state.user.data)
  const pages = useSelector((state) => state.page.data)

  const dispatch = useDispatch()
  let location = useLocation()

  const routePage = (item) => {
    return item.url === location.pathname.split('/').slice(-1)[0]
  }

  const pageId = pages.filter((page) => routePage(page))[0]

  useEffect(() => {
    if (pageId?.id) {
      dispatch(commentsFindByPageIdFetch(pageId.id))
    }
  }, [location, pageId])

  return (
    <Container>
      <Header toggleThemeMode={setIsDarkMode} />

      <Box mb={5}>
        <Outlet />
      </Box>

      {user && (
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box mr={4}>
            <AddCommentsForm user={user} pageId={pageId?.id} />
          </Box>

          <Box>
            <CommentsTable />
          </Box>
        </Box>
      )}
      <Copyright />
    </Container>
  )
}

export default Layout
