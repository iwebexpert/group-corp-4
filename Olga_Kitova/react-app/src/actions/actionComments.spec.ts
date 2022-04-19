import { expect, describe, it, beforeEach } from '@jest/globals'
import { commentsReducer, CommentsReducerState } from 'reducers/reducersComments'
import {
  CommentsPayload,
  getCommentsPending,
  getCommentsSuccess,
} from './actionComments'

const mockStore = (): CommentsReducerState => {
  return {
    data: [],
    loading: false,
    error: null,
    currentsComments: [],
  }
}

const getCommentsPayload = (): CommentsPayload[] => {
  return [
    {
      id: '1',
      pageId: '3',
      userId: '5',
      content: 'content test',
    },
  ]
}

describe('Сhecking the transmission and receipt of data to the state comments', () => {
  let store = mockStore()
  beforeEach(() => {
    store = mockStore()
  })

  it('Get Comments Pending', () => {
    const action = getCommentsPending()
    expect(commentsReducer(store, action)).toMatchObject({ loading: true })
  })

  it('Add a comment', () => {
    const data = getCommentsPayload()
    const action = getCommentsSuccess(data)
    expect(commentsReducer(store, action)).toMatchObject({ currentsComments: [...data] })
  })
})
