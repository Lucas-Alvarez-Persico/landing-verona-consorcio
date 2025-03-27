import Form from "../components/Form";
import Navbar from "../components/Navbar";
import SnapScroll from "../components/SnapScroll";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";


const Home = () => {
    return (
        <div>
            <Navbar />
            <SnapScroll>

                {/* Sección de Landing */}
                <section 
                    className="relative h-screen w-screen flex flex-col bg-cover bg-center text-white justify-center items-center px-4" 
                    style={{ backgroundImage: 'url(/public/edificios_background.jpg)' }}>
                    <div className="absolute inset-0 bg-blue-500/30"></div>
                    
                    <h1 className="relative text-5xl md:text-9xl text-center font-bold">VERONA</h1>
                    <h2 className="relative text-2xl md:text-5xl text-center font-semibold mb-6">Administración de Consorcios</h2>
                    <h2 className="relative text-lg md:text-3xl text-center max-w-[90%] md:max-w-[800px] font-semibold mx-auto mb-8">
                        Nos encargamos de la administración, mantenimiento y resolución de conflictos para que vos solo te preocupes por disfrutar tu hogar.
                    </h2>

                    <button 
                    className="mt-10 flex items-center px-12 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-extrabold text-lg rounded-full shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ml-4" onClick={() => document.getElementById("servicios").scrollIntoView({ behavior: "smooth" })}
                    >
                    <div className="text-7x1">
                    Ver más
                    </div>
                </button>
                </section>

                {/* Sección de "Quiénes Somos" */}
                <section className="h-screen w-screen flex flex-col items-center justify-center bg-blue-500 text-white text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-bold">Quiénes Somos</h1>
                    <p className="mt-4 text-base md:text-lg max-w-[90%] md:max-w-[600px]">
                        Ofrecemos soluciones innovadoras para tu negocio.
                    </p>
                </section>

                {/* Sección de "Nuestros Servicios" */}
                <section id="servicios" className="h-screen w-screen flex flex-col items-center justify-center bg-purple-500 text-white text-center px-4">
                    <h1 className="text-3xl md:text-4xl font-bold">Nuestros Servicios</h1>
                    <p className="mt-4 text-base md:text-lg max-w-[90%] md:max-w-[600px]">
                        Un equipo apasionado creando experiencias digitales.
                    </p>
                </section>

                {/* Sección de Contacto */}
                <section className="h-screen w-screen flex flex-col items-center bg-blue-900 text-white">
                    
                    <div className="top-0 left-0 w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-start px-4 md:px-20"
                        style={{ backgroundImage: 'url(/public/contact_us_image.jpg)' }}>
                        
                        <h1 className="text-4xl md:text-7xl font-bold mt-10 md:mt-40">CONTÁCTENOS!</h1>
                        <h2 className="text-lg md:text-2xl font-bold mt-6 md:mt-20">
                            Contactanos hoy y mejorá la administración de tu consorcio.
                        </h2>
                        <div className="mt-10 md:mt-20 w-full max-w-lg md:max-w-2xl">
                            <Form />
                        </div>
                    </div>
                    
                    <div className="flex flex-col md:flex-row text-white mt-8 text-xl space-y-4 md:space-y-0 md:space-x-10 place-content-center md:place-content-end">
                        <div className="flex items-center space-x-2">
                            <Mail className="w-5 h-5" />
                            <span>maildeprueba@gmail.com</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                            <Phone className="w-5 h-5" />
                            <a href="tel:+541155555555" className="hover:underline">
                                +54 11 5555-5555
                            </a>
                        </div>
                    </div>

                </section>

            </SnapScroll>
        </div>
    );
};

export default Home;
