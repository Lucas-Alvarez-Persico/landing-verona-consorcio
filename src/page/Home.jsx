import Form from "../components/Form";
import ServicesCarrousel from "../components/ServicesCarrousel";
import Navbar from "../components/Navbar";
import SnapScroll from "../components/SnapScroll";
import { Mail, Phone } from "lucide-react";

const Home = () => {
    return (
        <div>
            <Navbar />

            <SnapScroll>

                {/* Landing */}
                <section 
                    className="relative h-screen w-screen flex flex-col bg-cover bg-center text-white justify-center items-center px-4 sm:px-6 lg:px-8 text-center"
                    style={{ backgroundImage: 'url(/public/edificios-background.jpg)' }}>
                    
                    <div className="absolute inset-0 bg-blue-500/30"></div>

                    <h1 className="relative text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold">VERONA</h1>
                    <h2 className="relative text-xl sm:text-2xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6">Administración de Consorcios</h2>
                    <h2 className="relative text-base sm:text-lg md:text-2xl lg:text-3xl max-w-[95%] sm:max-w-[90%] md:max-w-[800px] font-semibold mx-auto mb-8">
                        Nos encargamos de la administración, mantenimiento y resolución de conflictos para que vos solo te preocupes por disfrutar tu hogar.
                    </h2>

                    <button 
                        className="mt-6 sm:mt-8 flex items-center px-8 sm:px-10 md:px-12 py-3 sm:py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-bold text-base sm:text-lg rounded-full shadow-2xl hover:scale-110 transition duration-500"
                        onClick={() => document.getElementById("servicios").scrollIntoView({ behavior: "smooth" })}
                    >
                        Ver más
                    </button>
                </section>

                {/* Quiénes Somos */}
                <section className="w-full min-h-screen flex flex-col md:flex-row bg-blue-900 text-white">
                    <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-10 md:px-16 py-16">
                        <img src="Logo_Verona.png" alt="Logo" className="w-full max-w-[200px] h-auto object-contain mb-10" />
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">¿Quiénes Somos?</h1>
                        <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6 text-left">
                            En Verona, somos especialistas en la administración de consorcios, comprometidos con brindar un servicio transparente, eficiente y cercano a cada propietario e inquilino. Con una trayectoria construida sobre la confianza y la responsabilidad, gestionamos cada edificio como si fuera nuestro.
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-10">Nuestra Misión</h2>
                        <p className="text-base sm:text-lg md:text-xl mt-4 italic text-left">
                            "Brindar una administración de consorcios transparente, eficiente y humana, cuidando cada detalle para garantizar el bienestar de los vecinos y el correcto funcionamiento de cada edificio."
                        </p>
                    </div>

                    <div
                        className="w-full md:w-1/2 h-64 sm:h-80 md:h-auto bg-cover bg-center"
                        style={{ backgroundImage: "url('/a.jpg')" }}
                    />
                </section>

                {/* Servicios */}
                <section id="servicios" className="w-full min-h-screen flex flex-col items-center bg-blue-900 text-white text-center px-4 sm:px-6 py-20 pt-50">
                    <div className="z-10 p-4 sm:p-8">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">Nuestros Servicios</h1>
                        <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6">Ofrecemos una gran variedad de servicios y soluciones.</p>
                    </div>
                    <ServicesCarrousel />
                </section>

                {/* Sección de Contacto */}
                <section className="h-screen w-screen flex flex-col items-center bg-blue-900 text-white">
                    
                    <div className="top-0 left-0 w-full h-[90vh] bg-cover bg-center flex flex-col justify-center items-start px-4 md:px-20"
                        style={{ backgroundImage: 'url(/public/contact-us-image.jpg)' }}>
                        
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
