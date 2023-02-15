import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Joke } from "../ui/types";


const FavoritesList: React.FC = () => {
  const favorites = useSelector<RootState, Joke[]>(
    (state) => state.jokes.favorites
  );

  return (
    <ul>
      {favorites.map((joke) => (
        <li key={joke.id}>{joke.value}</li>
      ))}
    </ul>
  );
};

export default FavoritesList;
