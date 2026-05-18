
import BookingModal from '@/componants/BookingModal';
import { Star, MapPin, Briefcase, Building2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:6001/appointments/${id}`, {
    cache: 'no-store',
  });

  const doctor = await res.json();

  if (!doctor) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Doctor not found
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="relative rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={doctor.image}
            alt={doctor.name}
            width={600}
            height={600}
            className="w-full h-[500px] object-cover"
          />

          <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full flex items-center gap-1 text-sm font-medium">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            {doctor.rating ? doctor.rating.toFixed(1) : 'N/A'} / 5
          </div>
        </div>

        <div>
          <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            {doctor.specialty}
          </span>

          <h1 className="text-4xl font-bold text-slate-800 mt-3">
            {doctor.name}
          </h1>

          <p className="text-gray-500 mt-3 leading-relaxed">
            {doctor.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="p-4 border rounded-xl">
              <Briefcase className="text-blue-600 mb-1" />
              <p className="text-sm text-gray-500">Experience</p>
              <p className="font-semibold">{doctor.experience} Years</p>
            </div>

            <div className="p-4 border rounded-xl">
              <Building2 className="text-blue-600 mb-1" />
              <p className="text-sm text-gray-500">Hospital</p>
              <p className="font-semibold">{doctor.hospital}</p>
            </div>

            <div className="p-4 border rounded-xl">
              <MapPin className="text-blue-600 mb-1" />
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold">Dhaka, Bangladesh</p>
            </div>

            <div className="p-4 border rounded-xl">
              <p className="text-sm text-gray-500">Fee</p>
              <p className="font-semibold text-lg text-slate-800">
                ${doctor.fee}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <span
              className={`inline-block text-xs px-3 py-1 rounded-full font-medium ${
                doctor.availability === 'Available'
                  ? 'bg-green-100 text-green-600'
                  : 'bg-red-100 text-red-600'
              }`}
            >
              {doctor.availability}
            </span>
          </div>

          <BookingModal doctor={doctor} />
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailsPage;
