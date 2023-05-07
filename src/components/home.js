
import { useState } from "react";
import ListChamps from "./ListChamps";

const funcoesChamp = [
    "Todas as funções",
    "Atirador", 
    "Mago", 
    "Lutador", 
    "Assassino", 
    "Tanque"
];
export default function Home(){
    const [selFunc, setSelFunc] = useState("Todas as funções");

    return(
        <div className="Home bg-secondary">
            <select className="w-25 ms-4 mt-4" defaultValue="Todas as funções" value={selFunc} onChange={(e) => setSelFunc(e.target.value)}>
                {funcoesChamp.map((funcao) => {
                    return <option value={funcao}>{funcao}</option>
                })}
            </select>
            <ListChamps selFunc={selFunc}/>
        </div>
    );
}