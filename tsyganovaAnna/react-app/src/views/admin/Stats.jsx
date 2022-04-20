import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Toolbar, Typography, Divider } from '@mui/material'

import Loading from '../../components/Loading/Loading'
import Dashboard from '../../components/Dashboard'
import TableBlock from '../../components/TableBlock'
import { getLogsOfUser } from '../../store/actions/statsActions'
import { isDev } from '../../helpers/devProdMode'

export default function Stats() {
  const dispatch = useDispatch()
  const stats = useSelector((state) => state.stats.data)
  const loading = useSelector((state) => state.stats.loading)
  const logs = []

  stats.forEach((item) => {
    if (item.logs)
      item.logs.forEach((log) =>
        logs.push({
          id: log.id,
          date: log.date,
          action: log.action,
          user: item.name,
          role: item.role,
        }),
      )
  })

  useEffect(() => {
    if (isDev()) {
      setTimeout(() => dispatch(getLogsOfUser()), 1000)
    } else {
      dispatch(getLogsOfUser())
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
              Stats
            </Typography>
          </Toolbar>
          <Divider sx={{ mb: 2 }} />
          <TableBlock
            titles={['Date', 'Action', 'User', 'Role']}
            showFields={['date', 'action', 'user', 'role']}
            fields={logs}
          />
        </Dashboard>
      )}
    </>
  )
}
