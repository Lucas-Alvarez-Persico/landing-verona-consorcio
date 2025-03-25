

const Navbar = () => {
    const scrollToSection = (index) => {
      document.getElementById(`section-${index}`)?.scrollIntoView({
        behavior: "smooth",
      });
    };
  
    return (
    <div className="navbar bg-blue-500 fixed w-full top-0 flex items-center justify-between px-6 h-16 text-white">
        {/* Logo de la empresa */}
        <button onClick={() => scrollToSection(0)}><img src="building-user-solid.svg" alt="Logo" className="h-10" /></button>

        {/* Categorias de la pagina */}
        <div className= "flex-1 flex justify-end">
            <div className="flex space-x-6 font-bold">
                <button onClick={() => scrollToSection(1)} className="hover:underline">Quienes Somos</button>
                <button onClick={() => scrollToSection(2)} className="hover:underline">Nuestros Servicios</button>
                <button onClick={() => scrollToSection(3)} className="hover:underline">Contacto</button>
            </div>
        </div>
    </div>
    );
  };
  
  export default Navbar;
  