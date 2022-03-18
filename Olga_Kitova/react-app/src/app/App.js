import React, { useEffect, useState } from 'react'
//Components
import Header from 'components/Header'
import CreatePagesForm from 'components/CreatePagesForm'
import ShowListPages from 'components/ShowListPages'
import EditPagesForm from 'components/EditPagesForm'
//Context
import { Context, ContextProvider} from '../context/Context'

export default function App() {
  const [addPages, setAddPages] = useState(JSON.parse(localStorage.getItem('addPages')) || []);
  const [editPagesObject, setEditPagesObject] = useState({});

  // Add page
  const addOnPagesObject = (data) => {
    setAddPages([...addPages, data])
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
     localStorage.setItem('addPages', JSON.stringify(addPages));
  },[addPages])
  
  return (
    <ContextProvider>
      <Context.Consumer>
    {value => (
     <div className={'app app--' + value.theme}>
      <Header />
      <hr />
      <CreatePagesForm addOnPagesObject={addOnPagesObject}/>
      <hr />
      <ShowListPages addPages={addPages} deleteOnPagesObject={deleteOnPagesObject} getOnPagesObject={getOnPagesObject} />
      <br />
      <hr />
      <EditPagesForm editPagesObject={editPagesObject} editOnPagesObjectFunc={editOnPagesObjectFunc}/>
    </div>)
    }
    </Context.Consumer>
    </ContextProvider>
  )
}
