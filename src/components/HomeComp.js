import CompStore from "./CompStore";
import HeadComp from "./HeadComp";

function HomeComp() {
    const listStore = {
        "Clinicas": [
            "Huellas",
            "Cachorros",
            "Amvet"
        ],
        "Esteticas": [
            "Estetica Canina",
            "La Mascota",
            "Mascota Feliz"
        ],
        "Guarderias": [
            "PawPal",
            "MascotaShop"
        ]
    }
    return ( 
        <div className="contBody">
           <HeadComp titulo="Bienveido a PetClick"/>
            <div className="body store">
                <CompStore titulo="Clinicas Veterinarias" listStore={listStore.Clinicas}/>
                <CompStore titulo="Esteticas Veterinarias" listStore={listStore.Esteticas}/>
                <CompStore titulo="Guarderias y Tiendas" listStore={listStore.Guarderias}/>
            </div>
        </div>
     );
}

export default HomeComp;