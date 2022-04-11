import React, { useEffect } from 'react'
import {Helmet} from "react-helmet"
import { useDispatch, useSelector } from 'react-redux'
import WrapperPages from './WrapperPages'
import {getAllUsersFetch} from 'actions/actionUsers'
import styled from '@emotion/styled'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, 
        TableRow, Typography } from '@mui/material'

const CustomTypography = styled(Typography)`
font-size: 1.3rem;
color: #f44336`;

export default function PageListUsers() {
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.data)

    useEffect(() => {
      dispatch(getAllUsersFetch())
    },[])

  return (<>
    <Helmet>
      <title>List of users</title>
  </Helmet>
    <WrapperPages>
        <Box>
        <CustomTypography component="h2">List of users</CustomTypography>
        <TableContainer>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <TableCell>№ п/п</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Role</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
        {users ? users.map((user, index) => (
                            <TableRow key={user.id}>
                            <TableCell>{index+1}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                        </TableRow>
        )): null}
            </TableBody>
        </Table>
        </TableContainer>
    </Box>
    </WrapperPages>
  </>)
}
