import HeadComp from "./HeadComp";
import '../css/calendar.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import CardCita from "./CardCita";
import React, { useState } from 'react';

function Calendario() {
    const [value, onChange] = useState(new Date());
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const [dateUp, setDateUp] = useState(value.toLocaleDateString("es-ES", options));
    return ( 
        <div className="contBody">
            <HeadComp titulo="Calendario" />
            <div className="body calendar">
                <div className="contCalendar">
                    <Calendar onChange={onChange} value={value} />
                </div>
                <div className="contCitas">
                    <h2>Citas</h2>
                    <div className="contBody">
                        <p>{dateUp}</p>
                        <CardCita hora="8:00am" info="Baño en la Mascota Feliz"/>
                        <CardCita hora="2:00pm" info="Control en Huellas"/>
                        <button>Cancelar Cita</button>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Calendario;