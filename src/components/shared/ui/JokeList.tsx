import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Joke } from "../ui/types";

const JokeList: React.FC = () => {
  const jokes = useSelector<RootState, Joke[]>((state) => state.jokes.items);

  return (
    <ul>
      {jokes.map((joke) => (
        <li key={joke.id}>{joke.value}</li>
      ))}
    </ul>
  );
};

export default JokeList;
