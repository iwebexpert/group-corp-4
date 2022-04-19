import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { Box, Container } from '@mui/material'
import Header from '../header/header'
import { Outlet, useLocation } from 'react-router'
import Copyright from '../copyright/copyright'
import AddCommentsForm from '../forms/add-comments-form/add-comments-form'
import { useDispatch, useSelector } from 'react-redux'
import { commentsFindByPageIdFetch } from '../../actions/comments'
import CommentsTable from '../comments/comments'
import Loading from '../loading/loading'
import './styles.scss'
import { AppState } from '../../reducers'

export type LayoutProps = {
  setIsDarkMode: 'dark' | 'light' | Dispatch<SetStateAction<string>>
}

const Layout = ({ setIsDarkMode }: LayoutProps) => {
  const user = useSelector((state: AppState) => state.user.data)
  const pages = useSelector((state: AppState) => state.page.data)

  const dispatch = useDispatch()
  let location = useLocation()

  const routePage = (item: any) => {
    return item.url === location.pathname.split('/').slice(-1)[0]
  }

  const pageId = pages.filter((page: any) => routePage(page))[0]

  useEffect(() => {
    if (pageId?.id) {
      dispatch(commentsFindByPageIdFetch(pageId.id))
    }
  }, [location, pageId])

  return (
    <>
      {!pages.length && <Loading />}

      {pages.length && (
        <Box>
          <Header toggleThemeMode={setIsDarkMode} />

          <Container className="container">
            <Box mb={10}>
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
          </Container>

          <Copyright />
        </Box>
      )}
    </>
  )
}

export default Layout
