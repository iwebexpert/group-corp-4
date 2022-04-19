import React, { useEffect } from 'react'
import { Typography } from '@mui/material'
import PageWrapper from './PageWrapper'
import { Helmet } from 'react-helmet'
import { useDispatch, useSelector } from 'react-redux'
import { onePageFetchbyURL } from '../actions/actionsPages'
import { AppState } from 'reducers/*'
import PageItem from '../components/PageItem/PageItem'

function PageAboutApp() {
  const dispatch = useDispatch()
  const homePage = useSelector((state: AppState) => state.page.homePage)[0]
  useEffect(() => {
    dispatch(onePageFetchbyURL('home'))
  }, [])

  if (!homePage) {
    return (
      <PageWrapper>
        <Helmet>
          <title>Home page</title>
        </Helmet>
        <Typography component="h3" variant="h6" color="primery" gutterBottom>
          pages
        </Typography>
        <Typography component="p" color="primery" gutterBottom>
          Хорошее приложение
        </Typography>
      </PageWrapper>
    )
  }

  return (
    // <Navigate to='pages/1'/>
    <>
      <Helmet>
        <title>About app</title>
      </Helmet>
      <PageItem page={homePage} />
    </>
  )
}

export default PageAboutApp
