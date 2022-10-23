import '../../css/register.css';
import React from 'react';
import {useForm } from'react-hook-form';

import axios from 'axios';
import Cookies from 'universal-cookie';
function Register() {

    const cookies = new Cookies();
    const {register, handleSubmit} = useForm();
    
    let url = 'http://localhost:3001/users';
    

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
                        <form className='formInput' >
                            <div className='inputUser'>
                                <p>¿Cuál es su nombre?*</p>
                                <input type="text" {...register('user',{required:true})} />
                            </div>
                            <div className='inputNumber'>
                                <p>Teléfono*</p>
                                <input type="text" {...register('number',{required:true})} />
                            </div>
                            <div className='inputEmail'>
                                <p>Correo Electrónico*</p>
                                <input type="text" {...register('mail',{required:true})} />
                            </div>
                            <div className='inputId'>
                                <p>Número de identificación*</p>
                                <input type="text" {...register('iduser',{required:true})} />
                            </div>
                            <div className='inputPassword'>
                                <p>Contraseña*</p>
                                <input type="password" {...register('password',{required:true})} />
                            </div>
                            <div className='inputCity'>
                                <p>Ciudad*</p>
                                <input type="text" {...register('ciudad',{required:true})} />
                            </div>
                            <div className='inputButtonRegister'>
                                <input type="submit" value="Registrarse" />
                            </div>
                            <div className='cancelRegister'>
                                <input type="submit" value="Cancelar" />
                            </div>
                        </form>
                    </div>
                    <div className='footerForm'>
                        
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Register;