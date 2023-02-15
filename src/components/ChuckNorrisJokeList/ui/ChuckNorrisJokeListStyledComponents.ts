import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Joke = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 20px;
  margin: 20px;
  max-width: 600px;
  width: 100%;
  box-sizing: border-box;
`;

export const JokeText = styled.p`
  margin: 0 0 10px 0;
`;

export const JokeCategory = styled.p`
  margin: 0;
  font-style: italic;
`;