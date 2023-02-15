import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";
import { ChuckNorrisJoke } from "../types";

interface JokesState {
    favorites: ChuckNorrisJoke[];
    items: ChuckNorrisJoke[];
    data: ChuckNorrisJoke[];
    loading: boolean;
    error: string | null;
  }
  

const initialState: JokesState = {
  favorites: [],
  items: [],
  data: [],
  loading: false,
  error: null,
};

const jokesSlice = createSlice({
  name: "jokes",
  initialState,
  reducers: {
    getJokesStart(state) {
      state.loading = true;
    },
    getJokesSuccess(state, action: PayloadAction<ChuckNorrisJoke[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getJokesFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getJokesStart, getJokesSuccess, getJokesFailure } = jokesSlice.actions;

export default jokesSlice.reducer;

export const fetchJoke = ():  AppThunk<void> => async (dispatch) => {
  try {
    dispatch(getJokesStart());
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    console.log(data)
    dispatch(getJokesSuccess([data]));
  } catch (error) {
    dispatch(getJokesFailure(error.toString()));
  }
};


  

export const selectJokesData = (state: RootState) => state.jokes.data;
export const selectJokesLoading = (state: RootState) => state.jokes.loading;
export const selectJokesError = (state: RootState) => state.jokes.error;