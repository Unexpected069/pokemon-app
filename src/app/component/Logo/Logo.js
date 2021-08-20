import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react"
import PokemonLogo from '../../assets/images/pokemon-logo.png'
const Logo=(props)=>{
  return (
    <Box {...props}>
       <Image
        objectFit="contain"
        src={PokemonLogo}
        alt="pokemon"
      />
    </Box>
  )
}
export default Logo
