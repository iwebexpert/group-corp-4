import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loggerMiddleware } from "./middlewares/customLogerMiddlewares";

import { rootReducer } from "./reducers";

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk, logger, loggerMiddleware))
);
