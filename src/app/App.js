import React from "react";
import { Router } from "react-router-dom";
import { Switch, Route, Redirect,BrowserRouter, useHistory, useLocation } from "react-router-dom";
import { ChakraProvider,extendTheme } from "@chakra-ui/react"
import Home from "./pages/Home/Home";
import PokemonDetails from "./pages/PokemonDetails/PokemonDetails";
import Header from "./component/Header/Header";


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
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Header/>
             <Switch>
             <Route exact path={'/'} render={() => { return <Redirect to={'/home'}/> }}/>
             <Route exact path='/home' exact component={() => <Home  />} />
             <Route exact path={'/pokemon/:id'} exact component={(props) => <PokemonDetails {...props} />} />
       
            </Switch>
         </BrowserRouter>
         </ChakraProvider>
        </div>

    );
}

export default App;