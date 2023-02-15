import React from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from '../../../redux/store';

import { fetchJoke } from "../../../redux/slices/jokesSlice";

const JokeButton = () => {
    const dispatch: AppDispatch = useDispatch();
  
    const handleClick = () => {
      dispatch(fetchJoke() as any);
    };
  
    return (
      <div className="joke-button-container">
      </div>
    );
  };
export default JokeButton;
