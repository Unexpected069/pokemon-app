import React from 'react';
import { List, ListItem, ListIcon, Button, } from "@chakra-ui/react"
import {CheckIcon,AddIcon,DeleteIcon} from '@chakra-ui/icons'
const PokemonDetailsComponent = ({
    abilities,
    base_experience,
    height,
    moves,
    name,
    sprites,
    stats,
    types,
    
}) => {


const renderAbilities=()=>{
    return(
    <List style={{marginLeft:'10px'}} spacing={1}>
                                 
    {abilities?.map((ability,index)=>{
            return(
        <ListItem key={index}>
        <ListIcon as={CheckIcon} color="green.500" />
             {ability.ability.name}
            </ListItem>
        )
        })
        }
</List>)
}

const renderTypes=()=>{
    return(
    <List style={{marginLeft:'10px'}} spacing={1}>
                                 
    {types?.map((types,index)=>{
            return(
        <ListItem key={index}>
        <ListIcon as={CheckIcon} color="green.500" />
             {types.type.name}
            </ListItem>
        )
        })
        }
</List>)
}

const renderStats=()=>{
    return(
        <List style={{marginLeft:'10px'}} spacing={1}>
                                     
        {stats?.map((stats,index)=>{
                return(
                    <ListItem key={index}>
            <ListIcon as={CheckIcon} color="green.500" />
                 {stats.stat.name}
                </ListItem>
            )
            })
            }
    </List>)
}

const renderMoves=()=>{
    return(
        <List style={{marginLeft:'10px'}} spacing={1}>
                                     
        {moves?.map((moves,index)=>{
                return(
            <ListItem key={index}>
            <ListIcon as={CheckIcon} color="green.500" />
                 {moves.move.name}
                </ListItem>
            )
            })
            }
    </List>)
}


    const onCart = () => {
     // props.dispatch(addProductToCart(props.product));
     console.log('add to cart')
    };

    return (
        <aside className="col-sm-7">
          

            <article className="card-body p-5">
           
                <div style={{display:'flex',justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
                <h3 className="title mb-3">{name.toUpperCase()}</h3>

                <Button leftIcon={<AddIcon />} colorScheme="teal" variant="solid">
                                Add to my team
                            </Button>


                            {/*<Button 
                            leftIcon={<DeleteIcon color="red.500"/>} 
                            color="#d3d3d3" 
                            variant="solid">
                                <div style={{color:'#000'}}>
                                Remove from my team
                                </div>
                               
                            </Button>*/}

                </div>
               



                <p className="price-detail-wrap">
	<span className="price h3 text-warning">
		<span className="currency">
            </span><span className="num">{}</span>
	</span>
                </p>
                <dl className="param param-feature">
                    <dt>Abilities</dt>
                          {renderAbilities()}
                </dl>
                <dl className="param param-feature">
                    <dt>Height</dt>
                    <dd>{height}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Types</dt>
                    {renderTypes()}
                </dl>
                <dl className="param param-feature">
                    <dt>Stats</dt>
                    {renderStats()}
                </dl>
                <dl className="param param-feature">
                    <dt>Base Experience</dt>
                    <dd>{base_experience}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Moves</dt>
                    {renderMoves()}
                </dl>
            
              
  
           
            </article>
        </aside>
    );
};

export default PokemonDetailsComponent;
