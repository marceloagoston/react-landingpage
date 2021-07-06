import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Lo sentimos</h2>
            <p>Parece que la página buscada no existe</p>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}
 
export default NotFound;