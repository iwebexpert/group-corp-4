import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import PageWrapper from './PageWrapper'
import { useDispatch, useSelector } from 'react-redux'
import { onePageFetch } from '../actions/actionsPages'
import { authService } from '../services/auth/authService'
import { Loader } from '../components/Loader/Loader'
import { commentsFetch } from '../actions/actionsComments'
import { AppState } from 'reducers/*'
import PageItem from '../components/PageItem/PageItem'
import { getUsers } from '../actions/actionsUsers'

function PageWithPageItem() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const page = useSelector((state: AppState) => state.page.data)[0]
  const comments = useSelector((state: AppState) => state.comments.data)
  const userAuthorize = authService.currentUserValue
  const users = useSelector((state: AppState) => state.users.data)

  useEffect(() => {
    if (comments.length > 0) {
      dispatch(getUsers())
    }
    if (id) {
      dispatch(commentsFetch(id))
    }
    if (page) {
      return
    }
    if (id) {
      dispatch(onePageFetch(id))
    }
  }, [comments.length, id, page])

  if (!page) {
    return (
      <PageWrapper>
        <Loader />
      </PageWrapper>
    )
  }

  return (
    <PageItem
      page={page}
      users={users}
      paramId={id}
      userAuthorize={userAuthorize}
      comments={comments}
      withCommentsBox
    />
  )
}

export default PageWithPageItem
