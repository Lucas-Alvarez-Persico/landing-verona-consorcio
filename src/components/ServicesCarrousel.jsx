const AnimatedCarousel = () => {
    const cards = [
      "Mantenimiento predictivo de las instalaciones",
      "Supervisión remota en tiempo real",
      "Automatización de procesos industriales",
      "Análisis de datos energéticos",
      "Integración de sistemas IoT",
      "Mantenimiento predictivo de las instalaciones",
      "Supervisión remota en tiempo real",
      "Automatización de procesos industriales",
      "Análisis de datos energéticos",
      "Integración de sistemas IoT"
    ];
  
    return (
      <div className="w-full px-6 max-w-screen mx-auto h-80 overflow-hidden relative group">
        {cards.map((text, index) => (
          <div
            key={index}
            className="absolute top-0 w-64 h-80 flex-shrink-0 bg-blue-400 rounded-xl drop-shadow-xl overflow-hidden animate-slide group-hover:paused hover:grayscale-0 grayscale"
            style={{
              animationDelay: `${index * 2}s`,
              animationDuration: `${cards.length * 2}s`,
              left: "100%"
            }}
          >
            <div className="absolute flex items-center justify-center text-black font-bold z-[1] opacity-90 rounded-xl inset-0.5 bg-blue-200 text-base p-6 text-center">
              {text}
            </div>
            <div className="absolute w-72 h-56 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
          </div>
        ))}
  
        <style>{`
          @keyframes slide {
            0% {
              left: 100%;
            }
            100% {
              left: -800px;
            }
          }
  
          .animate-slide {
            animation-name: slide;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }
  
          .paused {
            animation-play-state: paused !important;
          }
        `}</style>
      </div>
    );
  };
  
  export default AnimatedCarousel;
  