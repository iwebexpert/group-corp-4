import React, { useEffect, useState } from 'react'
import { mode } from 'helpers/URLRequest'
import { Helmet } from 'react-helmet'
import { Grid, Paper } from '@mui/material'
import ShowListPages from 'components/ShowListPages'
import EditPagesForm from 'components/EditPagesForm'
import Loading from 'components/Loading'

type PageListPagesProps = {
  user: UserType
}

export default function PageListPages({ user }: PageListPagesProps) {
  const role = user?.role
  const id = user?.id
  const [load, setLoad] = useState(true)

  // Change show/hide Loading component
  const changeLoad = () => {
    setLoad(!load)
  }

  useEffect(() => {
    let timerId = setTimeout(changeLoad, 1000)
    return () => {
      clearTimeout(timerId)
    }
  }, [])

  return load && mode === 'development' ? (
    <Loading />
  ) : (
    <>
      <Helmet>
        <title>List Pages</title>
      </Helmet>
      <EditPagesForm userId={id} />
      <Grid container>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <ShowListPages role={role} />
          </Paper>
        </Grid>
      </Grid>
    </>
  )
}
