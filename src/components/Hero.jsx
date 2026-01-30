import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Modern Mansion
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Contemporary Villa
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // Luxury Estate
    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80", // High-end Apartment
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-famous-blue">
      {/* Background Slideshow */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear scale-110"
            style={{
              backgroundImage: `url('${slide}')`,
              transform: index === currentSlide ? "scale(1)" : "scale(1.1)",
            }}
          />
          <div className="absolute inset-0 bg-famous-blue/70 backdrop-blur-[1px]"></div>
        </div>
      ))}

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 leading-tight tracking-tight">
          Find Your{" "}
          <span className="text-famous-light-blue italic border-b-2 border-famous-light-blue pb-1">
            Famous
          </span>{" "}
          Space
        </h1>
        <p className="text-base md:text-lg text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed font-light font-sans tracking-wide">
          Technological innovation and unmatched expertise to secure your
          perfect property in Nigeria.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Link
            to="/properties"
            className="bg-famous-light-blue text-white px-10 py-4 rounded-xl font-bold text-[10px] tracking-[0.2em] uppercase hover:bg-white hover:text-famous-blue transition-all transform hover:scale-105 shadow-2xl flex items-center gap-3"
          >
            Explore Properties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
          <Link
            to="/about"
            className="text-white font-bold text-[10px] tracking-[0.2em] uppercase hover:text-famous-light-blue transition-colors flex items-center gap-2 underline underline-offset-[8px] opacity-80"
          >
            Portfolio
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-8 h-0.5 rounded-full transition-all duration-500 ${index === currentSlide ? "bg-famous-light-blue" : "bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
