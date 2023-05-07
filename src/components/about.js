import Contact from './Contact';

export default function About(){
    return(
        <>
        <div className="bg-secondary text-white p-2">
            <div className="mx-2">
            <h1 className='mb-4'>Sobre</h1>
            <p>Nome: Gran Fireball</p>
            <p>Curso: Ciência da Computação</p>
            <p>Hobbies: </p>
            <p>- Games</p>
            <p>- Esportes</p>
            <p>- Músicas</p>
            </div>
            
        </div>
        <Contact/>
        </>
    );
}