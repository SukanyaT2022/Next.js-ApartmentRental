import { useState } from 'react';

export default function DateRangePicker() {
  const [currentMonthIndex, setCurrentMonthIndex] = useState(10); // Start at November (index 10)
  const [startDate, setStartDate] = useState({ month: 10, day: 25 });
  const [endDate, setEndDate] = useState({ month: 11, day: 10 });
  const [selectedFlexibility, setSelectedFlexibility] = useState('exact');

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const getDaysInMonth = (month, year = 2025) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month, year = 2025) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = (monthIndex) => {
    const daysInMonth = getDaysInMonth(monthIndex);
    const firstDay = getFirstDayOfMonth(monthIndex);
    const days = [];

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push({ day: null });
    }

    // Add all days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i });
    }

    return days;
  };

  const isInRange = (day, monthIndex) => {
    if (!day) return false;
    
    // If same month as start and end
    if (startDate.month === endDate.month) {
      return monthIndex === startDate.month && day >= startDate.day && day <= endDate.day;
    }
    
    // If in start month
    if (monthIndex === startDate.month) {
      return day >= startDate.day;
    }
    
    // If in end month
    if (monthIndex === endDate.month) {
      return day <= endDate.day;
    }
    
    // If between start and end months
    if (monthIndex > startDate.month && monthIndex < endDate.month) {
      return true;
    }
    
    return false;
  };

  const isSelected = (day, monthIndex) => {
    if (!day) return false;
    return (
      (monthIndex === startDate.month && day === startDate.day) ||
      (monthIndex === endDate.month && day === endDate.day)
    );
  };

  const getDayClasses = (day, monthIndex) => {
    if (!day) return 'invisible';
    
    const baseClasses = 'w-12 h-12 flex items-center justify-center rounded-full text-base font-medium transition-colors cursor-pointer';
    
    if (isSelected(day, monthIndex)) {
      return `${baseClasses} bg-blue-600 text-white hover:bg-blue-700`;
    }
    
    if (isInRange(day, monthIndex)) {
      return `${baseClasses} bg-blue-50 text-gray-900 hover:bg-blue-100`;
    }
    
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();
    
    // Disable past dates
    if (monthIndex < currentMonth || (monthIndex === currentMonth && day < currentDay)) {
      return `${baseClasses} text-gray-300 cursor-not-allowed`;
    }
    
    return `${baseClasses} text-gray-900 hover:bg-gray-100`;
  };

  const goToPreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonthIndex < 11) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  const month1Index = currentMonthIndex;
  const month2Index = currentMonthIndex + 1 <= 11 ? currentMonthIndex + 1 : currentMonthIndex;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white">
      {/* Header with date range */}
      <div className="flex items-center gap-4 mb-8 border-b pb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">Tue, Nov 25</span>
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-2xl font-bold text-gray-900">Wed, Dec 10</span>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-2 gap-12 mb-8">
        {/* First Month */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={goToPreviousMonth}
              disabled={currentMonthIndex === 0}
              className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <h3 className="text-xl font-bold text-gray-900">{monthNames[month1Index]} 2025</h3>
            <div className="w-9"></div>
          </div>

          {/* Days of week */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {daysOfWeek.map((day, idx) => (
              <div key={idx} className="w-12 h-8 flex items-center justify-center text-sm font-medium text-gray-600">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">
            {generateCalendarDays(month1Index).map((item, idx) => (
              <div key={idx} className={getDayClasses(item.day, month1Index)}>
                {item.day}
              </div>
            ))}
          </div>
        </div>

        {/* Second Month */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="w-9"></div>
            <h3 className="text-xl font-bold text-gray-900">{monthNames[month2Index]} 2025</h3>
            <button 
              onClick={goToNextMonth}
              disabled={currentMonthIndex >= 10}
              className="p-2 hover:bg-gray-100 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Days of week */}
          <div className="grid grid-cols-7 gap-2 mb-2">
            {daysOfWeek.map((day, idx) => (
              <div key={idx} className="w-12 h-8 flex items-center justify-center text-sm font-medium text-gray-600">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">
            {generateCalendarDays(month2Index).map((item, idx) => (
              <div key={idx} className={getDayClasses(item.day, month2Index)}>
                {item.day}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Flexibility options */}
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setSelectedFlexibility('exact')}
          className={`px-6 py-2.5 rounded-full border-2 font-medium transition-colors ${
            selectedFlexibility === 'exact'
              ? 'border-gray-900 bg-white text-gray-900'
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          Exact dates
        </button>
        <button
          onClick={() => setSelectedFlexibility('1day')}
          className={`px-6 py-2.5 rounded-full border-2 font-medium transition-colors ${
            selectedFlexibility === '1day'
              ? 'border-gray-900 bg-white text-gray-900'
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          ± 1 day
        </button>
        <button
          onClick={() => setSelectedFlexibility('2days')}
          className={`px-6 py-2.5 rounded-full border-2 font-medium transition-colors ${
            selectedFlexibility === '2days'
              ? 'border-gray-900 bg-white text-gray-900'
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          ± 2 days
        </button>
        <button
          onClick={() => setSelectedFlexibility('3days')}
          className={`px-6 py-2.5 rounded-full border-2 font-medium transition-colors ${
            selectedFlexibility === '3days'
              ? 'border-gray-900 bg-white text-gray-900'
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          ± 3 days
        </button>
        <button
          onClick={() => setSelectedFlexibility('7days')}
          className={`px-6 py-2.5 rounded-full border-2 font-medium transition-colors ${
            selectedFlexibility === '7days'
              ? 'border-gray-900 bg-white text-gray-900'
              : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
          }`}
        >
          ± 7 days
        </button>
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-4">
        <button className="px-6 py-3 text-blue-600 font-semibold hover:bg-blue-50 rounded-lg transition-colors">
          Clear
        </button>
        <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors">
          Done
        </button>
      </div>
    </div>
  );
}