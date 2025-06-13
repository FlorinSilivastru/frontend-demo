import { StoreConfigurationBuilder } from "./configuration/configure-store";

const staticReducers = {
  notification_reducer: "",
};

const store = new StoreConfigurationBuilder()
  .addReduxLoggingMiddleware()
  .addReduxSagaMiddleware()
  .configureEnhancedStore()
  .injectSaga()
  .injectStaticReducers(staticReducers)
  .build();

export default store;
