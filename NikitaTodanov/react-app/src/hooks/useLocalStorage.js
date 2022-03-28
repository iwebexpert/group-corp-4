import  { useEffect, useState } from 'react'

const useLocalStorage =(key, initiallValue =  '') => {
    const [value, setValue]=useState(()=>{
        return localStorage.getItem(key) || initiallValue
    })
    useEffect(() => {
      localStorage.setItem(key,value)  
    },[value,key])

    return [value,setValue]
}

export default useLocalStorage