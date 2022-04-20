import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Toolbar, Divider } from '@mui/material'

import Loading from '../../components/Loading/Loading'
import Dashboard from '../../components/Dashboard'
import TableBlock from '../../components/TableBlock'
import { getAllUser } from '../../store/actions/userActions'
import { isDev } from '../../helpers/devProdMode'

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user.data)
  const loading = useSelector((state) => state.user.loading)

  useEffect(() => {
    if (isDev()) {
      setTimeout(() => dispatch(getAllUser()), 1000)
    } else {
      dispatch(getAllUser())
    }
  }, [])
  
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Dashboard>
          <Toolbar sx={{ pl: { sm: 2 }, pr: { xs: 1, sm: 1 } }}>
            <Typography sx={{ flex: '1 1 100%' }} component="h3" variant="h5">
              Users
            </Typography>
          </Toolbar>
          <Divider sx={{ mb: 2 }} />
          <TableBlock
            titles={['Name', 'Email', 'Role']}
            showFields={['name', 'email', 'role']}
            fields={users}
          />
        </Dashboard>
      )}
    </>
  )
}
