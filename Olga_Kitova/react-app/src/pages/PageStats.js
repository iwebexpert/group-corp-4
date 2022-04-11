import React, { useEffect } from 'react'
import {Helmet} from "react-helmet"
import {useDispatch, useSelector} from 'react-redux'
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, 
        Divider, Typography} from '@mui/material';
import {getUsersWithLogsFetch} from 'actions/actionsStats'
import {roleName} from './PageProfile'
import styled from '@emotion/styled';

  const CustomeList = styled.li`
  background-color: #f0d800;
  `

  export default function PageStats() {
    const dispatch = useDispatch()
    const {users} =  useSelector(state => state.stats)
    

    useEffect(() => {
        dispatch(getUsersWithLogsFetch())
    },[])

  return (<>
      <Helmet>
    <title>User activity statistics</title>
</Helmet>
  <Typography component="h3" color="primary" gutterBottom>User activity statistics</Typography>
  <br />
  <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sequence number</TableCell>
            <TableCell>User name</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell sx={{"verticalAlign": "top"}} component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell sx={{"verticalAlign": "top"}}>{user.name}</TableCell>
              <TableCell sx={{"verticalAlign": "top"}}>{roleName[user.role]}</TableCell>
              <TableCell sx={{"verticalAlign": "top"}}>{user.logs.length < 1 ? '' : user.logs.map(log => (
                  <ol key={log.id}>
                      <li>{log.actions.date}</li>
                      <li>{log.actions.action}</li>
                      < Divider />
                  </ol>
              )) 
              }</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        
        </>)
}
