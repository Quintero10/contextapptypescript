import React from 'react';
import { TextContext } from '../App';


const Author = () => {

    const { state, update } = React.useContext(TextContext);

   

    return (
        <div>
            <p>{state}</p>
        </div>
    )
}

export default Author;