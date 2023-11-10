import { GameQuary } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  metacritic: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
}
const useGames = (gameQuary: GameQuary) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuary.genre?.id,
        platform: gameQuary.platform?.id,
        ordering: gameQuary.sortorder,
      },
    },
    [gameQuary]
  );

export default useGames;
