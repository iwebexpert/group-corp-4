import React, {useEffect, useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { pageFetch, pageDeleteFetch, pageFormEditStart} from "../actions/page"
import PagesTable from '../components/PagesTable'
import { pageCurrent } from "../page/pageCurrent"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { onePageFetch } from "../actions/page"

export default function PagesTableContainers(){
  const [currentPageVisible, setCurrentPageVisible] = useState(false)

    const dispatch = useDispatch()
    const pages = useSelector((state) => state.page.data)
    const currentIdOpen = useSelector((state) => state.page.currentID)
    const currentPageState = useSelector((state)=> state.page.oneData)


    const currentPage = currentPageState[0]

    console.log('currentPage',currentPage)



    console.log('pageTable', pages)

    const getElemForChange = (id) => {
        dispatch(pageFormEditStart(id))
      }

    const deletePages = (id) => {
        dispatch(pageDeleteFetch(id))
      }

      const getElemForOpen = (url)=>{
        dispatch(onePageFetch(url)) 
        console.log('currentPageOpen', currentPageState)
        console.log('currentPageOpenID', currentIdOpen)
 
        setCurrentPageVisible(true)
      }

      const getInitialDataOpen = ()=>{
        if (currentIdOpen === null){
                  return null
        }
        let data=pages.filter((item)=>item.id === currentIdOpen)
        return data.length === 1 ? data[0] : null
      }
      const openPageReset = () => {
        // dispatch(pageFormOpenReset())
      }

    //  const getInitialURL =()=>{
    //    let data = getInitialDataOpen()
    //    return data.url
    //  }

    //  console.log('URL', getInitialURL())


      
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


