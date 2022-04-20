import {test, expect, describe, it, beforeEach} from '@jest/globals'
import { commentReducer, CommentReduserState } from 'reducers/comments'
import { commentPending, commentAddSuccess, commentSuccess } from './comments'

const mockStore=(): CommentReduserState => ({
    loading: false,
    data: [],
    error: null,
})

const getCommentPayload = (): CommentType=>({
    id: '12',
    pageId: '1',
    userId: '1',
    content: 'newTest',
})

describe('Comment', ()=>{
    let store = mockStore()
    beforeEach(()=>{
        store = mockStore()
    })
    it('commentPending', ()=>{
        const action = commentPending()
        expect(commentReducer(store, action)).toMatchObject({loading: true})
    })

    it('commentSuccess', ()=>{
        const data = getCommentPayload()
        const action = commentSuccess(data)
        expect(commentReducer(store, action)).toMatchObject({loading: false})
    })

    it('commentAddSuccess', ()=>{
        const data = getCommentPayload()
        const action = commentAddSuccess(data)
        expect(commentReducer(store, action)).toMatchObject({data: [data]})
    })
   
})