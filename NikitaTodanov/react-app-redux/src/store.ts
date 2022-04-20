import { createStore, applyMiddleware, Store } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { rootReducer } from "./reducers/index";
import { loggerMiddleware } from "./middlewares/customLogerMiddlewares";



export const store:Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger, loggerMiddleware))
);
