import {test, expect, describe, it, beforeEach} from '@jest/globals'
import { allUserReducer, AllUserReduserState } from 'reducers/allUser'
import { allUserPending, allUserSuccess } from './allUser'
const mockStore=(): AllUserReduserState => ({
    loading: false,
    data: [],
    error: null,
})

const getUsersPayload=(): UserType=>({
    id: '1',
    name: 'Anna',
    email: 'email',
    password: '1',
    role: 'admin',
    token: '1',
})

describe('AllUser', ()=>{
    let store = mockStore()
    beforeEach(()=>{
        store = mockStore()
    })
    it('allUserPending', ()=>{
        const action = allUserPending()
        expect(allUserReducer(store, action)).toMatchObject({loading: true})
    })

    it('commentSuccess', ()=>{
        const data = getUsersPayload()
        const action = allUserSuccess(data)
        expect(allUserReducer(store, action)).toMatchObject({loading: false})
    })
})