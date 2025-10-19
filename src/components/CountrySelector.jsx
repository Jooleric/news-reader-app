// src/components/CountrySelector.jsx
import React from "react";

const countries = [
  { code: "us", name: "United States" },
  { code: "ng", name: "Nigeria" },
  { code: "gb", name: "United Kingdom" },
  { code: "ca", name: "Canada" },
  { code: "au", name: "Australia" },
  { code: "za", name: "South Africa" },
  { code: "in", name: "India" },
  { code: "kr", name: "South Korea" },
  { code: "ke", name: "Kenya" },
  { code: "mx", name: "Mexico" },
  { code: "gh", name: "Ghana" },
  { code: "ly", name: "Libya" },
];

export default function CountrySelector({ selectedCountry, onCountryChange }) {
  return (
    <div className="flex justify-center mb-4 w-full">
      <select
        aria-label="Select country"
        value={selectedCountry}
        onChange={(e) => onCountryChange(e.target.value)}
        className="border border-gray-300 rounded-lg px-4 py-2 w-60 sm:w-72 bg-white text-gray-800 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      >
        {countries.map((country) => (
          <option key={country.code} value={country.code}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
}
