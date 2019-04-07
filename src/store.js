import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { rootReducer } from './reducers/root/reducer'

const loggerMiddleware = createLogger();

const enhancer = compose(
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )
);

const reducers = combineReducers({
  root: rootReducer
});

const store = createStore(
  reducers,
  enhancer
);

export { store }