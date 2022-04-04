import jwt_decode from "jwt-decode"

const localStorageKey = 'user'

const erroeMas = [400,401,403,404,500]

export const authServices={
    login,
    logout,
    get currentUserValue(){
        return getCurrentUser()
    },
    get token(){
        return getCurrentToken()
    },

}
export function getCurrentUser(){
    let user = localStorage.getItem(localStorageKey)
    if(user != null)
    {
        user = JSON.parse(user)
    }

    return user
}

export function getCurrentName(){
    const user = getCurrentUser()
    return (user && user.name) ? user.name: null
}

export function getCurrentEmail(){
    const user = getCurrentUser()
    return (user && user.email) ? user.email: null
}

export function getCurrentUserRole(){
    const user = getCurrentUser()
    return (user && user.role) ? user.role : null
}

function getCurrentToken(){
    const user = getCurrentUser()
    return (user && user.token)? user.token: null
} 


function login(email, password, callback =(user)=>{}){
    const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    }
    return fetch(`http://localhost:9000/api/users?email_like=${email}&password_like=${password}&_embed=tokens`, options).then(handleResponse).then((user)=>{
            let decoded = jwt_decode(user[0].token)
            if (typeof decoded ==='object')
            {
                decoded['email']= email
                decoded['token']= user[0].token
            }
            console.log('decoded', typeof decoded)
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