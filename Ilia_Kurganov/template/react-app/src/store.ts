import { createStore, Store } from 'redux'
import rootReducer from './reducers'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { checkUser } from './midlewares/checkUserMiddleware'
import checkRoleMiddleware from './midlewares/checkRoleMiddleware'

const store: Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, checkUser, thunk, checkRoleMiddleware )),
)

export default store
