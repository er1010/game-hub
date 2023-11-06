import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/KFC-Logo.wine.svg";
import React from "react";

const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>NavBar</Text>
      </HStack>
    </div>
  );
};

export default NavBar;
