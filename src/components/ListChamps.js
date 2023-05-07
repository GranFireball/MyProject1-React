
import { useContext} from 'react';
import Champs from './Champs';
import ChampsContext from './ChampsContext';
import UsuariosContext from './UsuariosContext';

export default function ListChamps({selFunc}){
    const {champions} = useContext(ChampsContext);
    const {usuarios, logado} = useContext(UsuariosContext);
    
    return(
        <div className='listChamps'>
            
            {selFunc === "Todas as funções"?champions.map((champ) => {
                let check = false;
                if(logado){
                    for(let item of usuarios[logado.id].mylist){
                        if( champ.nome === item){
                            check = true;
                        }
                    }
                }
                
                return <Champs img={champ.img} nome={champ.nome} funcao={champ.funcao} historia={champ.historia} check={check}/>
            }): champions.map((champ) => {
                let check = false;
                if(logado){
                    for(let item of usuarios[logado.id].mylist){
                        if( champ.nome === item){
                            check = true;
                        }
                    }
                }
                
                return champ.funcao === selFunc && <Champs img={champ.img} nome={champ.nome} funcao={champ.funcao} historia={champ.historia} check={check}/>
            })}
        </div>
    );
} 
