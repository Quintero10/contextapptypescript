import React from 'react';
import { AppContextInterface, AppCtx } from '../Context/Context';


const Name = () => {

    const appContext = React.useContext(AppCtx);
       
    
    console.log(appContext);
        return(<div>
            {
                appContext?.map((element,value)=>(
                    <p key={value}>{element.strGlass}</p>
                ))
              }
            </div>)
    
   
}

export default Name;