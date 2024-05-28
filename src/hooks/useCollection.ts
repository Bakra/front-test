import { useMemo, useEffect, useState } from 'react';
import { fetchCollection } from '../lib/collection';
import { PlayerInfo } from '../types/player';

export const useFetchCollections = () => {
  const [players, setPlayers] = useState<PlayerInfo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('birthday');

  const getPlayers = useMemo(() => {
    if (sortBy === 'birthday') {
      return players.sort((a, b) => {
        const aDate = new Date(a.player.birthday);
        const bDate = new Date(b.player.birthday);
        return aDate.getTime() - bDate.getTime();
      });
    }
    return players.sort((a, b) => {
      return a.player[sortBy].localeCompare(b.player[sortBy]);
    });
  }, [sortBy, players]);

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

  const handleRadioChange = (e: any) => {
    const value = e.target.value;
    setSortBy(value);
  };

  useEffect(() => {
    fetchPlayersList();
  }, []);

  return {
    players,
    isLoading,
    error,
    fetchPlayersList,
    setPlayers,
    sortBy,
    handleRadioChange,
    getPlayers,
  };
};

export default useFetchCollections;
