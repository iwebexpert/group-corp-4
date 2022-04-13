import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Typography, Divider } from '@mui/material'

import Loading from '../components/Loading/Loading'
import Dashboard from '../components/Dashboard'
import TableBlock from '../components/TableBlock'
import { authService } from '../services/auth/authService'
import { getAllStats } from '../store/actions/statsActions'
import { isDev } from '../helpers/devProdMode'

export default function Stats() {
  const isAdmin = authService.isAdmin
  const dispatch = useDispatch()

  const stats = useSelector((state) => state.stats.data)
  const loading = useSelector((state) => state.stats.loading)

  useEffect(() => {
    if (isDev()) {
      setTimeout(() => dispatch(getAllStats()), 1000)
    } else {
      dispatch(getAllStats())
    }
  }, [])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <Dashboard>
          <Typography component="h3" variant="h5">
            List of created stats
          </Typography>
          <Divider sx={{ mt: 1, mb: 2 }} />
          <TableBlock titles={['Date', 'Action']} showFields={['date', 'action']} fields={stats} />
        </Dashboard>
      )}
    </>
  )
}
