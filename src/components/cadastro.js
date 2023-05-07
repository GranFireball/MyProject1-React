import { useContext, useState, useEffect } from "react";
import UsuariosContext from "./UsuariosContext";
import { useNavigate } from "react-router-dom";

export default function Cadastro(){
    const {usuarios, setUsuarios} = useContext(UsuariosContext);
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [nick, setNick] = useState('');
    const [invalidoUsuario, setInvalidoUsuario] = useState(false);
    const [invalidoNick, setInvalidoNick] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        setInvalidoUsuario(false);
        setInvalidoNick(false);
        if(usuario !== '' && nick !== ''){
            usuarios.forEach((cadastrado) =>{                
                cadastrado.usuario === usuario &&
                setInvalidoUsuario(true);             
                cadastrado.nick === nick &&
                setInvalidoNick(true);
        })
        }
    }, [usuario, usuarios, nick])

    function verificaCadastro(){
        if(usuario === '' || senha === '' || nick === ''){
            return alert("Preencha todos os dados");
        }
        
        if(invalidoUsuario === false && invalidoNick === false){
            if(usuario.length > 12 || senha.length > 12 || nick.length > 12){
                alert("Dados com máximo de 12 caracteres"); 
            }
            else{
                setUsuarios([...usuarios,{usuario: usuario, senha: senha, nick: nick, mylist: []}]);
                setUsuario('');
                setSenha('');
                setNick('');
                alert("Cadastrado com sucesso!");
                navigate("/login");
            }

        }
        else if(invalidoUsuario === true && invalidoNick === true){
            alert("Usuário e Nick já existentes");
        }
        else if(invalidoUsuario === true){
            alert("Usuário já existente");
        }
        else if(invalidoNick === true){
            alert("Nick já existente");
        }
    }

    return(
        <div className="cadastro bg-secondary p-5">
            <div className="blocoCadastro w-25 p-2">
                <h3>Cadastrar-se</h3>
                <div className="d-flex flex-column">
                    <input className="mb-2 w-75" type="text" placeholder="Usuário" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>
                    <input className="mb-2 w-75" type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
                    <input className="mb-2 w-75" type="text" placeholder="Nick" value={nick} onChange={(e) => setNick(e.target.value)}/>
                    <button className="mb-2 w-75" onClick={verificaCadastro}>Confirmar</button>
                </div>
            </div>
        </div>
    );
}