import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UsuariosContext from "./UsuariosContext";

export default function Login(){
    const {usuarios, logado, setLogado} = useContext(UsuariosContext);
    const [usuario, setUsuario] = useState();
    const [senha, setSenha] = useState();

    useEffect(() => {
        setUsuario('');
        setSenha('');
    }, [logado])

    function verificaLogin(){
        if(!logado){
            let id = usuarios.findIndex((user) =>
            user.usuario === usuario && user.senha === senha
        )
        if(id >= 0){
            setLogado({id: id});
            alert('Logado com sucesso!')
        }
        else{
            alert('Login inválido!')
        }
        }
        else{
            alert('Já existe um usuário conectado!')
        }
    }

    return(
        <div className="loginPage bg-secondary p-5">
            <div className="blocoLogin w-25 d-flex flex-column p-2">
                <h3>Login</h3>
                <input className="mb-2 w-75" type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                <input className="mb-2 w-75" type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                <button className="mb-2 w-75" onClick={verificaLogin}>Entrar</button>
                <Link to="cadastro" className="small position-relative">Cadastrar-se</Link>
            </div>
            
            
        </div>
    );
}