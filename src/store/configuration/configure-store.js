import { compose } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { createSagaInjector } from "./sagas/saga-injector";
import { createReducerInjector } from "./reducers/reducer-injector";

export class StoreConfigurationBuilder {
  store = undefined;
  #sagaMiddleware = createSagaMiddleware();
  #middlewares = [];
  #composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  addReduxLoggingMiddleware = () => {
    this.#middlewares.push(logger);
    return this;
  };

  addReduxSagaMiddleware = () => {
    this.#middlewares.push(this.#sagaMiddleware);
    return this;
  };

  configureEnhancedStore = () => {
    this.store = configureStore({
      reducer: {},
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(this.#middlewares),
    });

    return this;
  };

  injectSaga = () => {
    this.store.injectSaga = createSagaInjector(this.#sagaMiddleware.run, []);
    return this;
  };

  injectStaticReducers = (staticReducers) => {
    this.store.injectReducer = createReducerInjector(
      this.store,
      staticReducers
    );
    return this;
  };

  build = () => this.store;
}
