
import { Link, useNavigate } from "react-router-dom";
import navbarImg from "../imgs/navbarImg.jpg";
import logo from "../imgs/logo.png";
import { useContext} from "react";
import UsuariosContext from "./UsuariosContext";
export default function NavBar(){
    const {usuarios, logado, setLogado} = useContext(UsuariosContext);
    const navigate = useNavigate();

    return(
        <>
        <div className="navBar" style={{backgroundSize: 'cover', backgroundImage: `url(${navbarImg})`, backgroundRepeat: 'no-repeat'}}>
        <div className="img-fluid mb-2 mx-2 d-flex justify-content-between" >
                <img className="m-1 mt-4" style={{height:'35px'}}src={logo} alt="logo"></img>
                <h3 className=" mt-5 end-50 text-white ms-auto me-auto">Nome Site</h3>
                {logado? <button className="m-1 mt-3 mb-3 bg-white  border border-2 rounded-pill" onClick={() => {setLogado(undefined); alert("Desconectado!")}}>Logout</button> : <button className="m-1 mt-3 mb-3 bg-white border border-2 rounded-pill" onClick={() => navigate("/login")}>Login</button>}

        </div>
            <div className="pages">
                <div className="row m-2 ms-5 align-items-center">
                <Link to="/" className="col-1 my-1">Home</Link>
                <Link to="mylist" className="col-1 my-1">My List</Link>
                <Link to="about" className="col-1 my-1">About</Link>
                <p className="col-6"/>
                <h5 className="col-3 my-1 text-white">{logado && <>Player: {usuarios[logado.id].nick}</>}</h5>
                
                </div>
            </div>
        </div>
        </>
    );
   
}