import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";

import {
  MODULE_NAME as contactsModuleName,
  reducer as contactsReducer,
} from "./contacts";

const config = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  [contactsModuleName]: contactsReducer,
});

const rootPersistReducer = persistReducer(config, rootReducer);

const store = createStore(
    rootPersistReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const persistor = persistStore(store);

export default store;
