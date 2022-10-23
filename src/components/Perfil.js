import React, { useState } from 'react';

import Cookies from 'universal-cookie';

function Perfil() {
    
    const cookies = new Cookies();
    
    const [username] = useState(cookies.get('username'));

    var [menu, setMenu] = useState(false);
    function chandleTrue() {
        setMenu(true)
    }
    function chandleFalse() {
        setMenu(false)
    }
    return ( 
        <div className="contPerfil">
            <h4>{username} 
                <p>Ver Perfil</p>
            </h4>
            <div className='imgPerfil' onClick={chandleTrue}>
                
            </div>
            <div className={menu?"optnTrue":"optnFalse"}>
                    <h3>Mi Informacion <p onClick={chandleFalse}></p></h3>
                    <div className='body'>
                        <p>Telefono: 
                            <input type="text" name="telefono" placeholder='100002'/>
                        </p>
                        <p>Correo: 
                            <input type="email" name="correo" placeholder='@gmail.com'/>
                        </p>
                        <p>N° Identificacion: 
                            <input type="text" name="numero" placeholder='978722'/>
                        </p>
                        <p>Ciudad: 
                            <input type="text" name="ciudad" placeholder='Manizales'/>
                        </p>
                    </div>
                    <div className='footer'>
                        <button>Guardar</button>
                    </div>
            </div>
        </div>
     );
}

export default Perfil;