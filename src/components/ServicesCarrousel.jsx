const AnimatedCarousel = () => {
  const cards = [
    {
      text: "Mantenimiento predictivo de las instalaciones",
      icon: (
        <svg className="w-12 h-12 mt-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9.75 3v2.25M14.25 3v2.25M3 18.75V7.5A2.25 2.25 0 015.25 5.25h13.5A2.25 2.25 0 0121 7.5v11.25M3 18.75h18M3 18.75v1.5A2.25 2.25 0 005.25 22.5h13.5A2.25 2.25 0 0021 20.25v-1.5" />
        </svg>
      ),
    },
    {
      text: "Supervisión remota en tiempo real",
      icon: (
        <svg className="w-12 h-12 mt-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 6v6l4 2M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      text: "Automatización de procesos industriales",
      icon: (
        <svg className="w-12 h-12 mt-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      text: "Automatización de procesos industriales",
      icon: (
        <svg className="w-12 h-12 mt-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      text: "Automatización de procesos industriales",
      icon: (
        <svg className="w-12 h-12 mt-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      text: "Automatización de procesos industriales",
      icon: (
        <svg className="w-12 h-12 mt-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      text: "Automatización de procesos industriales",
      icon: (
        <svg className="w-12 h-12 mt-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      text: "Automatización de procesos industriales",
      icon: (
        <svg className="w-12 h-12 mt-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      text: "Automatización de procesos industriales",
      icon: (
        <svg className="w-12 h-12 mt-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    {
      text: "Automatización de procesos industriales",
      icon: (
        <svg className="w-12 h-12 mt-4 text-blue-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16m8-8H4" />
        </svg>
      ),
    },
    // Agregá más ítems con su propio icon
  ];

  const duplicatedCards = [...cards, ...cards];

  return (
    <div className="w-full overflow-hidden relative">
      <div className="animate-scroll flex w-max">
        {duplicatedCards.map((card, index) => (
          <div
            key={index}
            className="w-64 h-80 bg-blue-400 rounded-xl drop-shadow-xl overflow-hidden flex-shrink-0 m-4"
          >
            <div className="flex flex-col items-center justify-center text-blue-900 text-center text-xl font-bold bg-blue-200 h-full p-6 rounded-xl">
              <span>{card.text}</span>
              {card.icon}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedCarousel;