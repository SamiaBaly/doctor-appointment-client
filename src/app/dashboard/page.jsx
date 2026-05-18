'use client';

import { useState } from 'react';

const DashboardPage=()=> {
  const [tab, setTab] = useState('booking');

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
        <p className="text-gray-500 mt-1">
          Manage your bookings and profile in one place
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b border-gray-200 mb-6">
        <button
          onClick={() => setTab('booking')}
          className={`pb-3 font-medium transition ${
            tab === 'booking'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-blue-500'
          }`}
        >
          Booking
        </button>

        <button
          onClick={() => setTab('profile')}
          className={`pb-3 font-medium transition ${
            tab === 'profile'
              ? 'border-b-2 border-blue-600 text-blue-600'
              : 'text-gray-500 hover:text-blue-500'
          }`}
        >
          Profile
        </button>
      </div>

      {/* Content Box */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        {/* Booking Tab */}
        {tab === 'booking' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">My Bookings</h2>
            <p className="text-gray-500">
              এখানে তোমার সব appointment list show করবে।
            </p>
          </div>
        )}

        {/* Profile Tab */}
        {tab === 'profile' && (
          <div>
            <h2 className="text-xl font-semibold mb-2">My Profile</h2>
            <p className="text-gray-500">এখানে user profile details থাকবে।</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default DashboardPage;
