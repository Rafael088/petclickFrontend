import '../../css/register.css';
import {useForm } from'react-hook-form';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Register() {
    const [modalRegister, setModalRegister] = useState(false);

    const {register, handleSubmit} = useForm();
    
    let url = 'http://localhost:3001/users';
    
    async function registerDB(db) {
        await fetch(url,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(db)
        })
         .then(setModalRegister(true))
         .catch((err)=>console.log(err))
        
    }
    return ( 
        <div className="register">
            
            <div className="contPubli">
            </div>
            <div className='contForm'>
                <div className='form'>
                    <div className='headerForm'>
                        <div className='logoCont'>
                        
                        </div>
                    </div>
                    <div className='bodyForm'>
                        <form className='formInput' onSubmit={handleSubmit(registerDB)}>
                            <div className='input'>
                                <p>¿Cuál es su nombre?*</p>
                                <input type="text" {...register('username',{required:true})} />
                            </div>
                            <div className='input'>
                                <p>Teléfono*</p>
                                <input type="text" {...register('number',{required:true})} />
                            </div>
                            <div className='input'>
                                <p>Correo Electrónico*</p>
                                <input type="text" {...register('mail',{required:true})} />
                            </div>
                            <div className='input'>
                                <p>Número de identificación*</p>
                                <input type="text" {...register('iduser',{required:true})} />
                            </div>
                            <div className='input'>
                                <p>Contraseña*</p>
                                <input type="password" {...register('password',{required:true})} />
                            </div>
                            <div className='input'>
                                <p>Ciudad*</p>
                                <input type="text" {...register('city',{required:true})} />
                            </div>
                            <div className='inputButtonRegister'>
                                <input type="submit" value="Registrarse" />
                            </div>
                            <div className='cancelRegister'>
                                <NavLink to="/" className="btnCancel">Volver</NavLink>
                            </div>
                        </form>
                    </div>
                    <div className='footerForm'>
                        <p>Error</p>
                    </div>
                </div>
            </div>
            {modalRegister?<div className='contModalRegister'>
                <div className='contBody'>
                    <h2>Te has Registrado Correctamente</h2>
                    <NavLink className="btnA" to="/"> Aceptar </NavLink>
                </div>
            </div>:<></>}
        </div>
     );
}

export default Register;