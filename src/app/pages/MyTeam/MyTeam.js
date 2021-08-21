import React, {Component, useState,useContext, useEffect} from 'react';
import DataTable from '../../component/DataTable/DataTable';

  const MyTeam=()=>{

  return(
    <React.Fragment>

    <div className="container" style={{paddingTop: '2rem'}} >
         <div className="column">
           <div style={{
             fontSize:'24px',
             fontWeight:'bold',
             marginBottom:'5px'
           }}>My Team</div>
          
        <DataTable/>
   
        </div>
    </div>
    </React.Fragment>
  )
  }

  export default MyTeam;