
export const ACTIVE_PENDING = 'ACTIVE_PENDING'
export const ACTIVE_SUCCESS = 'ACTIVE_SUCCESS'
export const ACTIVE_ERROR = 'ACTIVE_ERROR'


export const activePending = () => ({
    type: ACTIVE_PENDING,
  })
  export const activeSuccess = (data) => ({
    type: ACTIVE_SUCCESS,
    payload: data,
  })
  export const activeError = (error) => ({
    type: ACTIVE_ERROR,
    payload: error,
  })


  export const activeFetch = () => {
    return (dispatch) => {
      dispatch(activePending())
  
      const options = {
        method: 'GET',
        'Content-Type': 'application/json',

      }
      fetch('/api/logger', options)
        .then((result) => result.json())
        .then((result) => {
          if (result.error) {
            throw result.error
          }
          console.log('resultActive', result)
          dispatch(activeSuccess(result))
          return result
        })
        .catch((error) => {
          dispatch(activeError(error))
        })
    }
  }
  