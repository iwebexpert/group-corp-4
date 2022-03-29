import jwt_decode from 'jwt-decode'

export const authService = {
  login,
  logout,
  get currentUserValue() {
    return getCurrentUser()
  },
}

const localStorageKey = 'user'

const getCurrentUser = () => {
  let user = localStorage.getItem(localStorageKey)
  if (user !== null) {
    user = JSON.parse(user)
  }
  return user
}

function login(email, callback = (user) => {}) {
  return (
    fetch(`/api/users?email_like=${email}`)
      .then((res) => {
        return res.json()
      })
      .then((user) => {  
        if (user.length === 0) {  
            return Promise.reject('No')
        }
        const decode = jwt_decode(user[0].token)
        localStorage.setItem(localStorageKey, JSON.stringify(decode))
        callback(decode)
        return decode
      })
  )
}

function logout (){
  localStorage.removeItem(localStorageKey)
}

// const handleResponse = (res) => {
//   return res.text().then((text) => {
//     const data = text && JSON.parse(text)
//     if (!res.ok) {
//       if ([400, 401, 403, 404, 500].indexOf(res.status) !== -1) {
//         authService.logout()
//         location.reload()
//       }
//       const error = (data && data.massage) || res.statusText
//       return Promise.reject(error)
//     }
//     return data
//   })
// }
