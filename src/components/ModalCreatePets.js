import '../css/modalCreatePets.css';
import React, { useState } from 'react';

import Cookies from 'universal-cookie';
import {useForm } from'react-hook-form';
function ModalCreatePets({setModalCreate}) {
    const cookies = new Cookies();
    const [userID] = useState(cookies.get('id'));
    const [userName] = useState(cookies.get('username'));
    const {register, handleSubmit} = useForm();
    const [position, setPosition] = useState(0);
    //Agregar Mascota
    async function addPets(db) {
        let urlPets = "https://petclick-db.herokuapp.com/pets";
        await fetch(urlPets,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(db)
        })
        setModalCreate(false)
    }
    //Estado de las posiciones del form
    function changeNext() {
        if (position===0) {
            setPosition(1)
        }
        if (position===1) {
            setPosition(2)
        }
        if (position===2) {
            setPosition(3)
        }
    }
    function changeBack() {
        if (position===1) {
            setPosition(0)
        }
        if (position===2) {
            setPosition(1)
        }
        if (position===3) {
            setPosition(2)
        }
    }
    return ( 
        <div className="contModalCreatePets">
            <div className="contBody">
                <div className='contHead'>
                    <button className='btnClose' onClick={()=>setModalCreate(false)} ></button>    
                </div>
                
                <form className='form' onSubmit={handleSubmit(addPets)}>
                    {
                        position===0?<div className='contInputs'> 
                            <p>Nombre</p>
                            <input type="text" {...register('name',{required:true})}/>
                            <p>Especie</p>
                            <input type="text" {...register('kind',{required:true})}/>
                            <input type="hidden" value={userName} {...register('ownername',{required:true})}/>    
                        </div>:<></>
                    }
                    {
                        position===1?<div className='contInputs'> 
                            <p>Raza</p>
                            <input type="text" {...register('race',{required:true})}/>
                            <p>Tamaño</p>
                            <input type="text" {...register('size',{required:true})}/>    
                        </div>:<></>
                    }
                    {
                        position===2?<div className='contInputs'> 
                            <p>Utilizacion</p>
                            <input type="text" {...register('utilization',{required:true})}/>
                            <p>Peso</p>
                            <input type="text" {...register('weight',{required:true})}/>  
                        </div>:<></>
                    }
                    {
                        position===3?<div className='contInputs'> 
                            <input type="hidden" value={userID} {...register('iduser',{required:true})}/>
                            <p>Genero</p>
                            <input type="text" {...register('gende',{required:true})}/>
                            <p>Fecha de Nacimiento</p>
                            <input type="text" {...register('date',{required:true})}/>
                        </div>:<></>
                    }
                    {position===3?<button type='submit' className='btnAdd'>Agregar Mascota</button>:<></>}
                </form>
                <div className='contBtns'>
                        {position!==0?<button className="btn b" onClick={()=> changeBack()} >Volver</button>:<></>}  
                        {position!==3?<button className="btn n" onClick={()=>changeNext()}>Siguiente</button>:<></>}
                </div>
            </div>
        </div>
     );
}

export default ModalCreatePets;