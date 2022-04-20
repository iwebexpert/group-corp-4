import { createStore,applyMiddleware, Store } from "redux"
import {composeWithDevTools} from '@redux-devtools/extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from "./reducers"
import { UserRoleMiddleware } from "./middleware/UserRoleMiddleware"
import { loggerUserMiddleware } from "./middleware/loggerUserMiddleware"

export const store: Store = createStore(rootReducer, 
    composeWithDevTools( applyMiddleware(
        thunk,
        logger,
        UserRoleMiddleware,
        loggerUserMiddleware
    )))


