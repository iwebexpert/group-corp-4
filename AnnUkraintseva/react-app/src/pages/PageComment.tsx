import React, { useState, useEffect } from 'react'
import ContainerWrapper from './ContainerWrapper'

import { Typography } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Helmet } from 'react-helmet'
import { commentAllFetch, CommentPayload } from 'actions/comments'
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'reducers/index'

export default function PageComment() {

  const dispatch = useDispatch()

  const comment = useSelector((state: AppState) => state.comment.data)

  console.log('comment', comment)

  useEffect(() => {
    setTimeout(()=>{
        dispatch(commentAllFetch())
    },0)  
},[])

  return (
    <>
      <Helmet>
        <title>Комментарии</title>
      </Helmet>
      <ContainerWrapper>
        <Typography component="h2">Комментарии</Typography>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Страница</TableCell>
              <TableCell>Пользователь</TableCell>
              <TableCell>Комментарий</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {comment.map((obj, index) => (
              <TableRow key={index}>
                <>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{obj.pageId}</TableCell>
                  <TableCell>{obj.userId}</TableCell>
                  <TableCell>{obj.content}</TableCell>
                </>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </ContainerWrapper>
    </>
  )
}
