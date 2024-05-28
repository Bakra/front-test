import React from 'react';
import './Collection.css';
import useFetchCollections from '../hooks/useCollection';
import PlayerCard from '../components/playerCard';
import Loader from '../components/Loader/loader';

export const Collection = () => {
  const { players, isLoading } = useFetchCollections();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex-box">
        {players && players.length > 0
          ? players.map((item) => (
              <PlayerCard player={item.player} key={item.id} />
            ))
          : ''}
      </div>
    </>
  );
};
