import jwt_decode from 'jwt-decode'
import { isDev } from '../../helpers/devProdMode'
import { removeParams } from '../../helpers/localStorageHelper'
import { setParams } from '../../helpers/localStorageHelper'
import { getParams } from '../../helpers/localStorageHelper'
import { urls } from '../../helpers/urlHelper'

export const authService = {
  login,
  logout,
  get currentUserValue() {
    return getCurrentUser()
  },
  get token() {
    return getCurrentToker()
  },
  get userId() {
    return getUserId()
  },
}

const localStorageKey = 'user'

const getCurrentUser = () => {
  let user = getParams(localStorageKey, null, 'auth')
  // if (isDev() && user && user?.roles) {
  //   // console.log(user)
  //   user.role.push('ROLE_ROOT')
  // }
  return user
}

function login(email, callback = (user) => {}) {
  return fetch(urls.authLogin(email))
    .then((res) => {
      return res.json()
    })
    .then((user) => {
      if (user.length === 0) {
        return Promise.reject('No')
      }
      let decode = jwt_decode(user[0].token)
      decode['token'] = user[0].token
      setParams(localStorageKey, 'auth', decode)
      callback(decode)
      return decode
    })
}

function getCurrentToker() {
  const user = getCurrentUser()
  return user && user.tokeen ? user.token : null
}
function getUserId() {
  const user = getCurrentUser()
  return user && user.token ? user.token : null
}

function logout() {
  removeParams(localStorageKey)
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
