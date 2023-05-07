import { useContext} from "react"
import ChampsContext from "./ChampsContext"
import UsuariosContext from "./UsuariosContext";
import Champs from "./Champs";

export default function MyList(){
    const {champions} = useContext(ChampsContext);
    const {usuarios, logado} = useContext(UsuariosContext);
    
    return(
        <div className="mylist bg-secondary p-2">
            {logado? 
            <>
            <h2 className="text-white">Minha Lista</h2>
            {usuarios[logado.id].mylist.length > 0?
            champions.map((champ) => {
                let check = false;
                for(let item of usuarios[logado.id].mylist){
                    if( champ.nome === item){
                        check = true;
                    }
                }
                return check === true && <Champs img={champ.img} nome={champ.nome} funcao={champ.funcao} historia={champ.historia}/>
               
            })
            :
            <h4 className="text-white">"Lista Vazia"</h4>
            } 
            </>
            :
            <h2 className="text-white">Nenhum usuário conectado!</h2>
            }
           
        </div>
    )
}