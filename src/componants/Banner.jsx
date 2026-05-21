import Image from 'next/image';
import bannerImg from '../assets/doctor.png';

const Banner = () => {
  return (
    <div className="container mx-auto px-4 py-10 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div>
          <p className="text-sky-500 font-semibold mb-3">
            Trusted Healthcare Service
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-800">
            Your Health Is Our
            <span className="text-sky-500"> First Priority</span>
          </h1>

          <p className="text-gray-500 text-lg mt-6 leading-8">
            Book appointments with experienced doctors, get online
            consultations, and manage your healthcare journey easily from
            anywhere.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white px-6 py-3 rounded-md font-semibold">
              Book Appointment
            </button>

            <button className="border border-sky-500 text-sky-500 hover:bg-sky-50 transition-all duration-300 px-6 py-3 rounded-md font-semibold">
              Learn More
            </button>
          </div>

          <div className="flex gap-8 mt-10">
            <div>
              <h2 className="text-2xl font-bold text-slate-800">500+</h2>
              <p className="text-gray-500">Expert Doctors</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">24/7</h2>
              <p className="text-gray-500">Emergency Support</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-800">10k+</h2>
              <p className="text-gray-500">Happy Patients</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-sky-100 p-6 rounded-full">
            <Image
              src={bannerImg}
              alt="doctor Image"
              height={500}
              width={500}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
