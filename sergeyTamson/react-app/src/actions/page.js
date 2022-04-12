import { authService } from '../components/services/auth/authService'

export const PAGE_PENDING = 'PAGE_PENDING'
export const PAGE_SUCCESS = 'PAGE_SUCCESS'
export const PAGE_ERROR = 'PAGE_ERROR'

export const PAGE_DELETE = 'PAGE_DELETE'
export const PAGE_ADD = 'PAGE_ADD'

export const PAGE_FORM_EDIT_START = 'PAGE_FORM_EDIT_START'
export const PAGE_FORM_EDIT_SAVE = 'PAGE_FORM_EDIT_SAVE'
export const PAGE_FORM_EDIT_RESET = 'PAGE_FORM_EDIT_RESET'

export const pagePending = () => ({
  type: PAGE_PENDING,
})

export const pageSuccess = (data) => ({
  type: PAGE_SUCCESS,
  payload: data,
})

export const pageError = (error) => ({
  type: PAGE_ERROR,
  payload: error,
})

export const pageFetch = () => {
  return (dispatch) => {
    dispatch(pagePending())

    const options = {
      method: 'GET',
      headers: {
        Authentication: `Bearer ${authService.token}`,
      },
    }

    fetch('/api/pages', options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error
        }
        dispatch(pageSuccess(res))
        return res
      })
      .catch((error) => {
        dispatch(pageError(error))
      })
  }
}

// export const pageIdFetch = (id) => {
//   console.log('id', id)
//   return (dispatch) => {
//     const options = {
//       method: 'GET',
//       headers: {
//         'Cache-Control': 'no-cache',
//         'Content-Type': 'application/json',
//         Authentication: `Bearer ${authService.token}`,
//       },
//     }
//     return fetch(`http://localhost:3000/api/pages/${id}`, options)
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.error) {
//           throw res.error
//         }
//         return res
//       })
//       .catch((error) => {
//         return error
//       })
//   }
// }

export const pageDelete = (id) => ({
  type: PAGE_DELETE,
  payload: id,
})

export const pageAdd = (data) => {
  data.status = STATUS_PENDING
  data.rejection_reason = ''
  data.approval_date = ''

  if (data.date instanceof Date) {
    data.date = data.date.toString()
  }

  const options = {
    method: 'POST',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      Authentication: `Bearer ${authService.token}`,
    },
    body: JSON.stringify(data),
  }

  fetch('/api/page', options)
    .then((result) => result.json())
    .then((result) => {
      if (result.error) {
        throw result.error
      }
      return result
    })
    .catch((error) => {})

  return {
    type: PAGE_ADD,
    payload: data,
  }
}

// Редактирование формы
export const pageFormEditStart = (id) => ({
  type: PAGE_FORM_EDIT_START,
  payload: id,
})

export const pageFormEditSave = (data) => ({
  type: PAGE_FORM_EDIT_SAVE,
  payload: data,
})

export const pageFormEditReset = () => ({
  type: PAGE_FORM_EDIT_RESET,
})
