import React, {Component, useState,useContext, useEffect} from 'react';


import Pokemon from '../../component/Pokemon/Pokemon';

const PokemonList=({results})=>{
    return(
        <div className="col-lg-9">
        <div className="row">

            {results.map((pokemon,index) =>{
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
      
    </div>
    )
}

export default PokemonList;