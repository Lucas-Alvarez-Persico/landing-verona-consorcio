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
                <div className="absolute inset-0 bg-blue-500/30 text-center"></div>
                <h1 className="relative text-9xl text-center mx-auto  font-bold">VERONA</h1>
                <h2 className="relative text-5xl text-center mx-auto font-semibold mb-30">Administración de Consorcios</h2>
                <h2 className="relative text-3xl text-center max-w-[800px] font-semibold mx-auto mb-20">Nos encargamos de la administración, mantenimiento y resolución de conflictos para que vos solo te preocupes por disfrutar tu hogar.</h2>

                <button 
                    className="mt-10 flex items-center px-12 py-4 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white font-extrabold text-lg rounded-full shadow-2xl hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-opacity-70 active:bg-blue-800 active:shadow-inner transform hover:scale-110 transition duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed ml-4" onClick={() => document.getElementById("servicios").scrollIntoView({ behavior: "smooth" })}
                    >
                    <div className="text-7x1">
                    Ver más
                    </div>
                </button>

            </section>

            <section className="h-screen w-screen flex flex-col items-center justify-center bg-blue-500 text-white">
                <h1 className="text-4xl font-bold">Quienes Somos</h1>
                <p className="mt-4 text-lg">Ofrecemos soluciones innovadoras para tu negocio.</p>
            </section>

            <section id="servicios" className="h-screen w-screen flex flex-col items-center justify-center bg-purple-500 text-white">
                <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
                <p className="mt-4 text-lg">Un equipo apasionado creando experiencias digitales.</p>
            </section>

            <section className="h-screen w-screen flex flex-col items-center bg-blue-900 text-white">

                <div className="top-0 left-0 w-full h-[75vh] bg-cover bg-center" 
                style={{ backgroundImage: 'url(/public/contact_us_image.jpg)' }}>
                    <div className="justify-center items-center">
                    <h1 className="text-7xl text-white font-bold mt-40 p-30">CONTÁCTENOS!</h1>
                    </div>
                    <div>
                    <h1 className="text-2xl text-white font-bold mb-40 p-30"> Contactanos hoy y mejorá la administración de tu consorcio.</h1>
                    </div>
                </div>


            </section>
        </SnapScroll>
        </div>
    );
};

export default Home;