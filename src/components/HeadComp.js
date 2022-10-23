import Perfil from "./Perfil";
import '../css/headComp.css';

function HeadComp({titulo}){
    /*useEffect(() => {
        let urlUser = `http://localhost:3001/users${userID}`;

      async function connet() {
            fetch(urlUser)
             .then((response)=> response.json())
             .then((data)=> )
      }
    
      
    }, [])*/
    
    return ( 
        <div className="contHead">
            <h1>{titulo}</h1>
            <Perfil/>
        </div>
     );
}

export default HeadComp;