import React from "react";
import { useDispatch } from "react-redux";
import { clearFavorites } from "../../../redux/slices/favoritesSlice";

const ClearFavoritesButton: React.FC = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearFavorites());
  };

  return (<></>)
};

export default ClearFavoritesButton;
