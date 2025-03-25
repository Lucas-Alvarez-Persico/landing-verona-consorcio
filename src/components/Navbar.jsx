

const Navbar = () => {
    return (
        <div className="navbar bg-blue-500 relative flex items-center justify-center">
        {/*Imagen de la Empresa*/}
        <div>
        <img src="/public/vite.svg" alt="image" />
        </div>

        <div className="flex-1 flex justify-end">
        <div className="flex space-x-6 text-white font-bold">
        <a href="caracteristicas" className="hover:underline">Quienes Somos</a>
        <a href="quienes-somos" className="hover:underline">Nuestros Servicios</a>
        <a href="contacto" className="hover:underline">Contacto</a>
        </div>
        </div>



        </div>
    );
};

export default Navbar;