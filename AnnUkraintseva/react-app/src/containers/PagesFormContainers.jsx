import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { pageFetch, pageAddFetch, pageFormEditSave, pageFormEditReset} from "../actions/page"
import PagesForm from '../components/PagesForm'

export default function PagesFormContainers(){
    const dispatch = useDispatch()
    const page = useSelector((state) => state.page.data)
    console.log('pageForm',page)
    const currentEditId = useSelector((state)=>state.page.currentID)



    const addPages = (data) => {
      dispatch(pageAddFetch(data))
    }
    const getInitialData = ()=>{
      if (currentEditId === null){
                return null
      }
      let data=page.filter((item)=>item.id === currentEditId)
      return data.length === 1 ? data[0] : null
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
      <PagesForm
      dataInitial = {getInitialData()}
      onSave = {editPageSave}
      onReset = {editPageReset}
      onAdd = {addPages}
    />  
    )
}