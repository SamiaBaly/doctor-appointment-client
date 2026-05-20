'use client';

import DoctorCard from '@/componants/DoctorCard';
import { authClient } from '@/lib/auth-client';
import { useEffect, useState } from 'react';

const AllApointments = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      const { data: tokenData } = await authClient.token();
      const res = await fetch('http://localhost:6001/appointments', {
        headers: {
          authorization: `Bearer ${tokenData?.token}`,
        },
      });
      const data = await res.json();

      setDoctors(data);
      setLoading(false);
    };

    fetchDoctors();
  }, []);

 const filteredDoctors = doctors?.filter(doctor =>
   doctor?.name?.toLowerCase().includes((search || '').toLowerCase()),
 );

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Title */}
      <h1 className="text-3xl font-bold text-center mb-6">All Appointments</h1>

      {/* Search */}
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search doctor by name..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 🔥 Loading Spinner */}
      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 mt-3">Loading doctors...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map(doctor => (
              <DoctorCard key={doctor._id} doctor={doctor} />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No doctor found
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default AllApointments;
