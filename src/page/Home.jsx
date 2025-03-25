import Navbar from "../components/Navbar";
import SnapScroll from "../components/SnapScroll";


const Home = () => {
    return (
        <div>
        <SnapScroll>
            
            {/*Sección de Landing*/}
            <section 
            className="relative h-screen w-screen flex flex-col bg-cover bg-center text-white" 
            style={{ backgroundImage: 'url(/public/edificios_background.jpg)' }}>
                
            <h1 className="text-4xl font-bold text-center">VERONA</h1>

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