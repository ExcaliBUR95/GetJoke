import { Reducer } from 'redux';

type JokesState = {
  jokes: string[];
  favorites: string[];
};

const initialState: JokesState = {
  jokes: [],
  favorites: [],
};

const jokesReducer: Reducer<JokesState> = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_JOKE': {
      const { joke } = action.payload;
      return {
        ...state,
        jokes: [joke, ...state.jokes.slice(0, 9)],
      };
    }
    case 'ADD_FAVORITE': {
      const { joke } = action.payload;
      return {
        ...state,
        favorites: [joke, ...state.favorites],
      };
    }
    case 'REMOVE_FAVORITE': {
      const { joke } = action.payload;
      return {
        ...state,
        favorites: state.favorites.filter((fav) => fav !== joke),
      };
    }
    default:
      return state;
  }
};

export default jokesReducer;
