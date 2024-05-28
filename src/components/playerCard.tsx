import LazyLoad from 'react-lazy-load';
import * as React from 'react';
import { Paragraph } from './style';
import { PlayerProps } from '../types/player';

const PlayerCard = ({ player }: { player: PlayerProps }) => {
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
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <LazyLoad height={300}>
            <img
              src={player.image}
              alt="Avatar"
              style={{
                width: '300px',
                height: '300px',
              }}
            />
          </LazyLoad>

          <h4 className="text-heading">
            {player.firstname} {player.lastname}
          </h4>
        </div>
        <div className="flip-card-back">
          <div>
            <h1 className="text-center">
              {player.firstname} {player.lastname}
            </h1>
            <Paragraph>{formatDate(player.birthday)}</Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
