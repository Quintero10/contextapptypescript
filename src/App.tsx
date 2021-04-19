import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Components/Name';
import Author from './Components/Author';
import Url from './Components/Url';
import { Context } from './Context/Context';



function App() {

  

  return (
 
    <Context>
  
      <Name />
      <Author />
      <Url />

   
   </Context>
      
    
   
  );
}

export default App;




