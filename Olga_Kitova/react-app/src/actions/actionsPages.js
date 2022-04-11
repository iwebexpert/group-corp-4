import { PAGES_GET_PENDING, PAGES_GET_SUCCESS, PAGES_GET_ERROR,
         PAGES_ADD_SUCCESS, PAGES_ADD_ERROR, PAGES_EDIT_ID_RESET,
        PAGES_EDIT_ID_SUCCESS, PAGES_EDIT_SUCCESS, PAGES_EDIT_ERROR,
        PAGES_DELETE_SUCCESS, PAGES_DELETE_ERROR, PAGE_GET_PENDING,
        PAGE_GET_ERROR, PAGE_GET_SUCCESS } from 'constants/constantsPages'
import {BASE_URL_PAGES, getOptions} from 'config/requestConfig'


// Get all pages
export const getPagesPending = () => ({
    type: PAGES_GET_PENDING
})
export const getPagesSuccess = (data) => ({
    type: PAGES_GET_SUCCESS,
    payload: data
})
export const getPagesError = (error) => ({
    type: PAGES_GET_ERROR,
    payload: error
})
// Get pages fetch
export const getPagesFetch = () => {
return (dispatch) => {
    dispatch(getPagesPending())
    fetch(BASE_URL_PAGES, getOptions('GET'))
    .then(res => res.json())
    .then(data => {
        if(data.error) throw data.error
        else dispatch(getPagesSuccess(data))
    })
    .catch(error => dispatch(getPagesError(error)))
}
}

// Get one page
export const getPagePending = () => ({
    type: PAGE_GET_PENDING
})
export const getPageSuccess = (data) => ({
    type: PAGE_GET_SUCCESS,
    payload: data
})
export const getPageError = (error) => ({
    type: PAGE_GET_ERROR,
    payload: error
})
// Get one page fetch
export const getOnePageFetch = (url) => {
return (dispatch) => {
    dispatch(getPagePending())
    fetch(`${BASE_URL_PAGES}?url=${url}&_expand=user`, getOptions('GET'))
    .then(res => res.json())
    .then(data => {
        if(data.error) throw data.error
        else dispatch(getPageSuccess(data))
    })
    .catch(error => dispatch(getPageError(error)))
}
}

// Add pages
export const addPagesSuccess = (data) => ({
    type: PAGES_ADD_SUCCESS,
    payload: data
})
export const addPagesError = (error) => ({
    type: PAGES_ADD_ERROR,
    payload: error
})

// Add pages fetch
export const addPagesFetch = (data) => {
return (dispatch) => {
    fetch(BASE_URL_PAGES, getOptions('POST', data))
    .then(res => res.json())
    .then(res => {
        if(res.error) throw res.error
        else dispatch(addPagesSuccess(res))
    })
    .catch(error => dispatch(addPagesError(error)))
}
}

// Delete pages 
export const deletePagesSuccess = () => ({
    type: PAGES_DELETE_SUCCESS
})
export const deletePagesError = (error) => ({
    type: PAGES_DELETE_ERROR,
    payload: error
})
//Delete pages fetch
export const deletePagesFetch = (id) => {
return (dispatch) => {
    fetch(`${BASE_URL_PAGES}/${id}`, getOptions('DELETE'))
    .then(res => res.json())
    .then(res => {
        console.log(res)
        if(res.error) {
            throw res.error
        } else {
            dispatch(deletePagesSuccess())
            dispatch(getPagesFetch())
    }})
    .catch(error => dispatch(deletePagesError(error)))
}
}

// Current Id by edit pages
export const editIdpages = (id) => ({
    type: PAGES_EDIT_ID_SUCCESS,
    payload: id
})
export const writeCurrentIdByEditPages = (id) => {
    return (dispatch) => {
        dispatch(editIdpages(id))
    }
}

// Current Id reset
export const clearCurrentIdByEditPages = () => ({
    type: PAGES_EDIT_ID_RESET
})

// Edit pages
export const editPagesSuccess = () => ({
    type: PAGES_EDIT_SUCCESS
})
export const editPagesError = (error) => ({
    type: PAGES_EDIT_ERROR,
    payload: error
})

// Edit pages fetch
export const editPagesFetch = (data) => {
return (dispatch) => {
    fetch(`${BASE_URL_PAGES}/${data.id}`, getOptions('PATCH', data))
    .then(res => res.json())
    .then(res => {
        if(res.error) throw res.error
        else {
            dispatch(editPagesSuccess())
            dispatch(getPagesFetch())
    }})
    .catch(error => dispatch(editPagesError(error)))
}
}
