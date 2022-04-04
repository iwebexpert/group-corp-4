import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { pageFetch, pageDeleteFetch, pageFormEditStart} from "../actions/page"
import PagesTable from '../components/PagesTable'

export default function PagesTableContainers(){
    const dispatch = useDispatch()
    const page = useSelector((state) => state.page.data)

    const getElemForChange = (id) => {
        dispatch(pageFormEditStart(id))
      }

    const deletePages = (id) => {
        dispatch(pageDeleteFetch(id))
      }
    useEffect(() => {
        setTimeout(()=>{
            dispatch(pageFetch())
        }, 1000)  
    },[])


    return(
      
        <PagesTable
        pages={page}
        onDeletePages={deletePages}
        getElemForChange={getElemForChange}
      />
    )
}