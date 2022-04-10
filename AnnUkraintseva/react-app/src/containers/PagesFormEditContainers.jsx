import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { pageFetch, pageAdd, pageFormEditSave, pageFormEditReset} from "../actions/page"
import PagesFormChange from "../components/PagesFormChange"

export default function PagesFormEditContainers(){
    const dispatch = useDispatch()
    const page = useSelector((state) => state.page.data)
    const currentEditId = useSelector((state)=>state.page.currentID)

    console.log('pageEdit', page)
    console.log('currentID', currentEditId)

    const addPages = (data) => {
      dispatch(pageAdd(data))
    }

    const getInitialData = ()=>{
      if (currentEditId === null){
                return null
      }
      let data=page.filter((item)=>item.id === currentEditId)
      return data.lenght === 1 ? data[0] : null
    }

    useEffect(() => {
        setTimeout(()=>{
            dispatch(pageFetch())
        }, 1000)  
    },[])

    const editPageSave = (data) => {
      dispatch(pageFormEditSave(data))
    }
    const editPageReset = () => {
      dispatch(pageFormEditReset())
    }


    return(
      <PagesFormChange
      dataInitial = {getInitialData}
      onSave = {editPageSave}
      onReset = {editPageReset}
      onAdd = {addPages}
    />    )
}