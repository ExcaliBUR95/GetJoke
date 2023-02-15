import { createGlobalStyle } from 'styled-components';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JokeButton from './components/shared/ui/JokeButton';
import JokeList from './components/shared/ui/JokeList';
import FavoritesList from './components/shared/ui/FavoritesList';
import ClearFavoritesButton from './components/shared/ui/ClearFavoritesButton';
import ChuckNorrisJokesPage from './components/Pages/ChuckNorrisJokesPage';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
  }
`;

const ChuckNorrisApp = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div>
        <JokeButton />
        <JokeList />
        <FavoritesList />
        <ClearFavoritesButton />
        <ChuckNorrisJokesPage />
      </div>
    </Provider>
  );
};

export default ChuckNorrisApp;




 


