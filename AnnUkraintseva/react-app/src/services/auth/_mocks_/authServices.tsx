import {fn} from 'jest-mock'

export const mockGetObjects = fn()

const mock = fn(() => {
    return {getObjects: mockGetObjects}
})

export default mock