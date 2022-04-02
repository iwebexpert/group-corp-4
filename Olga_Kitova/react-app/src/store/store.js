import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {rootReducer} from 'reducers'
import { checkRoleUserMiddleware } from 'middlewares/checkRoleUserMiddleware'
import {loggerActionUserMiddleware} from 'middlewares/loggerActionUserMiddleware'

const NODE_ENV = process.env.NODE_ENV
let store;

NODE_ENV === 'development' ? store = createStore(
                rootReducer,
                composeWithDevTools(
                  applyMiddleware(
                     thunk,
                     logger, 
                     checkRoleUserMiddleware, 
                     loggerActionUserMiddleware
                )
              )
              ) : store = createStore(
                  rootReducer, 
                  applyMiddleware(
                    thunk, 
                    checkRoleUserMiddleware, 
                    loggerActionUserMiddleware
                )
              )

export {store}