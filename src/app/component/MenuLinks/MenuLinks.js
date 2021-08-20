import React,{useContext} from "react";
import {
  Box,
  Stack,

} from "@chakra-ui/react";
import MenuItem from '../MenuItem/MenuItem'

const MenuLinks=({isOpen})=>{
return(
    <Box
  display={{ base: isOpen ? "block" : "none", md: "block" }}
  flexBasis={{ base: "100%", md: "auto" }}>
<Stack
  spacing={8}
  align="left"
  justify={["center", "space-between", "flex-end", "flex-end"]}
  direction={["column", "column", "row", "row"]}
  pt={[4, 4, 0, 0]}
>
  <MenuItem to="/home">Home</MenuItem>
  <MenuItem to="/myTeam">My Team</MenuItem>

</Stack>
</Box>
)
}
export default MenuLinks

