import React, { useState, useEffect } from 'react'
import ContainerWrapper from './ContainerWrapper'
import CommentForm from '../components/CommentForm'
import { Typography } from '@mui/material'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'

export default function PageComment() {
  const [allComments, setAllComments] = useState([])


  useEffect(() => {
    fetch('/api/comments')
      .then((response) => response.json())
      .then((data) => {
        setAllComments(data)
      })
  }, [])

  return (
    <>
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
