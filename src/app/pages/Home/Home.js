
import React, {useState, useEffect} from 'react';
import './Home.scss'
import SearchBar from '../../container/SearchBar/SearchBar';
import PokemonList from '../../container/PokemonList/PokemonList';
import LoadingSpinner from "../../component/LoadingSpinner/LoadingSpinner";

const Home=()=>{
    const [isLoading,setIsLoading]=useState(true);
    const [prevItems,setPrevItems]=useState('');
    const [items,setItems]=useState('');
    
    const [error,setError]=useState('');

   useEffect(() => {

      fetch("https://pokeapi.co/api/v2/pokemon")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
                setIsLoading(false);
              setItems(result);
              setPrevItems(result);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoading(false);
              setError(error);
            }
          )
      }, [])

    const onSearch=(e)=>{
 
     var list = items.results.filter(p => {
      return p.name.toLowerCase().match(e.target.value.toLowerCase());
      });
     
     setItems({results:list});
     if(e.target.value==''){
       setItems(prevItems)
     }
    }
return (
    <React.Fragment>
          <LoadingSpinner isLoading={isLoading}/>
          
    <div className="container" style={{paddingTop: '2rem'}} >
        <div className="column">
           
           <SearchBar onChange={onSearch} />
              {items?
            <PokemonList {...items}/>
            :null}

        </div>
    </div>
</React.Fragment>
   
  
)

}

export default Home;