import React, {useMemo, useState,useContext, useEffect} from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, chakra,Button } from "@chakra-ui/react"
import { TriangleDownIcon, TriangleUpIcon,SearchIcon, HamburgerIcon, DeleteIcon } from "@chakra-ui/icons"
import { useTable, useSortBy } from "react-table"
import {Link} from 'react-router-dom';
import { PokemonContext } from '../../context/PokemonContext';

const DataTable=()=> {

    const {pokemon,dispatch } = useContext(PokemonContext);
    const [data,setData]=useState([])

    useEffect(()=>{

            setData(pokemon);
    },[pokemon])
    
    const columns = useMemo(
      () => [
          {
            Header: "",
            accessor: "id",
            
          },
        {
          Header: "Pokemon Name",
          accessor: "name",
          
        },
        {
          Header: "Height",
          accessor: "height",
        },
        {
          Header: "Base Experience",
          accessor: "base_experience",
      
        },
      ],
      [],
    )
  
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      rows,
      prepareRow,
    } =  useTable({ columns, data }, useSortBy)
  

    const onClickDelete=(id)=>{
        //e.preventDefault();
        dispatch({ type: 'REMOVE_POKEMON', pokemonId:id});
        alert('Remove sucessfully !!!');
    }


    return (
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                
                  {...column.getHeaderProps(column.getSortByToggleProps())}
              
                  isNumeric={column.isNumeric}>
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {rows.map((row) => {
             
            prepareRow(row)
            return (
              <Tr {...row.getRowProps()}>



                            
                {row.cells.map((cell) => (
                    
                  <Td {...cell.getCellProps()} isNumeric={cell.column.isNumeric}>
                    
                    
                    {cell.column.id=='id'&&row.values.id!=''?
                                <div style={{
                                    width:'50%',
                                    display:'flex',
                                    flexDirection:'row',
                                    justifyContent:'space-between'}}>
                                        
                            <Link
                            to={`/pokemon/${row.values.name}`}>
                            <HamburgerIcon/>
                            </Link>

                                <Button h="1.75rem" size="sm"
                                 colorScheme="red"
                                 onClick={()=>onClickDelete(row.values.id)}>
                                <DeleteIcon/>

                                </Button>
                        </div>
                    :
                    
                    cell.render("Cell")}
                  
                  </Td>
                ))}
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    )
  }

export default DataTable;