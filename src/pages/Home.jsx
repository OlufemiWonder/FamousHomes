import React from "react";
import Hero from "../components/Hero";
import FeaturedProperties from "../components/FeaturedProperties";
import About from "../components/About";
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-[#f0f7ff] min-h-screen">
      <Hero />

      {/* Services Section */}
      <section className="py-20 bg-white border-y border-blue-50">
        <div className="container mx-auto px-6 text-center">
          <span className="text-famous-blue/30 font-bold tracking-[0.3em] uppercase text-[8px] mb-3 inline-block">
            What We Offer
          </span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-famous-blue mt-1 mb-12 tracking-tight uppercase">
            Group Specializations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Residential",
                desc: "Finding the perfect home for you and your legacy.",
              },
              {
                name: "Commercial",
                desc: "Secure high-yield business spaces and offices.",
              },
              {
                name: "Land & Titles",
                desc: "Expert verification and secured property acquisition.",
              },
            ].map((s, i) => (
              <div
                key={i}
                className="p-8 rounded-[2rem] bg-[#f0f7ff] border border-blue-100 group hover:bg-famous-blue transition-all duration-500 shadow-sm hover:shadow-xl transform hover:-translate-y-1"
              >
                <h3 className="text-lg font-display font-bold text-famous-blue group-hover:text-white mb-3 tracking-tighter uppercase">
                  {s.name}
                </h3>
                <p className="text-slate-500 group-hover:text-white/60 text-xs leading-relaxed font-medium">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-[#f0f7ff]">
        <FeaturedProperties />
        <About />
      </div>

      {/* Corporate CTA */}
      <section className="py-20 bg-blue-50 border-t border-blue-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-famous-light-blue/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-5xl font-display font-bold text-famous-blue mb-8 tracking-tight leading-tight">
            Experience the{" "}
            <span className="text-famous-light-blue italic border-b border-famous-light-blue/20 pb-1">
              Famous
            </span>{" "}
            Standard
          </h2>
          <p className="text-blue-400 text-xs max-w-xl mx-auto mb-12 font-medium uppercase tracking-[0.2em]">
            Professionalism in every interaction. Excellence in every square
            foot.
          </p>
          <Link
            to="/contact"
            className="bg-famous-blue text-white px-10 py-4 rounded-xl font-bold text-[9px] tracking-[0.2em] uppercase hover:bg-famous-light-blue transition-all shadow-xl shadow-famous-blue/10 inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
