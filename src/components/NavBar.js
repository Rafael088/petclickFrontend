
import { AiFillCalendar, AiFillHome, AiFillGitlab } from "react-icons/ai";

function NavBar({changeHome, changeCalendar, changeMascot, cerrarSesion, position}) {
    
    return ( 
        <div className="contNavBar" >
                <div className="contNavLogo">
                    
                </div>
                <div className="contButtons">
                    <div className={position===0?"btn active":"btn"} onClick={changeHome}>
                        <AiFillHome className='icon'/> <p>Home </p>
                    </div>
                    <div className={position===1?"btn active":"btn"} onClick={changeCalendar}>
                        <AiFillCalendar className='icon'/>
                        <p>Calendario</p>
                    </div>
                    <div className={position===2?"btn active":"btn"} onClick={changeMascot}>
                        <AiFillGitlab className='icon'/> 
                        <p>Mascotas</p>
                    </div>
                </div>
                <div className="contCerrarSesion">
                    <button onClick={cerrarSesion}>
                        Cerrar Sesion
                    </button>
                </div>
            </div>
     );
}

export default NavBar;