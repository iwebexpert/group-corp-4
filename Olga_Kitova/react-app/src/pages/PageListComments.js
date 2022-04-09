import React, { useEffect } from 'react'
import {Helmet} from "react-helmet"
import { useDispatch, useSelector } from 'react-redux'
import { getAllCommentsFetch } from '../actions/actionComments'
import WrapperPages from './WrapperPages'
import styled from '@emotion/styled'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, 
        TableRow, Typography } from '@mui/material'


const CustomTypography = styled(Typography)`
font-size: 1.3rem;
color: #f44336`;

export default function PageListComments() {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments.data)

    useEffect(() => {
        dispatch(getAllCommentsFetch())
    },[])

  return (<>
        <Helmet>
        <title>List of comments</title>
    </Helmet>
    <WrapperPages>
        <Box>
        <CustomTypography component="h2">List of comments</CustomTypography>
        <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <TableCell>№ п/п</TableCell>
                    <TableCell>Page address</TableCell>
                    <TableCell>Comment content</TableCell>
                    <TableCell>User Id</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
        { comments ? comments.map((comment, index) => (
                                <TableRow key={comment.id}>
                                <TableCell>{index+1}</TableCell>
                                <TableCell>{comment?.page?.url}</TableCell>
                                <TableCell>{comment?.content}</TableCell>
                                <TableCell>{comment?.userId}</TableCell>
                            </TableRow>
        )): null}
            </TableBody>
        </Table>
        </TableContainer>
    </Box>
    </WrapperPages>
  </>)
}
