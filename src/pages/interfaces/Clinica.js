import NavBar from '../../components/NavBar';
import '../../css/clinica.css';
import Cookies from 'universal-cookie';
import PanelWelcome from '../../components/PanelWelcome';
import React, { useState } from 'react';

function Clinica() {
    const cookies = new Cookies();
    const [position, setPosition] = useState(1);
    function changeHome() {
        setPosition(0);
    }
    function changeCalendar() {
        setPosition(1);
    }
    function changeMascot() {
        setPosition(2);
    }

    function cerrarSesion() {
        cookies.remove('username', {path:"/"});
        cookies.remove('id', {path:"/"});
        cookies.remove('rol', {path:"/"});
        window.location.href="./";
    }
    return ( 
        <div className="contClinica">
            <NavBar changeHome={changeHome} changeCalendar={changeCalendar} changeMascot={changeMascot} cerrarSesion={cerrarSesion} position={position}/>
            {position === 1?<PanelWelcome/>:<></>}
        </div>
     );
}

export default Clinica;