import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const isHome = location.pathname === "/";

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-700 ${isScrolled || !isHome ? "bg-[#f0f7ff] py-3 border-b border-blue-100 shadow-md" : "bg-transparent py-6"}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Famous Homes"
              className="w-13 h-13 rounded-full border border-blue-100 shadow-sm group-hover:scale-105 transition-transform"
            />
            <div className="flex flex-col">
              <span
                className={`text-xl font-display font-bold tracking-tighter leading-none ${isScrolled || !isHome ? "text-famous-blue" : "text-white"}`}
              >
                Famous
                <span className="text-famous-light-blue ml-1 font-light opacity-90">
                  Homes
                </span>
              </span>
              <span
                className={`text-[9px] uppercase tracking-[0.3em] font-bold font-sans mt-0.5 ${isScrolled || !isHome ? "text-blue-400" : "text-white/60"}`}
              >
                Holdings Group
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <div
              className={`flex items-center gap-8 font-bold uppercase text-[9px] tracking-[0.2em] ${isScrolled || !isHome ? "text-famous-blue/80" : "text-white"}`}
            >
              <Link
                to="/"
                className={`hover:text-famous-light-blue transition-colors ${location.pathname === "/" ? "text-famous-light-blue" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/properties"
                className={`hover:text-famous-light-blue transition-colors ${location.pathname === "/properties" ? "text-famous-light-blue" : ""}`}
              >
                Properties
              </Link>
              <Link
                to="/about"
                className={`hover:text-famous-light-blue transition-colors ${location.pathname === "/about" ? "text-famous-light-blue" : ""}`}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`hover:text-famous-light-blue transition-colors ${location.pathname === "/contact" ? "text-famous-light-blue" : ""}`}
              >
                Contact
              </Link>
            </div>
            <Link
              to="/contact"
              className={`px-7 py-2.5 rounded-xl font-bold transition-all text-[9px] uppercase tracking-widest ${isScrolled || !isHome ? "bg-famous-blue text-white hover:bg-famous-light-blue shadow-md" : "bg-white/10 text-white border border-white/20 hover:bg-white hover:text-famous-blue"}`}
            >
              Enquire
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-transform active:scale-90 ${isScrolled || !isHome ? "text-famous-blue" : "text-white"}`}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 8h16M4 16h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Slide-out Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <div
          className="absolute inset-0 bg-famous-blue/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        <div
          className={`absolute right-0 top-0 h-screen w-4/5 max-w-sm bg-[#f0f7ff] shadow-2xl transition-transform duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className="p-8 pt-32 h-full flex flex-col">
            <div className="space-y-8 mb-auto">
              {[
                {name: "Home", path: "/"},
                {name: "Properties", path: "/properties"},
                {name: "About", path: "/about"},
                {name: "Contact", path: "/contact"},
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block text-2xl font-display font-bold tracking-tighter ${location.pathname === link.path ? "text-famous-light-blue" : "text-famous-blue"}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="pb-12 border-t border-blue-100 pt-10 mt-10">
              <Link
                to="/contact"
                className="block w-full text-center bg-famous-blue text-white py-5 rounded-2xl font-bold text-xs uppercase tracking-[0.3em] shadow-xl"
              >
                Start Inquiry
              </Link>
              <p className="mt-8 text-center text-[10px] uppercase tracking-[0.4em] text-blue-300 font-bold">
                Famous Holdings Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
