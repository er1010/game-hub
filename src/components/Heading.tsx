import { GameQuary } from "../App";
import { Heading } from "@chakra-ui/react";

interface Props {
  gameQuary: GameQuary;
}

const GameHeading = ({ gameQuary }: Props) => {
  const heading = `${gameQuary.platform?.name || ""} ${
    gameQuary.genre?.name || ""
  } Games`;
  return (
    <Heading marginBottom={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
