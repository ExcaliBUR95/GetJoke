import { configureStore, getDefaultMiddleware, ThunkAction } from "@reduxjs/toolkit";
import { Action, combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import jokesReducer from "./slices/jokesSlice";
import favoritesReducer from "./slices/favoritesSlice";

const rootReducer = combineReducers({
  jokes: jokesReducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware()],
});
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
export default store;
