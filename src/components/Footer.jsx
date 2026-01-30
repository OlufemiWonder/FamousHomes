import React from "react";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#f0f7ff] pt-24 pb-12 text-famous-blue border-t border-blue-100 font-sans">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <img
                src={logo}
                alt="Famous Homes"
                className="w-13 h-13 rounded-full border border-blue-100 shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-xl font-display font-bold tracking-tighter leading-none text-famous-blue">
                  Famous
                  <span className="text-blue-300 font-light ml-1 leading-none">
                    Homes
                  </span>
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-blue-400 font-bold font-sans">
                  Nigeria
                </span>
              </div>
            </div>
            <p className="text-famous-blue/60 leading-relaxed mb-8 text-sm max-w-xs">
              Securing legacies across Nigeria through technological innovation
              and unmatched property expertise.
            </p>
            <div className="flex gap-4">
              {["FB", "IG", "TW", "LN"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-xl border border-blue-100 flex items-center justify-center text-[10px] font-bold text-blue-300 hover:bg-famous-light-blue hover:text-white hover:border-famous-light-blue transition-all bg-white"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-[9px] mb-10 uppercase tracking-[0.3em] text-blue-200">
              Explore
            </h4>
            <ul className="space-y-4 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
              <li>
                <a
                  href="#"
                  className="hover:text-famous-light-blue transition-colors"
                >
                  Residential
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-famous-light-blue transition-colors"
                >
                  Commercial
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-famous-light-blue transition-colors"
                >
                  Land / Titles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-famous-light-blue transition-colors"
                >
                  Portfolios
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-[9px] mb-10 uppercase tracking-[0.3em] text-blue-200">
              The Group
            </h4>
            <ul className="space-y-4 text-blue-400 text-[10px] font-bold tracking-widest uppercase">
              <li>
                <a
                  href="#"
                  className="hover:text-famous-light-blue transition-colors"
                >
                  Famous Tech
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-famous-light-blue transition-colors"
                >
                  Famous Capital
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-famous-light-blue transition-colors"
                >
                  Microfinance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-famous-light-blue transition-colors"
                >
                  Legal Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-[9px] mb-10 uppercase tracking-[0.3em] text-blue-200">
              Newsletter
            </h4>
            <div className="relative">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white border border-blue-100 rounded-xl px-5 py-4 text-[10px] focus:outline-none focus:border-famous-light-blue transition-colors font-bold tracking-widest uppercase shadow-sm"
                spellCheck="false"
              />
              <button className="absolute right-2 top-2 bg-famous-light-blue text-white p-2 rounded-lg hover:bg-famous-blue transition-all shadow-md">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-blue-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] uppercase tracking-[0.3em] text-blue-300 font-bold">
          <p className="font-sans">
            &copy; 2026 Famous Homes Nigeria. Member of Famous Holdings Group.
          </p>
          <div className="flex gap-10 text-blue-400/60">
            <a href="#" className="hover:text-famous-blue transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-famous-blue transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-famous-blue transition-colors">
              Lagos, NG
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
