import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import authReducer from "../features/auth/slice";
import tollReducer from '../features/toll/slice';

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    auth: authReducer,
    toll: tollReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
