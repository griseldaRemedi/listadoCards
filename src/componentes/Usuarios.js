import React from 'react'
import {
    BrowserRouter as Router,
  } from "react-router-dom";

function Usuarios(props){
    return(
       <div className="m-2"> 
          <div className="card w-100" style={{backgroundColor: props.color}}>
              <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">Edad: {props.edad}</p>
                <p className="card-text">Localidad: {props.localidad}</p>
              </div>
              <Router>
                    <a href={props.urlPersonal} target="_blank">
                        <button type="button" className="btn btn-success btn-block">Más Info...</button>
                    </a>
              </Router>
              
            </div>
      </div>
    )
  }
  
  export default Usuarios;