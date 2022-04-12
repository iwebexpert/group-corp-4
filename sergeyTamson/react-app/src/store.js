import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { validRoleMiddleware } from './middlewares/validRoleMiddleware'
import { rootReducer } from './reducers'
import { composeWithDevTools } from '@redux-devtools/extension'
import { logUsersActionsMiddleware } from './middlewares/logUsersActionsMiddleware'

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(validRoleMiddleware, logUsersActionsMiddleware, thunk, logger),
  ),
)
