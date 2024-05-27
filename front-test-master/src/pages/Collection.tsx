import React from 'react';
import { fetchCollection } from '../lib/collection';
import './Collection.css';

interface PlayerInfo {
  id: number;
  player: {
    firstname: string;
    lastname: string;
    birthday: string;
    image: string;
  };
}

export const Collection = () => {
  const collection = fetchCollection();
  const card: PlayerInfo = collection[0];

  // Request a weekday along with a long date
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const formatDate = (arg: string) => {
    const date = new Date(arg);
    return date.toLocaleDateString('en-US', options);
  };

  /**
   * Step 1: Render the card
   */
  return (
    <div>
      {card && card.player ? (
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={card.player.image}
                alt="Avatar"
                style={{
                  width: '300px',
                  height: '300px',
                }}
              />
              <h4 className="text-heading">
                {card.player.firstname} {card.player.lastname}
              </h4>
            </div>
            <div className="flip-card-back">
              <div>
                <h1 className="text-center">
                  {card.player.firstname} {card.player.lastname}
                </h1>
                <p className="text-center">
                  {formatDate(card.player.birthday)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
