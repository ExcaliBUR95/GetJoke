import React from "react";
import { ChuckNorrisJoke } from "../redux/types";

interface JokeProps {
  joke: ChuckNorrisJoke;
}

const Joke: React.FC<JokeProps> = ({ joke }) => {
  return (
    <div>
      <p>{joke.value}</p>
      <span>Category: {joke.categories.join(", ")}</span>
    </div>
  );
};

export default Joke;
