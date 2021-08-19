import React,{useState,useEffect} from 'react';
import PokemonDetailsComponent from '../../component/PokemonDetails/PokemonDetailsComponent';
import PokemonSlider from "../../component/PokemonSlider/PokemonSlider";

const PokemonDetails = ({match}) => {
       const [isLoaded,setIsLoaded]=useState(true);
       const [items,setItems]=useState('');
       const [error,setError]=useState('');

         useEffect(() => {
        console.log('match '+match.params.id)
      fetch(`https://pokeapi.co/api/v2/pokemon/${match.params.id}`)
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




    return (
        <div className="container" style={{padding: '6rem 0'}}>
            <div className="card">
                {items?
                <div className="row">
                     <PokemonSlider  {...items}/>
                   
                    <PokemonDetailsComponent {...items}/>
                </div>:null}
            </div>
        </div>
    );
};




export default PokemonDetails;
