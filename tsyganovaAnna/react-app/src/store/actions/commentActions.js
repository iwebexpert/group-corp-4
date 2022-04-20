import { urls, request, response } from '../../helpers/requestHelper'

export const COMMENTS_LOADING = 'COMMENTS_LOADING'
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS'
export const COMMENTS_ERROR = 'COMMENTS_ERROR'
export const COMMENTS_ADD_SUCCESS = 'COMMENTS_ADD_SUCCESS'
export const COMMENTS_ADD_ERROR = 'COMMENTS_ADD_ERROR'
export const COMMENTS_EDIT_SUCCESS = 'COMMENTS_EDIT_SUCCESS'
export const COMMENTS_EDIT_ERROR = 'COMMENTS_EDIT_ERROR'
export const COMMENTS_DELETE_SUCCESS = 'COMMENTS_DELETE_SUCCESS'
export const COMMENTS_DELETE_ERROR = 'COMMENTS_DELETE_ERROR'
export const COMMENTS_GET_SUCCESS = 'COMMENTS_GET_SUCCESS'
export const COMMENTS_GET_ERROR = 'COMMENTS_GET_ERROR'

export const commentLoading = () => ({
  type: COMMENTS_LOADING,
})

export const getAllCommentsWithPageAndUser = () => {
  return (dispatch) => {
    dispatch(commentLoading())
    request(urls.commentsWithPageAndUser(), 'GET')
      .then((data) => {
        return dispatch(response(COMMENTS_SUCCESS, data))
      })
      .catch((error) => dispatch(response(COMMENTS_ERROR, error)))
  }
}
export const addComment = (data) => {
  return (dispatch) => {
    dispatch(commentLoading())
    request(urls.comments(), 'POST', data)
      .then((data) => dispatch(response(COMMENTS_ADD_SUCCESS, data)))
      .catch((error) => dispatch(response(COMMENTS_ADD_ERROR, error)))
  }
}
export const editComment = (data) => {
  return (dispatch) => {
    dispatch(commentLoading())
    request(urls.getComment(data.id), 'PUT', data)
      .then((data) => dispatch(response(COMMENTS_EDIT_SUCCESS, data)))
      .catch((error) => dispatch(response(COMMENTS_EDIT_ERROR, error)))
  }
}
export const deleteComment = (id) => {
  return (dispatch) => {
    dispatch(commentLoading())
    request(urls.getComment(id), 'DELETE')
      .then(() => dispatch(response(COMMENTS_DELETE_SUCCESS, id)))
      .catch((error) => dispatch(response(COMMENTS_DELETE_ERROR, error)))
  }
}

export const getCommentsForPage = (id) => {
  return (dispatch) => {
    dispatch(commentLoading())
    request(urls.getCommentsForPage(id), 'GET')
      .then((data) => dispatch(response(COMMENTS_GET_SUCCESS, data)))
      .catch((error) => dispatch(response(COMMENTS_GET_ERROR, error)))
  }
}