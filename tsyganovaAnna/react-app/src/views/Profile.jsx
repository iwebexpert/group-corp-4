import React from 'react'
import styled from 'styled-components'
import { Divider, Grid, Typography } from '@mui/material'

import { authService } from '../services/auth/authService'
import Dashboard from '../components/Dashboard'

export default function Profile() {
  const { name, email, password, role } = authService.currentUser
  const H3 = styled.h3`
    color: #1d6600;
    margin: 1rem 0;
    font-weight: 400;
    display: inline-block;
  `
  const P = styled.p`
    font-weight: 400;
    margin: 1rem 0;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.00931em;
  `
  const GridItem = styled(Grid)`
    border-bottom: thin rgba(0, 0, 0, 0.12) solid;
  `
  const gridItemLine = function (name, value) {
    return (
      <>
        <GridItem item xs={2}>
          <H3>{name}:</H3>
        </GridItem>
        <GridItem item xs={10}>
          <P>{value}</P>
        </GridItem>
      </>
    )
  }
  return (
    <Dashboard>
      <Typography component="h3" variant="h3" gutterBottom>
        {name}
      </Typography>
      <Divider />
      <Grid container spacing={0}>
        {gridItemLine('Email', email)}
        {gridItemLine('Password', password)}
        {gridItemLine('Role', role)}
      </Grid>
    </Dashboard>
  )
}
