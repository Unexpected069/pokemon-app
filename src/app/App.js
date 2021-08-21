import React from "react";
import { Router } from "react-router-dom";
import { Switch, Route, Redirect,BrowserRouter, useHistory, useLocation } from "react-router-dom";
import { ChakraProvider,extendTheme } from "@chakra-ui/react"
import Home from "./pages/Home/Home";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";
import MyTeam from "./pages/MyTeam/MyTeam";
import Header from "./component/Header/Header";
import PokemonContextProvider from './context/PokemonContext';


const colors = {
  
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}

const theme = extendTheme({
  
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },

      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
        
          boxShadow: "0 0 2px 2px #efdfde",
          color:'teal.100'
        },
        // 4. We can override existing variants
        solid: (props) => ({
          bg: 'teal'//props.colorMode === "dark" ? "red.300" : "red.500",
        }),
      },
    },
  },
  
  colors })


const App = () => {
    return (
        <div>
          <PokemonContextProvider>
            <ChakraProvider theme={theme}>
                <BrowserRouter>
            
                    <Header/>
                
                <Switch>
                <Route exact path={'/'} render={() => { return <Redirect to={'/home'}/> }}/>
                <Route exact path='/home' exact component={() => <Home  />} />
                <Route exact path={'/pokemon/:pokemonName'} exact component={(props) => <PokemonDetails {...props} />} />
                <Route exact path={'/myTeam'} exact component={() => <MyTeam />} /> 
                
                </Switch>
            </BrowserRouter>
            </ChakraProvider>
         </PokemonContextProvider>
        </div>

    );
}

export default App;