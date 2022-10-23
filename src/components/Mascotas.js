import HeadComp from "./HeadComp";
import '../css/mascotas.css';
import Mascota from "./Mascota";
import Cookies from 'universal-cookie';
import React, { useState, useEffect } from 'react';
import ModalCreatePets from "./ModalCreatePets";

function Mascotas() {
    const cookies = new Cookies();
    const [userID] = useState(cookies.get('id'));
    const [petsUser, setPetsUser] = useState([]);
    const [modalCreate, setModalCreate] = useState(false);
    useEffect(() => {
        let urlUser = `http://localhost:3001/users/pets${userID}`;
        connet()
        async function connet() {
              fetch(urlUser)
               .then((response)=> response.json())
               .then((data)=> setPetsUser(data))
        }
    }, [])
    
    return ( 
        <div className="contBody">
            <HeadComp titulo="Mascotas" />
            <div className="body mascotas">
                <div className="contBtnHead">
                    <button onClick={()=> setModalCreate(true)} >Agregar Mascota</button>
                </div>
                <div className="contMascotas">
                    {petsUser.map((data)=>(
                        <Mascota data={data}/>
                    ))}
                </div>
            </div>
            {modalCreate?<ModalCreatePets setModalCreate={setModalCreate}/>:<></>}
        </div>
     );
}

export default Mascotas;