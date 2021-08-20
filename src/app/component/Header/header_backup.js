import React,{useContext} from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { PokemonContext } from '../../context/PokemonContext';
import {Link} from 'react-router-dom';
import './Header.scss'
const Header = (props) => {
  const { pokemon } = useContext(PokemonContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
         Pokemon
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}>
       {/* <Text>{`Count ${pokemon.length}`}</Text>*/
       }
                    <Link
                     to={`/myteam`}
                     className="myTeamBtn">
                       My Team</Link>


      </Stack>

     
    </Flex>
  );
};

export default Header;
