import { expect, describe, it, beforeEach } from '@jest/globals'
import { statsReducer, StatsReducerState } from 'reducers/reducersStats'
import { StatsPayload, getStatsPending, getStatsSuccess } from './actionsStats'

const mockStore = (): StatsReducerState => {
  return {
    users: [],
    loading: false,
    error: null,
  }
}

const getStatsPayload = (): StatsPayload[] => {
  return [
    {
      id: '2',
      name: 'TestName',
      email: 'test@mail.ru',
      password: '123',
      role: 'admin',
      logs: [
        {
          userId: '2',
          actions: {
            date: new Date('2022-11-11').toString(),
            action: 'PAGE_GET_SUCCESS',
          },
          id: '3',
        },
      ],
    },
  ]
}

describe('Сhecking the transmission and receipt of data to the state users with logs', () => {
  let store = mockStore()
  beforeEach(() => {
    store = mockStore()
  })

  it('Get Users with logs Pending', () => {
    const action = getStatsPending()
    expect(statsReducer(store, action)).toMatchObject({ loading: true })
  })

  it('Get Users with logs Success', () => {
    const users = getStatsPayload()
    const action = getStatsSuccess(users)
    expect(statsReducer(store, action)).toMatchObject({ users: users })
  })
})
