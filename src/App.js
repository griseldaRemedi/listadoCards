import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Usuarios from './componentes/Usuarios';


function App() {
  return (
    <div className="App contenedorApp">
     <h2 className="text-white pt-4">Listado</h2> 
      <Usuarios nombre="Gisela" edad="40" localidad="CABA" color="yellow" urlPersonal="https://github.com/GiselaFlores"></Usuarios>
      <Usuarios nombre="Rodrigo" edad="46" localidad="CABA" color="green" urlPersonal="https://es.wikipedia.org/wiki/Rodrigo_de_la_Serna"></Usuarios>
      <Usuarios nombre="Laura" edad="35" localidad="" color="orange"  urlPersonal="https://lauraribas.com/recuperar-inspiracion-negocio/"></Usuarios>
    </div>
  );
}

export default App;
