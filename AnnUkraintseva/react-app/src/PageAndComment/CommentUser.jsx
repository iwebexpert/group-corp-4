import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { commentFetch } from '../actions/comments'
import { func } from 'prop-types'

export default function CommentUser({ onePage }) {
  console.log('onePageGlobal', onePage)
  const [page, setPage] = useState(onePage)
  const [pageId, setPageId] = useState('')

  const dispatch = useDispatch()

  const currentComment = useSelector((state) => state.comment.data)

  console.log('CURRENT COMMENT ', currentComment)
  const size = Object.keys(currentComment).length
  console.log('CURRENT COMMENT SIZE', size)
  //   console.log(currentComment)

  useEffect(() => {
    {
      onePage && setPageId(onePage.id)
    }
    if (onePage != null) {
      setTimeout(() => {
        console.log('pageIdFetch', onePage.id)
        console.log('skdfbshdvkasgvfjksahdfk')
        dispatch(commentFetch(onePage.id))
      }, 1000)
    }
  }, [onePage])

  console.log('pageId Global', pageId)

  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {currentComment.map((obj, index) => (
            <Grid item key={index} xs={12}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">Комментарий {index + 1}</Typography>
                  <Typography>{obj.content}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}
