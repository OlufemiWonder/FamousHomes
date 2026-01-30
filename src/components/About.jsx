import React from "react";

const About = () => {
  const values = [
    {
      title: "Forward Thinking",
      desc: "Anticipating change and embracing innovation in every project.",
    },
    {
      title: "Authenticity",
      desc: "Maintaining honesty, clarity, and openness in all interactions.",
    },
    {
      title: "Mastery",
      desc: "Unparalleled expertise in the Nigerian and global real estate markets.",
    },
    {
      title: "Sustainability",
      desc: "Building for the future with superior standards and excellence.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden font-sans">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center mb-28">
          <div>
            <span className="text-famous-blue/40 font-bold tracking-[0.3em] uppercase text-[10px]">
              About Famous Homes
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-famous-blue mt-4 mb-10 leading-tight">
              A Unique Blend of Financial &{" "}
              <span className="text-famous-vibrant italic">Real Estate</span>{" "}
              Expertise
            </h2>
            <p className="text-slate-500 mb-10 leading-relaxed text-lg font-light">
              As part of the Famous Holdings group, Famous Homes stands for
              superior standards and innovation. We help you discover your ideal
              property with technological mastery at our core.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="p-8 bg-slate-50 rounded-3xl border-l-[6px] border-famous-blue shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl font-display font-bold text-famous-blue mb-2">
                  20+
                </div>
                <p className="text-[10px] text-famous-blue/40 uppercase tracking-widest font-bold">
                  Years Experience
                </p>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border-l-[6px] border-famous-vibrant shadow-sm hover:shadow-lg transition-all">
                <div className="text-4xl font-display font-bold text-famous-blue mb-2">
                  500+
                </div>
                <p className="text-[10px] text-famous-blue/40 uppercase tracking-widest font-bold">
                  Properties Sold
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10 transform hover:-translate-y-2 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Corporate Building"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Blue Elements (Instead of Gold) */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-famous-vibrant/20 rounded-full blur-3xl z-0"></div>
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-famous-blue/10 rounded-full blur-3xl z-0"></div>

            <div className="absolute -bottom-10 -right-10 bg-famous-blue p-10 rounded-3xl shadow-2xl text-white max-w-[240px] z-20 border border-white/10">
              <p className="font-display font-bold text-xl mb-3 tracking-tight italic">
                Superior Standards
              </p>
              <p className="text-xs text-white/40 leading-relaxed font-bold uppercase tracking-widest">
                Our group promise
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <div
              key={i}
              className="group p-10 rounded-[2.5rem] border border-slate-100 hover:border-famous-blue hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-famous-blue/5 flex items-center justify-center text-famous-blue group-hover:bg-famous-blue group-hover:text-white mb-8 transition-all">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-display font-bold text-famous-blue mb-4 tracking-tight">
                {v.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed font-medium">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
