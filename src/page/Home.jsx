import Navbar from "../components/Navbar";
import SnapScroll from "../components/SnapScroll";


const Home = () => {
    return (
        <div>
        <Navbar/>
        <SnapScroll>
            
            {/*Sección de Landing*/}
            <section 
            className="relative h-screen w-screen flex flex-col bg-cover bg-center text-white justify-center items-center" 
            style={{ backgroundImage: 'url(/public/edificios_background.jpg)' }}>
            <div className="absolute inset-0 bg-blue-500/30"></div>
            <h1 className="relative text-7xl font-bold">VERONA</h1>
            <h2 className="relative text-2xl font-semibold">Administración de Consorcios</h2>

            </section>

            <section className="h-screen w-screen flex flex-col items-center justify-center bg-blue-500 text-white">
                <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
                <p className="mt-4 text-lg">Ofrecemos soluciones innovadoras para tu negocio.</p>
            </section>

            <section className="h-screen w-screen flex flex-col items-center justify-center bg-purple-500 text-white">
                <h1 className="text-4xl font-bold">Sobre Nosotros</h1>
                <p className="mt-4 text-lg">Un equipo apasionado creando experiencias digitales.</p>
            </section>

            <section className="h-screen w-screen flex flex-col items-center justify-center bg-red-500 text-white">
                <h1 className="text-4xl font-bold">Contacto</h1>
                <p className="mt-4 text-lg">¡Hablemos! Estamos listos para ayudarte.</p>
            </section>
        </SnapScroll>
        </div>
    );
};

export default Home;