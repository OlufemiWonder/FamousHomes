import React from "react";
import PropertyCard from "./PropertyCard";

const FeaturedProperties = () => {
  const properties = [
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
  ];

  return (
    <section id="properties" className="py-24 bg-slate-50 font-sans">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-famous-blue/40 font-bold tracking-[0.3em] uppercase text-[10px]">
              Nigerian Real Estate
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-famous-blue mt-4">
              Featured Listings
            </h2>
          </div>
          <button className="text-famous-blue font-bold px-8 py-4 rounded-xl border border-famous-blue/10 hover:bg-famous-light-blue hover:text-white transition-all text-[10px] uppercase tracking-[0.3em] flex items-center gap-3">
            View All Properties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {properties.map((p, i) => (
            <PropertyCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
