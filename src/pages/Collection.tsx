import React from 'react';
import './Collection.css';
import useFetchCollections from '../hooks/useCollection';
import PlayerCard from '../components/playerCard';
import Loader from '../components/Loader/loader';
import { FlexBox } from './style';
import { Link } from 'react-router-dom';

export const Collection = () => {
  const { players, isLoading, error, handleRadioChange, getPlayers } =
    useFetchCollections();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1> {error} </h1>;
  }

  return (
    <>
      {players && players.length > 0 ? (
        <div>
          <FlexBox className="mb-5">
            <span>Sort By</span>
            <div>
              <label> DOB</label>
              <input
                type="radio"
                name="sort"
                value={'birthday'}
                onChange={handleRadioChange}
              />
            </div>
            <div>
              <label> First Name</label>
              <input
                type="radio"
                name="sort"
                value={'firstname'}
                onChange={handleRadioChange}
              />
            </div>
            <div>
              <label> Last Name</label>
              <input
                type="radio"
                name="sort"
                value={'lastname'}
                onChange={handleRadioChange}
              />
            </div>
          </FlexBox>
          <FlexBox>
            {getPlayers.map((item) => (
              <PlayerCard player={item.player} id={item.id} key={item.id} />
            ))}
          </FlexBox>
        </div>
      ) : (
        <div>
          <div className="empty-box">
            <h1> No players found </h1>
            <h4> Try Creating new players by clicking on below link</h4>
            <Link className="link-btn" to="/create-card">
              {' '}
              Add Players{' '}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
