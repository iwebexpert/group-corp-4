import { Typography } from '@mui/material'
import React, { Component, Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { onePageFetch } from '../actions/page'
import { Paper } from '@mui/material'

export default function PagesAboutContainers() {
  const dispatch = useDispatch()
  const page = useSelector((state) => state.page.oneData)
  console.log('pageAbout', page)

  useEffect(() => {
    setTimeout(() => {
      dispatch(onePageFetch('home'))
    }, 1000)
  }, [])

  return (
    <>
      {page.map((obj, index) => (
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
