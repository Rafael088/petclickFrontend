import Store from "./Store";
import '../css/Store.css';
function CompStore({titulo, listStore}) {
    
    return ( 
        <div className="contStore">
            <h4>{titulo}</h4>
            <div className="contList">
            {listStore.map((name, id) => (
                <Store key={id} name={name} ruta={name}/>
            ))}
            </div>
        </div>
     );
}

export default CompStore;