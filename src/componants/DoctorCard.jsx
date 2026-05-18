import { Star, MapPin, Briefcase } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const DoctorCard = ({ doctor }) => {
  const {
    _id,
    name,
    rating,
    specialty,
    hospital,
    fee,
    experience,
    description,
    availability,
    image,
  } = doctor;

  return (
    <div className="bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden w-full max-w-sm">
      <div className="relative overflow-hidden group rounded-2xl p-2">
        <Image
          src={image}
          alt={name}
          width={450}
          height={400}
          className="w-full rounded-none aspect-square object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1  shadow-sm text-sm font-medium text-gray-800">
          ⭐ {rating.toFixed(1)}
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-blue-600 font-medium">{specialty}</p>

        <div className="flex items-center gap-1 text-sm text-gray-500 mt-2">
          <MapPin size={14} />
          <span>{hospital}</span>
        </div>

        <div className="flex items-center justify-between mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Briefcase size={14} />
            <span>{experience} yrs exp</span>
          </div>

          <span className="font-bold text-gray-800">${fee}</span>
        </div>
        <span
          className={`inline-block mt-2 text-xs px-3 py-1 rounded-full font-medium ${
            availability === 'Available'
              ? 'bg-green-100 text-green-600'
              : 'bg-red-100 text-red-600'
          }`}
        >
          {availability}
        </span>

        <p className="text-sm text-gray-500 mt-3 line-clamp-2">{description}</p>

        <Link href={`/all-appointments/${_id}`}>
          <button className="mt-5 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2.5  font-medium transition rounded-none">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
