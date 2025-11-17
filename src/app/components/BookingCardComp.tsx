
export default function BookingCardComp() {
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-3xl border border-gray-200 shadow-sm">
        {/* Header Section */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900">Partially refundable</h3>
            <button className="text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                <path d="M12 16v-4M12 8h.01" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
          <p className="text-sm text-gray-600">Before Sat, Nov 29</p>
        </div>
  
        {/* Availability Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-5 h-5 bg-green-600 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="text-base font-medium text-gray-900">Your dates are available</span>
        </div>
  
        {/* Date and Travelers Section */}
        <div className="space-y-3 mb-8">
          {/* Dates Row */}
          <div className="grid grid-cols-2 gap-3">
            {/* Start Date */}
            <button className="flex items-center gap-3 p-4 border border-gray-300 rounded-xl hover:border-gray-400 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-600">Start date</div>
                <div className="text-base font-semibold text-gray-900">Nov 30</div>
              </div>
            </button>
  
            {/* End Date */}
            <button className="flex items-center gap-3 p-4 border border-gray-300 rounded-xl hover:border-gray-400 transition-colors">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                <path d="M16 2v4M8 2v4M3 10h18" strokeWidth="2"/>
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-600">End date</div>
                <div className="text-base font-semibold text-gray-900">Dec 1</div>
              </div>
            </button>
          </div>
  
          {/* Travelers */}
          <button className="flex items-center gap-3 w-full p-4 border border-gray-300 rounded-xl hover:border-gray-400 transition-colors">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="12" cy="7" r="4" strokeWidth="2"/>
            </svg>
            <div className="text-left">
              <div className="text-xs text-gray-600">Travelers</div>
              <div className="text-base font-semibold text-gray-900">2 travelers</div>
            </div>
          </button>
        </div>
  
        {/* Pricing Section */}
        <div className="mb-6">
          <div className="text-sm font-medium text-teal-700 mb-2">Last minute $110 off</div>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold text-gray-900">$283</span>
            <span className="text-lg text-gray-500 line-through">$394</span>
          </div>
          <div className="text-sm text-gray-600 mb-2">for 1 night</div>
          <div className="flex items-center gap-1 text-sm text-gray-700">
            <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>All fees included</span>
          </div>
        </div>
  
        {/* Price Details Link */}
        <a href="#" className="inline-block text-blue-600 hover:text-blue-700 font-medium text-sm underline mb-6">
          Price details
        </a>
  
        {/* Booking Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 rounded-xl transition-colors mb-3">
          Begin booking
        </button>
  
        {/* Footer Text */}
        <p className="text-center text-sm text-gray-600">You will not be charged yet</p>
      </div>
    );
  }