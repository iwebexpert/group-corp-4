import React, { useEffect, useState } from 'react'
import {Grid, Paper} from '@mui/material'
import CreatePagesForm from 'components/CreatePagesForm'
import ShowListPages from 'components/ShowListPages'
import EditPagesForm from 'components/EditPagesForm'
import Loading from 'components/Loading'
import CreateCommentsForm from 'components/CreateCommentsForm'

export default function AdminPanelScreen() {
  const [addPages, setAddPages] = useState([]);
  const [editPagesObject, setEditPagesObject] = useState({});
  const [load, setLoad] = useState(true);
  let NODE_ENV = process.env.NODE_ENV;

  // Change show/hide Loading component
  const changeLoad = () => {
    setLoad(!load)
  }
  // Get data pages json
  const getDataPagesToJSON = () => {
    fetch('api/pages').then(res => res.json()).then(data => setAddPages(data));
    changeLoad();
  }
  // Add page
  const addOnPagesObject = (data) => {
    setAddPages([...addPages, data]);
  }
  // Delete page
  const deleteOnPagesObject = (id) => {
    let indexForDelete;
    addPages.forEach((obj, index) => obj.id === id ? indexForDelete = index : indexForDelete = null);
    setAddPages([...addPages.slice(0, indexForDelete), ...addPages.slice(indexForDelete + 1)])
  }
  // Edit page
  const editOnPagesObjectFunc = (object) => {
    // Overwriting the updated object into an intermediate variable
    setEditPagesObject(object);
    // Changing the object in state
    setAddPages(addPages.map(obj => {
      if (obj.id == object.id) {
         return object;
      } else {
         return obj;
      }}));
      // Clear an intermediate variable
    setEditPagesObject({});
  }
  /* Get object for edit (we get an object from the list and add
it to an intermediate variable to send to the editing component ) */
  const getOnPagesObject = (object) => {
    setEditPagesObject(object);
  }

  useEffect(() => {
     if(NODE_ENV === 'development') {
       setTimeout(getDataPagesToJSON, 1000)
     } else {
      getDataPagesToJSON()
     }
  },[])
  
   return load && NODE_ENV === 'development' ? <Loading /> : 
     (<>
     <EditPagesForm editPagesObject={editPagesObject} editOnPagesObjectFunc={editOnPagesObjectFunc}/>
     <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={7}>
                <Paper
                  sx={{
                    p: 2, display: 'flex', flexDirection: 'column', height: 600,
                  }}>
                        <CreatePagesForm addOnPagesObject={addOnPagesObject} />
                    </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={5}>
                <Paper
                  sx={{
                    p: 2, display: 'flex', flexDirection: 'column', height: 600,
                  }}
                >
                    <CreateCommentsForm />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    <ShowListPages addPages={addPages} deleteOnPagesObject={deleteOnPagesObject} getOnPagesObject={getOnPagesObject} />
                </Paper>
              </Grid>
            </Grid></>)
}
