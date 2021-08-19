
import React, {Component, useState,useContext, useEffect} from 'react';
import { Container,Box,Input,InputGroup,Button,InputRightElement } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import './Home.scss'
import SearchBar from '../../container/SearchBar/SearchBar';
import PokemonList from '../../container/PokemonList/PokemonList';
const Home=()=>{
    const [isLoaded,setIsLoaded]=useState(true);
    const [items,setItems]=useState('');
    const [error,setError]=useState('');

   useEffect(() => {
      fetch("https://pokeapi.co/api/v2/pokemon")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
              setIsLoaded(false);
              setItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(false);
              setError(error);
            }
          )
      }, [])

    const handleClick=()=>{


    }
return (
    <React.Fragment>
    <div className="container" style={{paddingTop: '2rem'}} >
        <div className="column">
           
           <SearchBar/>
              {items?
            <PokemonList {...items}/>
            :null}

        </div>
    </div>
</React.Fragment>
   
  
)

}

export default Home;