export interface Joke {
    id: string;
    value: string;
  }
  
  export interface JokeState {
    joke: Joke | null;
    error: string | null;
    isLoading: boolean;
  }
  
  export interface FavoriteJoke extends Joke {
    isFavorite: boolean;
  }
  
  export interface FavoritesState {
    favorites: FavoriteJoke[];
  }
  
  export interface RootState {
    joke: JokeState;
    favorites: FavoritesState;
  }
  