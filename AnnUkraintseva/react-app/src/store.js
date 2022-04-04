import { createStore,applyMiddleware } from "redux"
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from "./reducers"
import { UserRoleMiddleware } from "./middleware/UserRoleMiddleware"
import { loggerUserMiddleware } from "./middleware/loggerUserMiddleware"

export const store = createStore(rootReducer, applyMiddleware(thunk,logger, UserRoleMiddleware, loggerUserMiddleware))


