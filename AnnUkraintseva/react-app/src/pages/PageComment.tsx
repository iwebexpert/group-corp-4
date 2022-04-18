import React, { useState, useEffect } from 'react'
import ContainerWrapper from './ContainerWrapper'

import { Typography } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { Helmet } from 'react-helmet'
import { CommentPayload } from 'actions/comments'

export default function PageComment() {
  const [allComments, setAllComments] = useState<CommentPayload[]>([])

  useEffect(() => {
    fetch('/api/comments')
      .then((response) => response.json())
      .then((data) => {
        setAllComments(data)
      })
  }, [])

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
            {allComments.map((obj, index) => (
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
