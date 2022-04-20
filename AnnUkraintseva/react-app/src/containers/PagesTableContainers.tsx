import React, {useEffect, useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { pageFetch, pageDeleteFetch, PagePayload, pageFormEditStart} from "../actions/page"
import PagesTable from "../components/PagesTableMUI"
import { pageCurrent } from "../page/pageCurrent"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { onePageFetch } from "../actions/page"
import { AppState } from "reducers/index"

export default function PagesTableContainers(){
  const [currentPageVisible, setCurrentPageVisible] = useState(false)

    const dispatch = useDispatch()
    const pages = useSelector((state: AppState) => state.page.data)
    const currentIdOpen = useSelector((state:AppState) => state.page.currentID)
    const currentPageState = useSelector((state:AppState)=> state.page.oneData)


    const currentPage = currentPageState[0]

    const getElemForChange = (id: string) => {
        console.log('Change id', id)

        dispatch(pageFormEditStart(id))
      }

    const deletePages = (id: string) => {
        dispatch(pageDeleteFetch(id))
      }

      const getElemForOpen = (url: string)=>{
        dispatch(onePageFetch(url))  
        setCurrentPageVisible(true)
      }

      // const getInitialDataOpen = ()=>{
      //   if (currentIdOpen === null){
      //             return null
      //   }
      //   let data=pages.filter((item:PagePayload)=>item.id === currentIdOpen)
      //   return data.length === 1 ? data[0] : null
      // }
     
    useEffect(() => {
        setTimeout(()=>{
            dispatch(pageFetch())
        }, 1000)  
    },[])


    return(
      
      <PagesTable
        pages={pages}
        onDeletePages={deletePages}
        getElemForChange={getElemForChange}
        getElemForOpen={getElemForOpen}
      />
     
        
    )
}


