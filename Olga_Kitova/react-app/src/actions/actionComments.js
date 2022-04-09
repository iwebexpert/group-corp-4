import {COMMENTS_GET_PENDING, COMMENTS_GET_SUCCESS, COMMENTS_GET_ERROR,
    ALL_COMMENTS_GET_PENDING, ALL_COMMENTS_GET_SUCCESS, ALL_COMMENTS_GET_ERROR, 
    COMMENTS_ADD_SUCCESS, COMMENTS_ADD_ERROR } from 'constants/constantsComments'
import {BASE_URL_COMMENTS, getOptions} from 'config/requestConfig'

// Get comments by one page

// Get one page
export const getCommentsPending = () => ({
    type: COMMENTS_GET_PENDING
})
export const getCommentsSuccess = (data) => ({
    type: COMMENTS_GET_SUCCESS,
    payload: data
})
export const getCommentsError = (error) => ({
    type: COMMENTS_GET_ERROR,
    payload: error
})
// Get comments from one page fetch
export const getCommentsFetch = (pageId) => {
return (dispatch) => {
    dispatch(getCommentsPending())
    fetch(`${BASE_URL_COMMENTS}?pageId=${pageId}&_expand=user`, getOptions('GET'))
    .then(res => res.json())
    .then(data => {
        if(data.error) throw data.error
        else dispatch(getCommentsSuccess(data))
    })
    .catch(error => dispatch(getCommentsError(error)))
}
}

// Get all comments

export const getAllCommentsPending = () => ({
    type: ALL_COMMENTS_GET_PENDING
})
export const getAllCommentsSuccess = (data) => ({
    type: ALL_COMMENTS_GET_SUCCESS,
    payload: data
})
export const getAllCommentsError = (error) => ({
    type: ALL_COMMENTS_GET_ERROR,
    payload: error
})
// Get comments fetch
export const getAllCommentsFetch = () => {
return (dispatch) => {
    dispatch(getAllCommentsPending())
    fetch(`${BASE_URL_COMMENTS}?_expand=page`, getOptions('GET'))
    .then(res => res.json())
    .then(data => {
        if(data.error) throw data.error
        else dispatch(getAllCommentsSuccess(data))
    })
    .catch(error => dispatch(getAllCommentsError(error)))
}
}

// Add comments
export const addCommentsSuccess = (data) => ({
    type: COMMENTS_ADD_SUCCESS,
    payload: data
})
export const addCommentsError = (error) => ({
    type: COMMENTS_ADD_ERROR,
    payload: error
})

// Add comments fetch
export const addCommentsFetch = (data) => {
return (dispatch) => {
    fetch(BASE_URL_COMMENTS, getOptions('POST', data))
    .then(res => res.json())
    .then(res => {
        if(res.error) throw res.error
        else {
            const id = res?.id
            fetch(`${BASE_URL_COMMENTS}/${id}?_expand=user`, getOptions('GET'))
            .then(data => data.json())
            .then(data => {
                if(data.error) throw data.error
                else dispatch(addCommentsSuccess(data))
            })
            }
    })
    .catch(error => dispatch(addCommentsError(error)))
}
}
