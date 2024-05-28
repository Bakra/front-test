import React from 'react';
import './Collection.css';
import useFetchCollections from '../hooks/useCollection';
import PlayerCard from '../components/playerCard';
import Loader from '../components/Loader/loader';
import { FlexBox } from './style';

export const Collection = () => {
  const { players, isLoading, error } = useFetchCollections();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1> {error} </h1>;
  }
  return (
    <>
      <FlexBox>
        {players && players.length > 0
          ? players.map((item) => (
              <PlayerCard player={item.player} key={item.id} />
            ))
          : ''}
      </FlexBox>
    </>
  );
};
