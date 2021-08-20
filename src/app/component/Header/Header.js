import React,{useContext,useState} from "react";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { PokemonContext } from '../../context/PokemonContext';
import {Link} from 'react-router-dom';
import './Header.scss'
import Logo from '../Logo/Logo';
import MenuLinks from "../MenuLinks/MenuLinks";
import MenuToggle from '../MenuToggle/MenuToggle'
const Header = (props) => {
  const { pokemon } = useContext(PokemonContext);
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)


  return (
    <Flex
    as="nav"
    align="center"
    justify="space-between"
    wrap="wrap"
    w="100%"
    mb={8}
    p={8}
    bg="teal.500"
    color={["white", "white", "primary.700", "primary.700"]}
    {...props}>

    <Logo
        w="100px"
        color={["red", "yellow", "primary.500", "primary.500"]}
      />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />

  </Flex>
  );
};

export default Header;



