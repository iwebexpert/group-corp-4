import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {Grid, Paper} from '@mui/material'
import CreatePagesForm from 'components/CreatePagesForm'
import ShowListPages from 'components/ShowListPages'
import EditPagesForm from 'components/EditPagesForm'
import Loading from 'components/Loading'
import CreateCommentsForm from 'components/CreateCommentsForm'

export default function PageAdmin({user}) {
  const {role, id} = user
  const [load, setLoad] = useState(true)
  let NODE_ENV = process.env.NODE_ENV

  // Change show/hide Loading component
  const changeLoad = () => {
    setLoad(!load)
  }

  useEffect(() => {
    let timerId = setTimeout(changeLoad,1000)
    return () => {
      clearTimeout(timerId)
    }
  },[])
  
   return load && NODE_ENV === 'development' ? <Loading/> : (
    <>
    <EditPagesForm userId={id}  />
    <Grid container spacing={3}>
               <Grid item xs={12} md={6} lg={7}>
               <Paper
                 sx={{
                   p: 2, display: 'flex', flexDirection: 'column', height: 600,
                 }}>
                       {role === 'admin' ? <CreatePagesForm userId={id} role={role} /> : null }
                   </Paper>
             </Grid>
             <Grid item xs={12} md={6} lg={5}>
               <Paper
                 sx={{
                   p: 2, display: 'flex', flexDirection: 'column', height: 600,
                 }}
               >
                   <CreateCommentsForm userId={id}/>
               </Paper>
             </Grid>
             <Grid item xs={12}>
               <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                   <ShowListPages role={role}  />
               </Paper>
             </Grid>
           </Grid>
         </>
   )
}

//Props types
PageAdmin.defaultProps = {
  user: {}
}
PageAdmin.propTypes = {
user: PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  password: PropTypes.string
})
}