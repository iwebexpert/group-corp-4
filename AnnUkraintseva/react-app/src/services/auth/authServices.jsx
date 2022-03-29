import jwt_decode from "jwt-decode"

const LOGIN_URL = 'api/users'
const localStorageKey = 'user'

const erroeMas = [400,401,403,404,500]

export const authServices={
    login,
    logout,
    get currentUserValue(){
        return getCurrentUser()
    },

}
 function getCurrentUser(){
    let user = localStorage.getItem(localStorageKey)
    if(user != null)
    {
        user = JSON.parse(user)
    }

    return user

}

function login(email, password, callback =(user)=>{}){
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    return fetch(`http://localhost:9000/api/users?email_like=${email}&password_like=${password}&_embed=tokens`, options).then(handleResponse).then((user)=>{
            let decoded = jwt_decode(user[0].token)
            localStorage.setItem(localStorageKey, JSON.stringify(decoded))
            callback(decoded)
            return decoded
    })
}

function logout(){
    localStorage.removeItem(localStorageKey)
}

function handleResponse(response){
    return response.text().then((text)=>
    {const data = text && JSON.parse(text)
    if (!response.ok){
        if (erroeMas.indexOf(response.status)!==-1){
            authServices.logout()
            location.reload()
        }
        const error = (data && data.message) || response.statusText
        return Promise.reject(error)
    }
    return data
})
}