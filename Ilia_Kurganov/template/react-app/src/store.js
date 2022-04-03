import { createStore } from 'redux'
import rootReducer from './reducers'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { checkUser } from './midlewares/checkUserMiddleware'
import checkRoleMiddleware from './midlewares/checkRoleMiddleware'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(checkUser, logger, thunk, checkRoleMiddleware )),
)

export default store
