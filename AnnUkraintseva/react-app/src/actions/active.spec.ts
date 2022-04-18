import {test, expect, describe, it, beforeEach} from '@jest/globals'
import { activeReducer,ActiveReduserState } from 'reducers/active'
import { activePending } from './activeUser'

const mockStore=(): ActiveReduserState => ({
    loading: false,
    data: [],
    error: null,
})

describe('Active', ()=>{
    let store = mockStore()
    beforeEach(()=>{
        store = mockStore()
    })
    it('activePending', ()=>{
        const action = activePending()
        expect(activeReducer(store, action)).toMatchObject({loading: true})
    })

   
})