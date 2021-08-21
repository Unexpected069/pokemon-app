
import React, {useState, useEffect} from 'react';
import './Home.scss'
import SearchBar from '../../container/SearchBar/SearchBar';
import PokemonList from '../../container/PokemonList/PokemonList';
import LoadingSpinner from "../../component/LoadingSpinner/LoadingSpinner";
import { Container,Box,Input,InputGroup,Button,ButtonGroup } from "@chakra-ui/react"
import {FaStepBackward, FaStepForward } from "react-icons/fa";

const Home=()=>{
    const [isLoading,setIsLoading]=useState(true);

    const [endpoint,setEndpoint]=useState('');

    const [previous,setPrevious]=useState('');
    const [next,setNext]=useState('');

    const [prevItems,setPrevItems]=useState('');
    const [items,setItems]=useState('');
    
    const [error,setError]=useState('');

   useEffect(() => {

      fetch(endpoint?endpoint:"https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
          .then(res => res.json())
          .then(
            (result) => {
                console.log(result)
                setIsLoading(false);
                setPrevious(result.previous)
                setNext(result.next);
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

      }, [endpoint])

    const onSearch=(e)=>{
 
     var list = items.results.filter(p => {
      return p.name.toLowerCase().match(e.target.value.toLowerCase());
      });
     
     setItems({
       next:next,
       previous:previous,
       results:list});

     if(e.target.value==''){
       setItems(prevItems)
     }

    }

    const onClickPrevious=()=>{
      setIsLoading(true);
      setEndpoint(previous)
    }
   
    const onClickNext=()=>{
        setIsLoading(true);
        setEndpoint(next)
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


<div className="d-flex justify-content-start">
  
<ButtonGroup variant="outline" spacing="6">
  {previous?
  <Button 
      onClick={onClickPrevious}
      color="#d3d3d3" 
      width="120px"
      height="30px"
      variant="solid">
            <FaStepBackward 
            style={{marginTop:'2px'}}
            color={'#000'}/> 

          <div style={{color:'#000'}}>
          Previous
          </div>   

  </Button>:null}



  <Button 
  onClick={onClickNext}
  color="#d3d3d3" 
  width="120px"
  height="30px"
  variant="solid">
      <div style={{color:'#000'}}>
      Next
      </div>   

      <FaStepForward 
      style={{marginTop:'2px'}}
      color={'#000'}/>               
    </Button>
    </ButtonGroup>


</div>

        </div>
    </div>
</React.Fragment>
   
  
)

}

export default Home;