import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const storeImg = require.context('../img', true);

function Store({name, ruta}) {
    return (
        <> 
        <a href={`https://www.${ruta}.com`} target="_black">
            <div className="store">
                    <img src={storeImg(`./${name}.png`)} alt='store'/>
                    <p>{name}</p>
                    
            </div>
        </a>
            
        </>
        
     );
}

export default Store;