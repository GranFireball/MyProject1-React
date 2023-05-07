import { useState, useEffect } from "react";
import UsuariosContext from "./UsuariosContext";

/*const dbUsuarios = [
    {usuario: "gran", senha: "1234", nick: "Granfire", mylist: ["Malphite","Ahri"]},
    {usuario: "gran1", senha: "123", nick: "Granfire", mylist: ["Ahri"]}
]
*/
const initialData = localStorage.getItem("dadosProjeto1")? JSON.parse(localStorage.getItem('dadosProjeto1')): [];

export default function UsuariosProvider({children}){
    const [usuarios, setUsuarios] = useState(initialData);
    const [logado, setLogado] = useState();

    useEffect(() => {
        localStorage.setItem("dadosProjeto1", JSON.stringify(usuarios));
      }, [usuarios]);
   
    return(
        <UsuariosContext.Provider value={{usuarios, setUsuarios, logado, setLogado}}>
            {children}
        </UsuariosContext.Provider>
    );
}