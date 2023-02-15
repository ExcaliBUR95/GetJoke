import styled from 'styled-components';

export const FavoriteJokesContainer = styled.div`
  margin-bottom: 20px;
`;

export const FavoriteJokesHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const FavoriteJokesList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FavoriteJokesListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const FavoriteJokesListItemText = styled.p`
  font-size: 18px;
  margin: 0;
  flex: 1;
`;

export const FavoriteJokesListItemButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: #0070f3;
  color: #fff;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #0364c4;
  }
`;
