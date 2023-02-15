import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ChuckNorrisJoke } from "../types";

interface FavoritesState {
  jokes: ChuckNorrisJoke[];
}

const initialState: FavoritesState = {
  jokes: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<ChuckNorrisJoke>) => {
      const existingIndex = state.jokes.findIndex(
        (joke) => joke.id === action.payload.id
      );
      if (existingIndex === -1) {
        // Add the joke to the beginning of the array
        state.jokes.unshift(action.payload);
        if (state.jokes.length > 10) {
          // If we exceed the max of 10 jokes, remove the last one
          state.jokes.pop();
        }
      }
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      const indexToRemove = state.jokes.findIndex(
        (joke) => joke.id === action.payload
      );
      if (indexToRemove !== -1) {
        state.jokes.splice(indexToRemove, 1);
      }
    },
    clearFavorites: (state) => {
      state.jokes = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } =
  favoritesSlice.actions;
export default favoritesSlice.reducer;
