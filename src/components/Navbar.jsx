

const Navbar = () => {
    return (
        <div className="navbar">
        {/*Imagen de la Empresa*/}
        <div>
        <img src="/public/vite.svg" alt="image" />
        </div>

        <div className="flex space-x-6">
        <a href="caracteristicas" className="hover:underline">Características</a>
        <a href="quienes-somos" className="hover:underline">Quiénes Somos</a>
        <a href="contacto" className="hover:underline">Contacto</a>
        </div>

        </div>
    );
};

export default Navbar;