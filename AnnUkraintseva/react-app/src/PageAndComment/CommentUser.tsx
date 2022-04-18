import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import { Card } from '@mui/material'
import { CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { commentFetch, CommentPayload } from '../actions/comments'
import { func } from 'prop-types'
import { AppState } from 'reducers/index'
import { PagePayload } from 'actions/page'

type CommentUserProps={
  onePage: PagePayload
}

export default function CommentUser({ onePage }: CommentUserProps) {
  const [page, setPage] = useState(onePage)
  const [pageId, setPageId] = useState('')

  const dispatch = useDispatch()

  const currentComment = useSelector((state: AppState) => state.comment.data)

  const size = Object.keys(currentComment).length

  useEffect(() => {
    {
      onePage && setPageId(onePage.id)
    }
    if (onePage != null) {
      setTimeout(() => {
        dispatch(commentFetch(onePage.id))
      }, 1000)
    }
  }, [onePage])


  return (
    <>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {currentComment.map((obj, index: any) => (
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
