import '../../css/login.css';
import {useForm } from'react-hook-form';
import React, { useState } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import ModalValid from '../../components/ModalValid';

function Login() {

    const cookies = new Cookies();
    const {register, handleSubmit} = useForm();
    const [cliModal, setCliModal] = useState(0);
    
    let url = 'http://localhost:3001/users';
    function conexionDb(db) {
        axios.get(url)
        .then((res)=>{
            for (let index = 0; index < res.data.length; index++) {
                if (res.data[index].username===db.username && res.data[index].password===db.password ) {
                    cookies.set('username', res.data[index].username, {path:"/"});
                    cookies.set('id', res.data[index].iduser, {path:"/"})
                    cookies.set('rol', res.data[index].userrol, {path:"/"})
                    setCliModal(1)
                } 
            }
        },
        (error)=>{
            console.error(error);
        }
        )
    }

    return ( 
        <div className="login">
            <div className="contPubli">
            </div>
            <div className='contForm'>
                <div className='form'>
                    <div className='headerForm'>
                        <div className='logoCont'>
                        
                        </div>
                    </div>
                    <div className='bodyForm'>
                        <form className='formInput' onSubmit={handleSubmit(conexionDb)}>
                            <div className='inputUser'>
                                <p>User</p>
                                <input type="text" {...register('username',{required:true})} />
                            </div>
                            <div className='inputPassword'>
                                <p>Password</p>
                                <input type="password" {...register('password',{required:true})} />
                            </div>
                            <div className='inputButton'>
                                <input type="submit" value="Login" />
                            </div>
                        </form>
                    </div>
                    <div className='footerForm'>
                        <div className='forgetPassword'>
                            <a href="/">ForgetPassword</a>
                        </div>
                        <div className='register'>
                            <a href="/">Register</a>
                        </div>
                    </div>
                </div>
            </div>
            {cliModal===2?<ModalValid link="/clinica" />:<></>}
            {cliModal===1?<ModalValid link="/home"/>:<></>}
        </div>
     );
}

export default Login;