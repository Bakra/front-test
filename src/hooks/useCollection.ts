import { useContext, useEffect, useState } from 'react';
import { fetchCollection } from '../lib/collection';
import { PlayerInfo } from '../types/player';

export const useFetchCollections = () => {
  const [players, setPlayers] = useState<PlayerInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const fetchPlayersList = () => {
    setIsLoading(true);
    fetchCollection()
      .then((response) => {
        setPlayers([...response]);
      })
      .catch((err) => {
        setError('Something went wrong. Please try after sometime.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchPlayersList();
  }, []);

  return { players, isLoading, error, fetchPlayersList, setPlayers };
};

export default useFetchCollections;
