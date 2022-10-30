import React, { useState, useEffect } from 'react';

import Cookies from 'universal-cookie';

function Perfil() {
    
    const cookies = new Cookies();
    const [userData, setUserData] = useState([]);
    const [id] = useState(cookies.get('id'));
    useEffect(() => {
        let urlUser = `https://petclick-db.herokuapp.com/users${id}`;
        connet()
        async function connet() {
              fetch(urlUser)
               .then((response)=> response.json())
               .then((data)=> setUserData(data))
        }
    }, [])
    
    var [menu, setMenu] = useState(false);
    function chandleTrue() {
        setMenu(true)
    }
    function chandleFalse() {
        setMenu(false)
    }
    return ( 
        <div className="contPerfil">
            <h4>{userData.username} 
                <p>Ver Perfil</p>
            </h4>
            <div className='imgPerfil' onClick={chandleTrue}>
                
            </div>
            <div className={menu?"optnTrue":"optnFalse"}>
                    <h3>Mi Informacion <p onClick={chandleFalse}></p></h3>
                    <div className='body'>
                        <p>Telefono: 
                            <input type="text" name="telefono" placeholder={userData.number}/>
                        </p>
                        <p>Correo: 
                            <input type="email" name="correo" placeholder={userData.mail}/>
                        </p>
                        <p>N° Identificacion: 
                            <input type="text" name="numero" placeholder={userData.iduser}/>
                        </p>
                        <p>Ciudad: 
                            <input type="text" name="ciudad" placeholder={userData.city}/>
                        </p>
                    </div>{/*
                    <div className='footer'>
                        <button>Guardar</button>
                    </div>*/}
            </div>
        </div>
     );
}

export default Perfil;