import React from "react";
import "../../Pages/style.css";
interface Props {
  joke: string;
  isFavorite: boolean;
  handleAddOrRemoveFavoriteJoke: () => void;
}

export const FavoriteJokes: React.FC<Props> = ({
  joke,
  isFavorite,
  handleAddOrRemoveFavoriteJoke,
}) => {
  return (
    <div style={{  marginLeft: "10px" }}>
      <button className="styled-button" onClick={handleAddOrRemoveFavoriteJoke}>
        {isFavorite ? "Удалить из любимых" : "Добавить в любимые"}
      </button>
    </div>
  );
};
