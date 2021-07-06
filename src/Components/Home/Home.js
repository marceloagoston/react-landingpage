import { useState } from "react";

import Contact from "../Contact/Contact";

const Home = () => {
    
    // Variables de este tipo no son reactivas, para lograr reactividad hay que usar States
    let variable = 'Ladero'

    const parrafo = `Bienvenidos a mi porfolio`;

    // const [puntos, setPuntos] = useState(0);

    // const [saludo, setSaludo] = useState('')

    // const handleSumar = () =>{
    //     setPuntos(puntos+1);
    // }

    // const handleRestar = () =>{
    //     setPuntos(puntos-1);
    // }

    // const handleSaludar = (nombre) =>{
    //     setSaludo('Hola ' + nombre);
    // }


    // const handleDom = (e) =>{
    //     console.log(e.target);
    // }

    return (
        <div className="home">
            <div className="flex-espaciado">
                <div className="cabecera-texto">
                    <h1>¡Hola! Soy Marcelo Agoston</h1>
                    <h2 className="cgris mt-5">Python/Javascript Fullstack Developer</h2>
                    <br />
                    <br />
                    <Contact />
                </div>
                <img src="perfil.jpg" alt="Marcelo Agoston" className="img-perfil"/>
            </div>
            
            <hr className="mt-5 cgris" />
            <div className="section-content">
                <p className="texto-descriptivo mt-5">Disfruto desarrollar Software, lo hago tanto como mi fuente de trabajo, como por diversión. La mayoria de mis proyectos estan hechos en Django web Framework, pero también desarrollo Aplicaciones React <i class="fab fa-react"></i>.</p>
                <p className="texto-descriptivo mt-5">Además estoy finalizando mis estudios universitarios de Ing. en Sistema en la UTN - Facultad Regional Resistencia</p>
            </div>
            
            <hr />
            <h3>Proyectos</h3>
            <p>... desarrollar ...</p>
        </div>
    );
}
 
export default Home;