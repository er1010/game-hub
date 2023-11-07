import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <HStack>
        {/* <Switch
          colorScheme="red"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        /> */}
        {colorMode === "dark" && (
          <MoonIcon boxSize={6} onClick={toggleColorMode} />
        )}
        {colorMode === "light" && (
          <SunIcon boxSize={6} onClick={toggleColorMode} />
        )}
        <Text>Dark Mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
