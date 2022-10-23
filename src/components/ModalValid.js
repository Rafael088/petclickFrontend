import { NavLink } from "react-router-dom";

function ModalValid({link}) {
    return ( 
        <div className="contModalValid">
            <div className="contBody">
                <h2>Bienvenido</h2>
                <NavLink to={link} className="btnLink">Aceptar</NavLink>
            </div>
        </div>
     );
}

export default ModalValid;