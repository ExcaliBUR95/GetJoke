import React, { useState } from 'react';
import { ChuckNorrisJokeContainer, ChuckNorrisJokeText, ChuckNorrisJokeButton } from './ChuckNorrisJokeStyledComponents';


interface ChuckNorrisJokeProps {
  getJoke: () => Promise<string>;
}

export const ChuckNorrisJoke: React.FC<ChuckNorrisJokeProps> = ({ getJoke }) => {
  const [joke, setJoke] = useState('');

  const handleClick = async () => {
    const joke = await getJoke();
    setJoke(joke);
  };

  return (
    <ChuckNorrisJokeContainer>
      <ChuckNorrisJokeText>{joke}</ChuckNorrisJokeText>
    </ChuckNorrisJokeContainer>
  );
};


