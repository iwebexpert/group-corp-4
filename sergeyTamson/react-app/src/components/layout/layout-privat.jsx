import React, { useEffect } from 'react'
import { Box, Grid } from '@mui/material'
import Header from '../header/header'
import { Outlet, useLocation, useMatch, useParams } from 'react-router'
import Copyright from '../copyright/copyright'
import AdminPanel from '../admin/panel'
import { useDispatch, useSelector } from 'react-redux'
import { commentsFindByPageIdFetch } from '../../actions/comments'
import AddCommentsForm from '../forms/add-comments-form/add-comments-form'
import CommentsTable from '../comments/comments'
import { unstable_HistoryRouter } from 'react-router-dom'

const LayoutPrivat = ({ setIsDarkMode }) => {
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
    <Box>
      <Header toggleThemeMode={setIsDarkMode} />

      <Grid container spacing={2}>
        <Grid item xs={2}>
          <AdminPanel />
        </Grid>

        <Grid item xs={8}>
          <Outlet />

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
        </Grid>
      </Grid>

      <Copyright />
    </Box>
  )
}

export default LayoutPrivat
