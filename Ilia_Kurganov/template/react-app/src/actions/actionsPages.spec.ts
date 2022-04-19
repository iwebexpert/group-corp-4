import { expect, describe, it, beforeEach } from '@jest/globals'
import { PageReducerState, pageReducer } from '../reducers/page'
import { deletePageAction, pageAdd, pagesPending } from './actionsPages'
import { PagePayload } from 'src/actions/actionsPages';

const mockStore = (): PageReducerState => {
    return {
        isLoading: false,
        data: [],
        error: null,
        homePage: []
    }
}

const mockStore2 = (): PageReducerState => {
    return {
        isLoading: false,
        data: [{
            id: '312312',
            url: 'Ilia@ibs.ru',
            title: 'Привет',
            content: 'как ты?',
            userId: '3',
            isEdit: true
        }, {
            id: '312312312',
            url: 'olo@ibs.ru',
            title: 'пока',
            content: 'чао',
            userId: '1',
            isEdit: false
        }],
        error: null,
        homePage: []
    }
}

const getPagePayload = (): PagePayload => {
    return {
        id: '312312',
        url: 'Ilia@ibs.ru',
        title: 'Привет',
        content: 'как ты?',
        userId: '3',
        isEdit: true
    }
}

describe('Page', () => {
    let store = mockStore()
    beforeEach(() => {
        store = mockStore()
    })
    // const store = mockStore()
    it('pagesPending', () => {
        const action = pagesPending()
        expect(pageReducer(store, action)).toMatchObject({ isLoading: true })
    })
    it('pagesAdd', () => {
        const payload = getPagePayload()
        const action = pageAdd(payload)
        expect(pageReducer(store, action)).toMatchObject({ data: [payload] })
    })
    it('pageDelete', () => {
        const payload = getPagePayload()
        const store = mockStore2()
        const action = deletePageAction('312312312')
        expect(pageReducer(store, action)).toMatchObject({ data: [payload] })
    })
})