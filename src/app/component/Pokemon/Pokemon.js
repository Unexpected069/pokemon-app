import React, {useState,useContext} from 'react';
import {Link} from 'react-router-dom';
import {cumulativeOffSet} from "../../utilities/cumulativeOffset";
import './Pokemon.scss';
//import UserContext from '../../context/userContext';

const Pokemon = ({
    id,
    title,
    url

}) => {


    return (
        <div className="card h-100 pokemon">
       
            <div className="card-body pokemon__text">
                <h4 className="card-title pokemon__title">
                    <Link to={`/pokemon/${id}`}>{title.toUpperCase()}</Link>
                </h4>
                
             
             <div className="pokemon__btn-Container">

                    <div>
                    <Link
                     to={`/pokemon/${id}`}
                     className="btn btn-success pokemon__add-to-cart">View Details</Link>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Pokemon;

