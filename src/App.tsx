import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Components/Name';
import Author from './Components/Author';
import Url from './Components/Url';
import { Context } from './Context/Context';
import { createCtx } from './Context/NSContext';

const [ctx, TextProvider] = createCtx("");
export const TextContext = ctx;

function App() {



  return (
 
    <Context>
      <TextProvider>
      {/*<Name />*/}
      <Author />
      <Url />
      </TextProvider>
   
   </Context>
      
    
   
  );
}

export default App;




