import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers'
import { customLoggerMiddleware } from '../middlewares/customLoggerMiddleware'
import { checkRoleMiddleware } from '../middlewares/checkRoleMiddleware'
import { isDev } from '../helpers/devProdMode'

let middleware = applyMiddleware(thunk, customLoggerMiddleware, checkRoleMiddleware)

// if (isDev()) {
//   middleware = applyMiddleware(thunk, logger, customLoggerMiddleware, checkRoleMiddleware)
// }
export const store = createStore(rootReducer, middleware)
