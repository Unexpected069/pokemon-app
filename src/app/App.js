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

const theme = extendTheme({ colors })


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
                <Route exact path={'/pokemon/:id'} exact component={(props) => <PokemonDetails {...props} />} />
                <Route exact path={'/myTeam'} exact component={() => <MyTeam />} /> 
                
                </Switch>
            </BrowserRouter>
            </ChakraProvider>
         </PokemonContextProvider>
        </div>

    );
}

export default App;