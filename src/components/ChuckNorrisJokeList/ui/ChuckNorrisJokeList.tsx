import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  selectJokesData, selectJokesError, fetchJoke } from "../../../redux/slices/jokesSlice";
import { ChuckNorrisJoke } from "../../../redux/types";
import Joke from "../../Joke";

export const ChuckNorrisJokeList = () => {
  const dispatch = useDispatch();

  const jokes = useSelector(selectJokesData);
  const error = useSelector(selectJokesError);

  useEffect(() => {
    dispatch(fetchJoke() as any);
  }, [dispatch]);

 

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Jokes</h2>
      {jokes.map((joke: ChuckNorrisJoke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

