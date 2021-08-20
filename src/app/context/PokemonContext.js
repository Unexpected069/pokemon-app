import React, { createContext, useReducer, useEffect } from 'react';
import { pokemonReducer } from '../reducers/pokemonReducer';

export const PokemonContext = createContext();

const PokemonContextProvider = props => {
  const [pokemon, dispatch] = useReducer(pokemonReducer, [], () => {
    const localData = localStorage.getItem('pokemon');
    
    return localData ? JSON.parse(localData) : [];
  }); 
  //useReducer accepts a reducer of type (state,action)=> NewState,and returns the new state passed with a dispatch method
  useEffect(() => {
    //console.log(props.children);
    localStorage.setItem('pokemon', JSON.stringify(pokemon));
    //localStorage.setItem('pokemon', '');
  }, [pokemon]);

  
  return (
    <PokemonContext.Provider value={{ pokemon, dispatch }}>
      {props.children}
    </PokemonContext.Provider>
  );
};

export default PokemonContextProvider;