const localStorageKey = 'page'

const erroeMas = [400,401,403,404,500]


export const pageCurrent={
    openPage,
    exitPage,
    openPage,
    get currentPage(){
        return getCurrentPage()
    }

}
 function getCurrentPage(){
    let page = localStorage.getItem(localStorageKey)
    if(page != null)
    {
        page = JSON.parse(page)
    }

    return page
}

function openPage(id, callback=(page)=>{}){
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    return fetch(`http://localhost:9000/api/pages?id=${id}&_embed=tokens`, options).then(handleResponse).then((page)=>{
            let decoded = jwt_decode(page[0].token)
            if (typeof decoded ==='object')
            {
                decoded['id']= id
                decoded['token']= page[0].token

            }
            console.log('decoded', typeof decoded)
            localStorage.setItem(localStorageKey, JSON.stringify(decoded))
            callback(decoded)
            return decoded
    })
}

function exitPage(){
    localStorage.removeItem(localStorageKey)
}

function handleResponse(response){
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