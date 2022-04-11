import { authServices } from "../services/auth/authServices"

export const COMMENT_PENDING = 'COMMENT_PENDING'
export const COMMENT_SUCCESS = 'COMMENT_SUCCESS'
export const COMMENT_ERROR = 'COMMENT_ERROR'

export const COMMENT_ADD_ERROR = 'COMMENT_ADD_ERROR'
export const COMMENT_ADD_SUCCESS = 'COMMENT_ADD_SUCCESS'



export const commentPending = () => ({
  type: COMMENT_PENDING,
})
export const commentSuccess = (data) => ({
  type: COMMENT_SUCCESS,
  payload: data,
})
export const commentError = (error) => ({
  type: COMMENT_ERROR,
  payload: error,
})

export const commentFetch = (pageId) => {
  return (dispatch) => {
    dispatch(commentPending())

    const options = {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authServices.token}`,

      },
    }
    fetch(`/api/comments?pageId=${pageId}`,options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        console.log('resultoneCOMMENT', result)
        dispatch(commentSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(commentError(error))
      })
  }
}


export const commentAddSuccess = (data) => ({
  type: COMMENT_ADD_SUCCESS,
  payload: data,
})
export const commentAddError = (error) => ({
  type: COMMENT_ADD_ERROR,
  payload: error,
})


export const commentAddFetch = (data) => {
  return (dispatch) => {
    const options = {
      method: 'POST',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        Authentication: `Bearer ${authServices.token}`,
      },
      body: JSON.stringify(data),
    }

    fetch('/api/comments', options)
      .then((result) => result.json())
      .then((result) => {
        if (result.error) {
          throw result.error
        }
        dispatch(commentAddSuccess(result))
        return result
      })
      .catch((error) => {
        dispatch(commentAddError(error))
      })
  }
}
