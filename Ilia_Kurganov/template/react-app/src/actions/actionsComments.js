import { urls, requestOptions } from './../helpers/urlHelper'

export const COMMENTS_PENDING = 'COMMENTS_PENDING'
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS'
export const COMMENTS_ERROR = 'COMMENTS_ERROR'
export const ADD_COMMENT = 'ADD_COMMENT'

export const commentsPending = () => ({
  type: COMMENTS_PENDING,
})
export const commentsSuccess = (data) => ({
  type: COMMENTS_SUCCESS,
  payload: data,
})
export const commentsError = (error) => ({
  type: COMMENTS_ERROR,
  payload: error,
})

export const commentsFetch = (id) => {
  return (dispatch) => {
    dispatch(commentsPending())
    fetch(urls.getComment(id), requestOptions())
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(commentsSuccess(data))
        return data
      })
      .catch((err) => {
        dispatch(commentsError(err))
      })
  }
}
export const sendComments = (data) => {
  return (dispatch) => {
    fetch(urls.sendComments(), requestOptions('POST', data))
      .then((respone) => respone.json())
      .then((data) => {
        if (data.error) {
          throw data.error
        }
        dispatch(commentsFetch(data))
        return data
      })
      .catch((err) => {
        dispatch(commentsError(err))
      })
  }
}
