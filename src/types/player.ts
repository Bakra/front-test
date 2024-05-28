export interface PlayerList {
  players: PlayerInfo[];
  loading: boolean;
}

export interface PlayerProps {
  firstname: string;
  lastname: string;
  birthday: string;
  image: string;
}

export interface PlayerInfo {
  id: string;
  player: PlayerProps;
}
