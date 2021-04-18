import axios from "axios";
import * as React from "react";


export interface AppContextInterface {
  strGlass:string | undefined;
  id:string | undefined;

}

 export const AppCtx = React.createContext<AppContextInterface[] | null>(null);

const sampleAppContext: AppContextInterface[] | null =null;

 const getGlassesCategory= async() =>{
    
  const sampleAppContext: AppContextInterface[] | null =null;
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

  const categorias = await axios.get(url);

  console.log(categorias);
  let responseDataJson=categorias.data.drinks;
  for (let element in responseDataJson) {    
          console.log(responseDataJson[element]);
          sampleAppContext!.push({strGlass:responseDataJson[element].strGlass,id:responseDataJson[element].strGlass});
  } 

}
  
  export const Context:React.FC= ({children}) => {

    return(
      <AppCtx.Provider value={sampleAppContext}>...</AppCtx.Provider>
    );
    
  }
   

  