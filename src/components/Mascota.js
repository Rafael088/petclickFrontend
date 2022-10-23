import '../css/mascota.css';
import MaxImg from '../img/perritoMax.png';
import TomImg from '../img/tomGato.png';
function Mascota({data}) {
    const img = "TomImg";
    return ( 
        <div className="mascota">
            <div className='head'>
                <img src={img==="MaxImg"?MaxImg:TomImg} alt=""/>
                <h3>{data.name}</h3>
                <div className='btnEliminar'/>
            </div>
            <div className='body'>
                <div className='line especie'>
                    <p>Especie:</p>
                    <select name="especie" id="tipo-especie">
                        <option value="especie0">{data.kind}</option>
                        <option value="especie1">{data.kind==="Felino"?"Canino":"Felino"}</option>
                        <option value="especie2">Ave</option>
                    </select>
                </div>
                <div className='line raza'>
                    <p>Raza:</p>
                    <select name="raza" id="tipo-raza">
                        <option value="raza0">{data.race}</option>
                        {data.race==="Felino"?<>
                                <option value="raza1"></option>
                                <option value="raza2"></option>
                            </>:<></>
                        }
                        {data.race==="Canino"?<>
                                <option value="raza1"></option>
                                <option value="raza2"></option>
                            </>:<></>
                        }
                        {data.race==="Ave"?<>
                                <option value="raza1"></option>
                                <option value="raza2"></option>
                            </>:<></>
                        }
                        
                    </select>
                </div>
                <div className='line fecha'>
                    <p>Fecha de Naciemiento:</p>
                    <input type="date" name="fechaN" placeholder={data.date} defaultValue={data.date}/>
                </div>
                <div className='line genero'>
                    <p>Genero:</p>
                    <select name="genero" id="tipo-genero">
                        <option value="Nombre">{data.gende}</option>
                        <option value="Fecha">{data.gende==="Macho"?"Hembra":"Macho"}</option>
                    </select>
                </div>
            </div>
            <div className='footer'>
                <p>Historia Clinica</p>
                <p>Datos Medicos</p>
                <button>Guardar</button>
            </div>
        </div>
     );
}

export default Mascota;