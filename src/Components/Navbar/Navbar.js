import { Link } from "react-router-dom";

const Navbar = () => {

    const titulo = `Marcelo's App`;

    return (
        <>
            <nav className="navbar">
                <div className="links">
                    {/* La etiqueta <a> hace un request al server, en cambio si quiero usar reactividad, debo usar <Link> */}
                    <Link to="/">Home</Link>
                    <Link to="/about">About me</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/new">New Blog</Link>    
                </div>
            </nav> 
        </>
    );
}
 
export default Navbar;