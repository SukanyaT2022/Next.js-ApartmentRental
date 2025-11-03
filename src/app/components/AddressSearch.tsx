"use client"
import React, { useState } from 'react'
import { Search, MapPin, Loader2 } from 'lucide-react';

export default function AddressSearch() {
  const [address, setAddress] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!address.trim()) {
      setError('Please enter an address');
      return;
    }

    setLoading(true);
    setError('');
    setResults([]);

    try {
      const apiKey = '68eba4cb24c1b723891719qibd61cf2'; // Replace with your actual API key
      const response = await fetch(
        `https://geocode.maps.co/search?q=${encodeURIComponent(address)}&api_key=${apiKey}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch geocode data');
      }

      const data = await response.json();
      
      if (data.length === 0) {
        setError('No results found for this address');
      } else {
        setResults(data);
      }
    } catch (err) {
      setError('Error searching address. Please check your API key and try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
  <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:w-[300px] relative">
    <input
      type="text"
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      onInput={handleSearch}
      onKeyPress={handleKeyPress}
      placeholder="Enter an address (e.g., 555 5th Ave New York NY 10017 US)"
      className=" lg:w-[300px] bg-white flex flex-col justify-center border-gray-300 border-1 rounded-2xl px-6 py-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer h-[60px]"
    />

    {results.length > 0 && (
      <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto z-50">
        <div className="p-3 border-b border-gray-200 bg-gray-50">
          <h2 className="text-sm font-semibold text-gray-700">
            Results ({results.length})
          </h2>
        </div>
        <div className="p-2 space-y-2">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                {result.display_name}
              </h3>
              <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                {/* <div>
                  <span className="font-medium">Latitude:</span> {result.lat}
                </div>
                <div>
                  <span className="font-medium">Longitude:</span> {result.lon}
                </div> */}
                {/* {result.type && (
                  <div>
                    <span className="font-medium">Type:</span> {result.type}
                  </div>
                )}
                {result.importance && (
                  <div>
                    <span className="font-medium">Importance:</span>{' '}
                    {(result.importance * 100).toFixed(1)}%
                  </div>
                )} */}
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {error && (
      <div className="absolute top-full left-0 right-0 mt-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg z-50">
        {error}
      </div>
    )}
  </div>
);
}