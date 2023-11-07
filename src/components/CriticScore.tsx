import React from "react";
import { Game } from "../hooks/useGames";
import { Badge } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const CriticScore = ({ game }: Props) => {
  let color = game.metacritic > 81 ? "green" : "yellow";
  return (
    <Badge
      fontFamily={"14px"}
      paddingX={2}
      borderRadius={"4px"}
      colorScheme={color}
    >
      {game.metacritic}
    </Badge>
  );
};

export default CriticScore;
