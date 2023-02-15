import { Dispatch } from 'redux';
import axios from 'axios';

export const FETCH_JOKE_REQUEST = 'FETCH_JOKE_REQUEST';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';
export const ADD_FAVORITE_JOKE = 'ADD_FAVORITE_JOKE';
export const REMOVE_FAVORITE_JOKE = 'REMOVE_FAVORITE_JOKE';
export const CLEAR_FAVORITE_JOKES = 'CLEAR_FAVORITE_JOKES';

export const fetchJokeRequest = () => {
  return {
    type: FETCH_JOKE_REQUEST,
  };
};

export const fetchJokeSuccess = (joke: string) => {
  return {
    type: FETCH_JOKE_SUCCESS,
    payload: joke,
  };
};

export const fetchJokeFailure = (error: string) => {
  return {
    type: FETCH_JOKE_FAILURE,
    payload: error,
  };
};

export const addFavoriteJoke = (joke: string) => {
  return {
    type: ADD_FAVORITE_JOKE,
    payload: joke,
  };
};

export const removeFavoriteJoke = (joke: string) => {
  return {
    type: REMOVE_FAVORITE_JOKE,
    payload: joke,
  };
};

export const clearFavoriteJokes = () => {
  return {
    type: CLEAR_FAVORITE_JOKES,
  };
};

export const fetchJoke = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchJokeRequest());
    axios.get('https://api.chucknorris.io/jokes/random').then((response) => {
      const joke = response.data.value;
      dispatch(fetchJokeSuccess(joke));
    }).catch((error) => {
      const errorMessage = error.message;
      dispatch(fetchJokeFailure(errorMessage));
    });
  };
};
