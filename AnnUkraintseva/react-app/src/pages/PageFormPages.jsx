import React, { useState} from 'react'
import PagesFormChange from '../components/PagesFormChange'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Copyright from '../components/Copyright'
import PagesTableContainers from '../containers/PagesTableContainers'
import PagesFormContainers from '../containers/PagesFormContainers'
import { getCurrentUserRole } from '../services/auth/authServices'


export default function PageFormPages() {
  const [changesPages, setChangePages] = useState({})
  const [changePagesVisible, setChangePagesVisible] = useState(true)

  const role = getCurrentUserRole()


  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
                <>
                <PagesFormContainers/>
                </>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <PagesTableContainers/>
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </>
  )
}
