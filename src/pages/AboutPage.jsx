import React from "react";
import About from "../components/About";

const AboutPage = () => {
  return (
    <div className="pt-20 bg-[#f0f7ff] font-sans">
      <section className="relative py-16 lg:py-20 overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-famous-blue/80 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-famous-light-blue font-bold tracking-[0.4em] uppercase text-[8px] mb-3 inline-block">
            Nigerian Excellence
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tighter leading-none mb-4">
            The <span className="text-famous-light-blue">Famous</span> Legacy
          </h1>
          <p className="text-white/50 text-[9px] max-w-xl mx-auto font-bold uppercase tracking-[0.3em]">
            Redefining Luxury & Professionalism in Nigeria.
          </p>
        </div>
      </section>

      <div className="bg-[#f0f7ff]">
        <About />
      </div>

      <section className="py-20 bg-blue-50 border-t border-blue-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-4xl font-display font-bold text-famous-blue mb-6 leading-tight uppercase">
                Mastery in the{" "}
                <span className="text-famous-light-blue">Nigerian</span> Market
              </h2>
              <p className="text-famous-blue/60 text-base leading-relaxed font-light mb-6">
                We navigate the complexities of the Nigerian real estate
                landscape with precision and local mastery. Our deep-rooted
                expertise in the Lagos market ensures that every acquisition is
                secure, verified, and exceptional.
              </p>
              <div className="flex gap-4">
                <div className="w-8 h-0.5 bg-famous-light-blue mt-2.5"></div>
                <p className="text-famous-blue font-bold text-xs italic tracking-wide">
                  "Building legacies, one home at a time."
                </p>
              </div>
            </div>
            <div className="rounded-[2.5rem] overflow-hidden shadow-xl order-1 md:order-2 border-8 border-white/50 bg-white/20">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
