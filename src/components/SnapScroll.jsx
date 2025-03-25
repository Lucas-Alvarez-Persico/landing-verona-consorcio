import { useEffect } from "react";

const SnapScroll = ({ children }) => {
  useEffect(() => {
    let currentIndex = 0;

    const handleScroll = (event) => {
      event.preventDefault();

      if (event.deltaY > 0) {
        currentIndex = Math.min(currentIndex + 1, children.length - 1);
      } else {
        currentIndex = Math.max(currentIndex - 1, 0);
      }

      document.getElementById(`section-${currentIndex}`)?.scrollIntoView({
        behavior: "smooth",
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [children]);

  return (
    <div className="snap-container">
      {children.map((child, index) => (
        <div key={index} id={`section-${index}`} className="h-screen">
          {child}
        </div>
      ))}
    </div>
  );
};

export default SnapScroll;

