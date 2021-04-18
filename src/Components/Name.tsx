import React from 'react';
import { AppCtx } from '../Context/Context';


const Name = () => {

    const appContext = React.useContext(AppCtx);
    console.log(appContext);
    return (
        <div>
            <p>I'm Name Component</p>
        </div>
    )
}

export default Name;