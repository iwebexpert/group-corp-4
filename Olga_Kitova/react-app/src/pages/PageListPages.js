import React, { useEffect, useState } from 'react'
import {Helmet} from "react-helmet"
import PropTypes from 'prop-types'
import {Grid, Paper} from '@mui/material'
import ShowListPages from 'components/ShowListPages'
import EditPagesForm from 'components/EditPagesForm'
import Loading from 'components/Loading'

export default function PageListPages({user}) {
  const role = user?.role || null
  const id = user?.id || null
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
      <Helmet>
      <title>List Pages</title>
      </Helmet>
    <EditPagesForm userId={id}  />
    <Grid container>
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
PageListPages.defaultProps = {
  user: {}
}
PageListPages.propTypes = {
user: PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  password: PropTypes.string
})
}