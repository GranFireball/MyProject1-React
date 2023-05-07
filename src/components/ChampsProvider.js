import ChampsContext from "./ChampsContext";
import imgVayne from '../imgs/vayne.jpg';
import imgAhri from '../imgs/ahri.jpg';
import imgFiora from '../imgs/fiora.jpg';
import imgTalon from '../imgs/talon.jpg';
import imgMalphite from '../imgs/malphite.jpg';

const champions = [
    {img: imgVayne, nome: "Vayne", funcao: "Atirador", historia: "Vayne Highlights"},
    {img: imgAhri, nome: "Ahri", funcao: "Mago", historia: "Ahri Highlights"},
    {img: imgMalphite, nome: "Malphite", funcao: "Tanque", historia: "Malphite Highlights"},
    {img: imgTalon, nome: "Talon", funcao: "Assassino", historia: "Talon Highlights"},
    {img: imgFiora, nome: "Fiora", funcao: "Lutador", historia: "Fiora Highlights"},
]

export default function ChampsProvider({children}){

    return(
        <ChampsContext.Provider value={{champions}}>
            {children}
        </ChampsContext.Provider> 
    );
}