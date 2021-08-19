
import React, {Component, useState,useContext, useEffect} from 'react';
import { Container,Box,Input,InputGroup,Button,InputRightElement,Spinner, background} from "@chakra-ui/react"


const LoadingSpinner=({isLoading})=>{
    const [isLoaded,setIsLoaded]=useState(true);
    const [items,setItems]=useState('');
    const [error,setError]=useState('');

   useEffect(() => {
      
      }, [])




    
return (
    <React.Fragment>
        {isLoading?
    <div className="container"
    style={{
        display:'flex',
        opacity:'0.2',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        width:window.innerWidth,
        height:window.innerHeight}}>

                <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
            size="xl"
            />
    </div>:null}
</React.Fragment>
   
  
)

}

export default LoadingSpinner;