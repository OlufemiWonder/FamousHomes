import React from "react";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const allProperties = [
    {
      price: "₦250,000,000",
      title: "Luxury 4 Bedroom Terrace",
      location: "Ikoyi, Lagos",
      beds: 4,
      baths: 4,
      area: "350",
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      price: "₦180,000,000",
      title: "Modern Apartment Complex",
      location: "Victoria Island, Lagos",
      beds: 3,
      baths: 3,
      area: "280",
      image:
        "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      price: "₦450,000,000",
      title: "Executive Waterfront Villa",
      location: "Banana Island, Lagos",
      beds: 6,
      baths: 7,
      area: "1,200",
      image:
        "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      price: "₦85,000,000",
      title: "Suburban 3 Bedroom Bungalow",
      location: "Ajah, Lagos",
      beds: 3,
      baths: 3,
      area: "220",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      price: "₦120,000,000",
      title: "Modern Semi-Detached House",
      location: "Lekki Phase 1, Lagos",
      beds: 4,
      baths: 4,
      area: "300",
      image:
        "https://images.unsplash.com/photo-1572120339554-d83506386927?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      price: "₦35,000,000",
      title: "Serviced Plot of Land",
      location: "Ibeju Lekki, Lagos",
      beds: 0,
      baths: 0,
      area: "600",
      image:
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="pt-20 bg-[#f0f7ff] font-sans">
      <section className="relative py-16 lg:py-20 overflow-hidden text-white">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-famous-blue/85 backdrop-blur-[1px]"></div>
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <span className="text-famous-light-blue font-bold tracking-[0.4em] uppercase text-[8px] mb-3 inline-block">
            The Portfolio
          </span>
          <h1 className="text-3xl md:text-5xl font-display font-bold tracking-tighter leading-none mb-4 uppercase">
            Discover Comfort
          </h1>
          <p className="text-white/50 text-[9px] max-w-xl mx-auto font-bold uppercase tracking-[0.3em]">
            Curated High-End Properties Across Nigeria.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
          {["All", "Terrace", "Detached", "Apartments", "Land"].map((cat) => (
            <button
              key={cat}
              className="px-5 py-2 rounded-full border border-blue-100 text-[8px] font-bold uppercase tracking-widest text-blue-400 hover:border-famous-light-blue hover:text-famous-light-blue transition-all bg-white shadow-sm"
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {allProperties.map((p, i) => (
            <PropertyCard key={i} {...p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
