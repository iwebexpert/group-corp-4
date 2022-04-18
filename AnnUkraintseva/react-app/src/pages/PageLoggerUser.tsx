import React, { useState, useEffect } from 'react'
import ContainerWrapper from './ContainerWrapper'
import Typography from '@mui/material/Typography'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import styled from '@emotion/styled'
import { Grid, Input } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import { Paper } from '@mui/material'
import { Helmet } from 'react-helmet'

import Copyright from '../components/Copyright'

import { useSelector, useDispatch } from "react-redux"
import { activeFetch } from '../actions/activeUser'

import ActionUser from '../components/ActionUserMUI'
import AllUser from '../components/AllUserMUI'
import { allUserFetch, UsersPayload } from '../actions/allUser'
import { AppState } from 'reducers/index'


const TypographyCustom = styled(Typography)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 20px;
`

export function PageLoggerUser() {
  const dispatch = useDispatch()


  const activesUser = useSelector((state:AppState)=> state.active.data)
  const allUser = useSelector((state: AppState)=> state.users.data)


  const [activate, setActivate] = useState<string | null>(null)


  const handleSubmitUserActiv = () => {
     
    return setActivate('activeUser')
    }

  const handleSubmitUser = () => {

    return setActivate('allUser')

  }

  const handleSubmitBack=()=>{
    setActivate(null)
  }

  useEffect(() => {
    setTimeout(()=>{
        dispatch(activeFetch())
    }, 1000)  
   
},[])

  useEffect(()=>{
    dispatch(allUserFetch())
  },[])


  return (
    <>
    <Helmet>
        <title>Информация для администратора</title>
      </Helmet>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {activate===null ? (
            <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <>
                <TypographyCustom>
                  <Button
                    onClick={handleSubmitUserActiv}
                    value="Просмотреть действия пользователей"
                  >
                    Просмотреть действия пользователей
                  </Button>
                  <Button
                    onClick={handleSubmitUser}
                    value="Просмотреть всех авторизованных пользователей"
                  >
                    Просмотреть всех авторизованных пользователей
                  </Button>
                </TypographyCustom>
              </>
            </Paper>
          </Grid>
          ):<Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            {activate === 'activeUser' ? <ActionUser activesUser={activesUser} /> : <AllUser allUser={allUser} />}
            <Button onClick={handleSubmitBack}>Назад</Button>
          </Paper>
          
        </Grid>}
          

          
          {/* ---------------------- */}
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </>
  )
}
