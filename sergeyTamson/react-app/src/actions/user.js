export const USER_PENDING = 'USER_PENDING'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_ERROR = 'USER_ERROR'
export const USER_LOGOUT = 'USER_LOGOUT'

export const ALL_USER_SUCCESS = 'ALL_USER_SUCCESS'

export const userPending = () => ({
  type: USER_PENDING,
})

export const userSuccess = (data) => ({
  type: USER_SUCCESS,
  payload: data,
})

export const userError = (error) => ({
  type: USER_ERROR,
  payload: error,
})

export const userLogout = () => ({
  type: USER_LOGOUT,
})

export const allUserSuccess = (data) => ({
  type: ALL_USER_SUCCESS,
  payload: data,
})

export const userFetch = () => {
  return (dispatch) => {
    dispatch(userPending())

    if (JSON.parse(localStorage.getItem('user'))) {
      dispatch(userSuccess(JSON.parse(localStorage.getItem('user'))))
    } else {
      dispatch(userError('Пользователь не найден'))
    }
  }
}

export const allUserFetch = () => {
  console.log(123141254125)
  return (dispatch) => {
    const options = {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        // Authentication: `Bearer ${authService.token}`,
      },
    }

    fetch(`http://localhost:9000/api/users`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        return dispatch(allUserSuccess(res))
      })
      .catch((err) => console.log(err))
  }
}
