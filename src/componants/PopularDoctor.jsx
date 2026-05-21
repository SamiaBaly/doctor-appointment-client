import DoctorCard from './DoctorCard';
import { headers } from 'next/headers';

const PopularDoctor = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/populars`);
  const topDoctors = await res.json();

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800">Popular Doctors</h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Book appointments with our top-rated and experienced doctors.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {
          topDoctors.map(doctor => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))
        }
      </div>
    </div>
  );
};

export default PopularDoctor;
