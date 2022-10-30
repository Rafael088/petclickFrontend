import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const storeImg = require.context('../img', true);

function Store({name, ruta}) {
    const [modal, setModal] = useState(false);
    function changeModal() {
        if (modal) {
            setModal(false)
        }else{
            setModal(true)
        }
    }
    return (
        <>
        <div className="store" onClick={() => changeModal()}>
            <img src={storeImg(`./${name}.png`)} alt='store'/>
            <p>{name}</p>
            
        </div>
        {modal?
            <div className="modal">
                
                <div className="contModal">
                    <div className='headerModal'>
                        <button className='btn' onClick={()=> changeModal()}></button>
                    </div>
                    <div className='contBody'>
                        <h2>{name}</h2>
                        <NavLink to="/cita" className='btnA'>Pedir Cita</NavLink>
                    </div>
                  </div>
            </div>:
            <></>
            }
        </>
        
     );
}

export default Store;