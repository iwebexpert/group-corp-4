import { Grid, Typography } from '@mui/material'
import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onePageFetch, PagePayload } from '../actions/page'
import { Helmet } from 'react-helmet'
import { AppState } from 'reducers/index'

export default function PagesAboutContainers() {
  const dispatch = useDispatch()
  const page = useSelector((state:AppState) => state.page.oneData)

  useEffect(() => {
    setTimeout(() => {
      dispatch(onePageFetch('home'))
    }, 1000)
  }, [])

  return (
    <>
      <Helmet>
        <title>Главная</title>
        <meta name="description" content="Главная" />
      </Helmet>
      {page.map((obj: PagePayload, index: string) => (
        <Fragment key={index}>
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              {obj.title}
            </Typography>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              sx={{ border: 2, borderRadius: 2 }}
            >
              {obj.content}
            </Typography>
            <Typography
              variant="h5"
              align="left"
              color="text.secondary"
              paragraph
              sx={{ marginTop: 5 }}
            >
              Автор поста: {obj.userName}
            </Typography>
        </Fragment>
      ))}
    </>
  )
}
