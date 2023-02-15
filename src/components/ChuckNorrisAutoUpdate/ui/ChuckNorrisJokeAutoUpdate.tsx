import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { fetchJoke } from "../../../redux/slices/jokesSlice";
import {
  ChuckNorrisJokeAutoUpdateContainer,
  ChuckNorrisJokeAutoUpdateText,
  ChuckNorrisJokeAutoUpdateButton,
} from "./ChuckNorrisJokeAutoUpdateStyledComponents";

function getJoke(callback: (joke: string) => void) {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => callback(data.value))
    .catch(error => console.error(error));
}

const getJokeAsync = (): Promise<string> => {
  return new Promise((resolve) => {
    getJoke((joke: string) => {
      resolve(joke);
    });
  });
};

export const ChuckNorrisJokeAutoUpdate: React.FC = () => {
  const [joke, setJoke] = useState<any>("");
  const [intervalId, setIntervalId] = useState<number | any>(null);
  const jokesState = useSelector((state: RootState) => state.jokes);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    } else {
      const id = setInterval(async () => {
        dispatch(fetchJoke() as any);

      }, 3000);
      setIntervalId(id);
    }
  };

  useEffect(() => {
    const id = setInterval(async () => {
      const joke = await getJokeAsync()
      setJoke(joke);
    }, 3000);
    setIntervalId(id);
    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    dispatch(fetchJoke() as any);
  }, [dispatch]);

  useEffect(() => {
    if (jokesState.data) {
      setJoke(jokesState.data);
    }
  }, [jokesState.data, joke]);

  return (
    <ChuckNorrisJokeAutoUpdateContainer>
      <ChuckNorrisJokeAutoUpdateText>{joke?.value?.toString() || ''}</ChuckNorrisJokeAutoUpdateText>
      <ChuckNorrisJokeAutoUpdateButton onClick={handleClick}>
        {intervalId ? "Стоп авто обновление" : "Старт авто обновление"}
      </ChuckNorrisJokeAutoUpdateButton>
    </ChuckNorrisJokeAutoUpdateContainer>
  );
};
