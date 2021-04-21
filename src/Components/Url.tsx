import React from 'react';
import { TextContext } from '../App';


const Url = () => {

    const { update } = React.useContext(TextContext);

    return (
        <div>
            <p>I'm Url Component</p>
            <button onClick={()=>update("activé")}>activar</button>
        </div>
    )
}

export default Url;