import { createStore, applyMiddleware, Store } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { rootReducer } from 'reducers/index'
import { checkRoleUserMiddleware } from 'middlewares/checkRoleUserMiddleware'
import { loggerActionUserMiddleware } from 'middlewares/loggerActionUserMiddleware'
import {mode} from 'helpers/URLRequest'

let store: Store

mode === 'development'
  ? store = createStore(
      rootReducer,
      composeWithDevTools(
        applyMiddleware(thunk, logger, checkRoleUserMiddleware, loggerActionUserMiddleware),
      ),
    )
  : store = createStore(
      rootReducer,
      applyMiddleware(thunk, checkRoleUserMiddleware, loggerActionUserMiddleware),
    )

export { store }
