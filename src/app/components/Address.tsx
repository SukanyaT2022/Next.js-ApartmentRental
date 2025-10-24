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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-800">Address Geocoder</h1>
          </div>

          <div className="mb-6">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Enter an address (e.g., 555 5th Ave New York NY 10017 US)"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <button
                onClick={handleSearch}
                disabled={loading}
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Searching
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    Search
                  </>
                )}
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {results.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Results ({results.length})
              </h2>
              {results.map((result, index) => (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {result.display_name}
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Latitude:</span> {result.lat}
                    </div>
                    <div>
                      <span className="font-medium">Longitude:</span> {result.lon}
                    </div>
                    {result.type && (
                      <div>
                        <span className="font-medium">Type:</span> {result.type}
                      </div>
                    )}
                    {result.importance && (
                      <div>
                        <span className="font-medium">Importance:</span>{' '}
                        {(result.importance * 100).toFixed(1)}%
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}