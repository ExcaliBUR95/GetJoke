import styled from 'styled-components';

export const ChuckNorrisJokeAutoUpdateContainer = styled.div`
display: inherit;
align-items: center;
`;

export const ChuckNorrisJokeAutoUpdateText = styled.p`
  font-size: 24px;
`;

export const ChuckNorrisJokeAutoUpdateButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #0070f3;
  color: #fff;
  cursor: pointer;
  width: 210px;
  &:hover {
    background-color: #0364c4;
  }
`;