import React from "react";

const ContactPage = () => {
  return (
    <div className="pt-20 bg-[#f0f7ff] font-sans">
      <section className="relative py-16 lg:py-20 overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-famous-blue/85 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-famous-light-blue font-bold tracking-[0.4em] uppercase text-[8px] mb-3 inline-block">
            Direct Consultation
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tighter leading-none mb-4">
            Get In Touch
          </h1>
          <p className="text-white/50 text-[9px] max-w-xl mx-auto font-bold uppercase tracking-[0.3em]">
            Partner with the Leading Name in Nigerian Real Estate.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-famous-blue/30 font-bold tracking-[0.3em] uppercase text-[8px]">
              Connect With Us
            </span>
            <h2 className="text-2xl md:text-4xl font-display font-bold text-famous-blue mt-2 mb-8 uppercase leading-tight">
              Secure Your{" "}
              <span className="italic border-b border-famous-blue/20 pb-1 opacity-80 font-serif">
                Future
              </span>
            </h2>
            <p className="text-famous-blue/60 text-lg font-light leading-relaxed mb-10">
              Our advisors are ready to help you navigate the world's most
              exclusive real estate markets. Reach out today for a private
              consultation.
            </p>

            <div className="space-y-8">
              {[
                {label: "Lagos Office", value: "45 Famous Ave, Ikoyi, Nigeria"},
                {label: "Direct Line", value: "+234 810 00 FAMOUS"},
                {label: "Inquiries", value: "concierge@famousholdings.com"},
              ].map((item, i) => (
                <div key={i}>
                  <p className="text-[8px] uppercase tracking-widest font-bold text-famous-blue opacity-30 mb-1">
                    {item.label}
                  </p>
                  <p className="text-lg font-display font-bold text-famous-blue uppercase tracking-tight">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-[2.5rem] border border-blue-100 shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-famous-light-blue opacity-5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:opacity-10 transition-opacity"></div>
            <h3 className="text-xl font-display font-bold text-famous-blue mb-8 uppercase tracking-wide border-b border-blue-50 pb-2">
              Inquiry Form
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-1.5">
                  <label className="text-[8px] uppercase tracking-widest font-bold text-famous-blue/40 px-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-[#f0f7ff] border border-blue-100 rounded-xl px-5 py-3 focus:outline-none focus:border-famous-light-blue transition-colors text-xs font-bold tracking-wide"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[8px] uppercase tracking-widest font-bold text-famous-blue/40 px-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#f0f7ff] border border-blue-100 rounded-xl px-5 py-3 focus:outline-none focus:border-famous-light-blue transition-colors text-xs font-bold tracking-wide"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-[8px] uppercase tracking-widest font-bold text-famous-blue/40 px-1">
                  Interest
                </label>
                <select className="w-full bg-[#f0f7ff] border border-blue-100 rounded-xl px-5 py-3 focus:outline-none focus:border-famous-light-blue transition-colors text-xs appearance-none font-bold tracking-wide">
                  <option>Residential Acquisition</option>
                  <option>Commercial Investment</option>
                  <option>Title & Legal Services</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[8px] uppercase tracking-widest font-bold text-famous-blue/40 px-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  className="w-full bg-[#f0f7ff] border border-blue-100 rounded-xl px-5 py-3 focus:outline-none focus:border-famous-light-blue transition-colors text-xs resize-none font-bold tracking-wide"
                ></textarea>
              </div>
              <button className="w-full bg-famous-blue text-white py-5 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-famous-light-blue transition-all shadow-xl shadow-famous-blue/10">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
