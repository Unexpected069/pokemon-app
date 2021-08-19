import React, {Component, useState,useContext, useEffect} from 'react';
import { Container,Box,Input,InputGroup,Button,InputRightElement } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Pokemon_List } from '../../data/dummyData';
import Pokemon from '../../component/Pokemon/Pokemon';

const PokemonList=()=>{
    return(
        <div className="col-lg-9">
        <div className="row">

            {Pokemon_List.results.map((pokemon,index) =>{
                let classes = `col-lg-4 col-md-6 mb-4`;
                return (<div className={classes}>
                    <Pokemon 
                        key={index}
                        id={index+1} 
                        title={pokemon.name} 
                        url={pokemon.url} />
                    </div>)
            })}
        </div>
        <div className="d-flex justify-content-end">
           {

               ///PAGINATION HERE
           }
        </div>
    </div>
    )
}

export default PokemonList;