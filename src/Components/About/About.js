import Contact from "../Contact/Contact";

const About = () => {
    return (
        <div className="home">
            <div className="flex-espaciado">
                <div className="cabecera-texto">
                    <h2>Acerca de mi</h2>
                    <br />
                    <h3>Hola! Soy Marcelo Agoston. Soy un Fullstack Developer de Argentina</h3>
                    <br />
                    <p>Realmente disfruto desarrollar Software. Lo hago tanto como mi fuente de trabajo, como por diversión. Ademas me encuentro finalizando mis estudios como Ing. en Sistemas de Información en la U.T.N. Facultad Regional Resistencia</p>
                </div>
                <img src="perfil.jpg" alt="Marcelo Agoston" className="img-perfil"/>
            </div>
            
            <br />

            

            <p>
                En la actualidad trabajo mi propia startup de desarrollo de Software llamada <a href="https://www.cognitis.com.ar/" target="_blank" rel="noreferrer" className="negrita">Congnitis Software House </a> 
                donde junto con mis colegas, socios y amigos, desarrollamos Software de calidad para distintas compañias de la región y el mundo.
            </p>

            <p>Las tecnologias que actualmente conozco y utilizo para trabajar son:</p>
                <ul>
                    <li>Django</li>
                    <li>Flask</li>
                    <li>React</li>
                    <li>Node.js</li>
                </ul>
            
            <p>Aunque he realizado trabajos por hobby o para la Universidad en otros lenguajes como C, PHP, Wordpress, entre otros.</p>

            <p>Ademas me gusta compartir mi conocimiento y actualmente lo hago en mi blog llamado <a href="https://mateandcode.blogspot.com/" target="_blank" rel="noreferrer" className="negrita">Mate and Code</a>.</p>

            <p>Además de <span className='italica negrita'>codear</span>, me gustan los video juegos, los deportes -especialmente el basquet y la formula 1- , jugar juegos de rol con mis amigos, pasar tiempo en familia, cocinar y hacer modelismo de miniaturas (aviones, autos, etc.)</p>

            <br />
            <h4>Puedes contactarte conmigo o explorar mis repositorios</h4>

            <Contact />
        </div>
    );
}
 
export default About;