import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { AppState } from "reducers/index"
import { pageFetch, pageAddFetch, pageFormEditSave, pageFormEditReset, PagePayload} from "../actions/page"
import PagesForm from "../components/PagesFormMUI"

export default function PagesFormContainers(){
    const dispatch = useDispatch()
    const page = useSelector((state: AppState) => state.page.data)
    const currentEditId = useSelector((state: AppState)=>state.page.currentID)



    const addPages = (data: PagePayload) => {
      dispatch(pageAddFetch(data))
    }
    const getInitialData = ()=>{
      if (currentEditId === null){
                return null
      }
      let data=page.filter((item: PagePayload)=>item.id === currentEditId)
      return data.length === 1 ? data[0] : null
    }


    useEffect(() => {
        setTimeout(()=>{
            dispatch(pageFetch())
        }, 1000)  
    },[])

    const editPageSave = (data:PagePayload) => {
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