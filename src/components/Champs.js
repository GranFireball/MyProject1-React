import { useContext, useEffect } from "react";
import UsuariosContext from "./UsuariosContext";

export default function Champs({img, nome, funcao, historia, check}){
    const {usuarios, logado} = useContext(UsuariosContext);
    
    useEffect(() => {
        localStorage.setItem("dadosProjeto1", JSON.stringify(usuarios));
      }, [usuarios]);

    function handleChange(){

            let newlist; 
            check = !check;
            check === true?
            newlist = ([...usuarios[logado.id].mylist,nome]) 
            :
            newlist = usuarios[logado.id].mylist.filter((item) => item !== nome);
            usuarios[logado.id].mylist = newlist;
        

    }

    if(check === true || check === false){
        return(
        
            <div className="Champs">
                <div className='row my-2 mx-2'>
                    <div className='col-3 my-2'>
                        <img src={img} alt="imagem"></img>
                    </div>
                   
                    <div className='col-8 my-2'>
                        <h2>{nome}</h2>
                        <h5>Função: {funcao}</h5>
                        <h6>História: {historia}</h6>
                    </div>
                    <div className='col-1 my-2'>
                       
                        {logado && <>
                        <label className="me-2">My List</label>
                        <input type="checkbox" value={nome} defaultChecked={check} onChange={handleChange}/>
                        </>
                        }
                    </div>
                    
                </div>
            </div>
        );
    }
    else{
        return(
        
            <div className="Champs">
                <div className='row my-2 mx-2'>
                    <div className='col-3 my-2'>
                        <img src={img} alt="imagem"></img>
                    </div>
                   
                    <div className='col-9 my-2'>
                        <h2>{nome}</h2>
                        <h5>Função: {funcao}</h5>
                        <h6>História: {historia}</h6>
                    </div>
                    
                </div>
            </div>
        );
    }
    
}