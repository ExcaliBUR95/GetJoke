import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke } from "../../redux/actions/ChuckNorrisJokesActions";
import { RootState } from "../../redux/store";
import { ChuckNorrisJokeAutoUpdate } from "../ChuckNorrisAutoUpdate";
import { ChuckNorrisJoke } from "../ChuckNorrisJoke";
import { ChuckNorrisJokeList } from "../ChuckNorrisJokeList";
import { FavoriteJokes } from "../FavoriteJokes";
import "./style.css";
interface Joke {
  id: string;
  value: string;
}

function ChuckNorrisJokesPage() {
  const dispatch = useDispatch();

  function getJoke(callback: (joke: string) => void) {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => callback(data.value))
      .catch((error) => console.error(error));
  }

  const [joke, setJoke] = useState<Joke | null>(null);
  const [favoriteJokes, setFavoriteJokes] = useState<Joke[]>([]);

  useEffect(() => {
    const savedJokes = JSON.parse(
      localStorage.getItem("favoriteJokes") || "[]"
    );
    setFavoriteJokes(savedJokes);
  }, []);

  const fetchJoke = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    const newJoke = { id: data.id, value: data.value };
    setJoke(newJoke);
  };

  const handleAddOrRemoveFavoriteJoke = (joke: Joke) => {
    if (favoriteJokes.some((j) => j.id === joke.id)) {
      const updatedJokes = favoriteJokes.filter((j) => j.id !== joke.id);
      setFavoriteJokes(updatedJokes);
      localStorage.setItem("favoriteJokes", JSON.stringify(updatedJokes));
    } else {
      const updatedJokes = [joke, ...favoriteJokes].slice(0, 10);
      setFavoriteJokes(updatedJokes);
      localStorage.setItem("favoriteJokes", JSON.stringify(updatedJokes));
    }
  };

  const handleClearFavoriteJokes = () => {
    setFavoriteJokes([]);
    localStorage.removeItem("favoriteJokes");
  };

  return (
    <div className="ChuckNorrisJokesPage">
      <h1 className="title">Chuck Norris Jokes</h1>

      <div className="right-column" style={{ display: "flex" }}>
        <div className="favorite-jokes">
          <h2 className="favorite-jokes-title">Любимые шутки</h2>
          <button
            className="clear-favorite-jokes-button"
            onClick={handleClearFavoriteJokes}
          >
            Очистить список
          </button>
          <div className="favorite-jokes-list">
            {favoriteJokes.map((joke) => (
              <div
                className="favorite-joke"
                key={joke.id}
                onClick={() => handleAddOrRemoveFavoriteJoke(joke)}
              >
                {joke.value}
                <button
                  className="remove-favorite-joke-button"
                  onClick={() => handleAddOrRemoveFavoriteJoke(joke)}
                >
                  Удалить
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="joke-section" style={{ width: "60%" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
           
            <ChuckNorrisJokeAutoUpdate />
            {joke && (
              <FavoriteJokes
                joke={joke.value}
                isFavorite={favoriteJokes.some((j) => j.id === joke.id)}
                handleAddOrRemoveFavoriteJoke={() =>
                  handleAddOrRemoveFavoriteJoke(joke)
                }
              />
            )}
            <button onClick={fetchJoke} className='styled-button' style={{  marginLeft: "10px" }}>
              Случайная шутка
            </button>
           
          </div>
          <div>
            {joke?.value}
          </div>
          <div className="joke-list-section">
            <ChuckNorrisJoke getJoke={getJoke as () => Promise<string>} />
            <ChuckNorrisJokeList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChuckNorrisJokesPage;
