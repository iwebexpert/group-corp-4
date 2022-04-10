export const COMMENTS_PENDING = 'COMMENTS_PENDING'
export const COMMENTS_SUCCESS = 'COMMENTS_SUCCESS'
export const COMMENTS_ERROR = 'COMMENTS_ERROR'
export const COMMENTS_DELETE = 'COMMENTS_DELETE'
export const COMMENTS_FIND_ID = 'COMMENTS_FIND_ID'

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

export const commentsLogout = () => ({
  type: COMMENTS_LOGOUT,
})

export const commentsAddFetch = (content, title, pageId, userId) => {
  const data = {
    content,
    title,
    pageId,
    userId,
  }

  const options = {
    method: 'POST',
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
      // Authentication: `Bearer ${authService.token}`,
    },
    body: JSON.stringify(data),
  }

  return fetch('http://localhost:9000/api/comments', options)
    .then((res) => res.json())
    .then((res) => {
      if (res.error) throw res.error
      return res
    })
    .catch((err) => console.log(err))
}

export const commentsFindByPageIdFetch = (pageId) => {
  console.log(pageId)
  return (dispatch) => {
    const options = {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/json',
        // Authentication: `Bearer ${authService.token}`,
      },
    }

    fetch(`http://localhost:9000/api/comments?pageId=${pageId}`, options)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) throw res.error
        return dispatch(commentsSuccess(res))
      })
      .catch((err) => console.log(err))
  }
}
