import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuary {
  genre: Genre | null;
  platform: Platform | null;
  sortorder: string;
  searchText: string;
}

function App() {
  const [gameQuary, setGameQuary] = useState<GameQuary>({} as GameQuary);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      gridTemplateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuary({ ...gameQuary, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuary.genre}
            onSelectGenre={(genre) => setGameQuary({ ...gameQuary, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <HStack paddingLeft={2} spacing={5} marginBottom={5}>
          <PlatformSelector
            seletedPlatform={gameQuary.platform}
            onSelectPlatform={(platform) =>
              setGameQuary({ ...gameQuary, platform })
            }
          />
          <SortSelector
            onSelectOrder={(sortorder) =>
              setGameQuary({ ...gameQuary, sortorder })
            }
            sortOrder={gameQuary.sortorder}
          />
        </HStack>
        <GameGrid gameQuary={gameQuary} />
      </GridItem>
    </Grid>
  );
}

export default App;
