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
            <h1 className="relative text-8xl text-center mx-auto  font-bold">VERONA</h1>
            <h2 className="relative text-2xl text-center mx-auto font-semibold mb-30">Administración de Consorcios</h2>
            <h2 className="relative text-2xl text-center max-w-[800px] mx-auto">Nos encargamos de la administración, mantenimiento y resolución de conflictos para que vos solo te preocupes por disfrutar tu hogar.</h2>

            </section>

            <section className="h-screen w-screen flex flex-col items-center justify-center bg-blue-500 text-white">
                <h1 className="text-4xl font-bold">Quienes Somos</h1>
                <p className="mt-4 text-lg">Ofrecemos soluciones innovadoras para tu negocio.</p>
            </section>

            <section className="h-screen w-screen flex flex-col items-center justify-center bg-purple-500 text-white">
                <h1 className="text-4xl font-bold">Nuestros Servicios</h1>
                <p className="mt-4 text-lg">Un equipo apasionado creando experiencias digitales.</p>
            </section>

            <section className="h-screen w-screen flex flex-col items-center bg-white text-white">

                <div className="top-0 left-0 w-full h-[75vh] bg-cover bg-center" 
                style={{ backgroundImage: 'url(/public/contact_us_image.jpg)' }}>
                    <div className="justify-center items-center">
                    <h1 className="text-7xl text-white font-bold mt-30 p-30">CONTÁCTENOS!</h1>
                    <p className="mt-4 text-lg">¡Hablemos! Estamos listos para ayudarte.</p>
                    </div>
                </div>


            </section>
        </SnapScroll>
        </div>
    );
};

export default Home;