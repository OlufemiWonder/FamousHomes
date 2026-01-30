import React from "react";
import {Link} from "react-router-dom";

const PropertyCard = ({image, price, title, location, beds, baths, area}) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100">
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-famous-light-blue text-white px-5 py-2 rounded-xl text-[10px] font-bold tracking-widest uppercase shadow-lg">
          Nigerian Homes
        </div>
      </div>
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-display font-bold text-famous-blue">
            {price}
          </h3>
        </div>
        <h4 className="text-xl font-display font-bold text-slate-800 mb-2 truncate">
          {title}
        </h4>
        <p className="text-slate-400 mb-6 flex items-center gap-2 text-sm">
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
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {location}
        </p>
        <div className="flex justify-between items-center pt-6 border-t border-slate-50 text-slate-500 font-medium text-[10px] uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span>{beds} Bed</span>
          </div>
          <div className="flex items-center gap-2">
            <span>{baths} Bath</span>
          </div>
          <div className="flex items-center gap-2 text-famous-light-blue font-bold">
            <span>{area} sqft</span>
          </div>
        </div>
        <Link
          to="/contact"
          className="mt-8 block w-full text-center bg-slate-50 text-famous-blue py-4 rounded-xl font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-famous-light-blue hover:text-white transition-all"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
