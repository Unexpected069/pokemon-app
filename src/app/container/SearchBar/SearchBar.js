import React, {Component, useState,useContext, useEffect} from 'react';
import { Container,Box,Input,InputGroup,Button,InputRightElement } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import './SearchBar.scss'

const SearchBar=({onChange})=>{

    const handleClick=()=>{

    }

    return(
        <div className="col-lg-9">
        <div className="row mb-3">
            <div className="col-12 d-lg-block d-xl-block">
                <div className="card ">
                    
                    <div className={'searchContainer'}>
                  
                    <InputGroup size="md">
                    <Input
                        pr="4.5rem"
                        type={"text"}
                        placeholder="Search Pokemon here..." 
                        onChange={onChange}
                        />
                     <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                         <SearchIcon/>
                        </Button>
                    </InputRightElement>
                    </InputGroup>

    


                    </div>   
             
                </div>
            </div>
        </div>
    
    </div>
    
    )

}

export default SearchBar;