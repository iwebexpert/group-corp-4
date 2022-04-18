import { getParam, setParam } from "../helper/localStorageHelper"
import jwt_decode from 'jwt-decode'

const localStorageKey = 'page'

const erroeMas = [400,401,403,404,500]


export const pageCurrent={
    openPage,
    exitPage,
    get currentPage(){
        return getCurrentPage()
    }

}
 function getCurrentPage(){
    let page = getParam(localStorageKey, null, 'page')

    return page
}

function openPage(id: string, callback: (page: PageType)=>void){
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    return fetch(`http://localhost:9000/api/pages?id=${id}&_embed=tokens`, options).then(handleResponse).then((page)=>{
            let decoded: PageType = jwt_decode(page[0].token)
            if (typeof decoded ==='object')
            {
                decoded['id']= id

            }
            setParam(localStorageKey, 'page', decoded)
            callback(decoded)
            return decoded
    })
}

function exitPage(){
    localStorage.removeItem(localStorageKey)
}

function handleResponse(response: Response){
    return response.text().then((text)=>
    {const data = text && JSON.parse(text)
    if (!response.ok){
        if (erroeMas.indexOf(response.status)!==-1){
            pageCurrent.exitPage()
            location.reload()
        }
        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
    }
    return data
})
}