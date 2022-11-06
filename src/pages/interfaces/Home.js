
import HomeComp from '../../components/HomeComp';
import Cookies from 'universal-cookie';
import '../../css/home.css';
import React, { useState, useEffect } from 'react';
import Mascotas from '../../components/Mascotas';
import Calendario from '../../components/Calendar';
import NavBar from '../../components/NavBar';

function Home() {
    
    const cookies = new Cookies();
    const [position, setPosition] = useState(0);
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

    useEffect(() => {
        
      if (cookies.get('id')===undefined) {
        window.location.href="./";
      }
    }, [])
    
    return ( 
        <div className="contHome">
            <NavBar changeHome={changeHome} changeCalendar={changeCalendar} changeMascot={changeMascot} cerrarSesion={cerrarSesion} position={position}/>
            {position === 0? <HomeComp/>:<></>}
            {position === 1? <Calendario/>:<></>}
            {position === 2? <Mascotas/>:<></>}
        </div>
     );
}

export default Home;