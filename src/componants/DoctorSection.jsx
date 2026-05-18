import Image from 'next/image';
import doctorImg2 from '../assets/doctor2.png';

const DoctorSection = () => {
  return (
    <div className="bg-sky-50 py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        <div className="flex justify-center">
          <Image
            src={doctorImg2}
            alt="doctor"
            width={500}
            height={500}
            className="rounded-2xl"
          />
        </div>

       
        <div>
          <p className="text-sky-500 font-semibold mb-3">
            About Our Healthcare
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight">
            Trusted Medical Treatment
            <span className="text-sky-500"> For Everyone</span>
          </h2>

          <p className="text-gray-500 mt-6 leading-8">
            We are dedicated to providing world-class healthcare services with
            professional doctors, advanced technology, and patient-centered
            care.
          </p>

          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">✔</span>
              <p className="text-gray-700 font-medium">
                Experienced & Certified Doctors
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">✔</span>
              <p className="text-gray-700 font-medium">
                Easy Online Appointment Booking
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500 text-2xl">✔</span>
              <p className="text-gray-700 font-medium">
                24/7 Emergency Support
              </p>
            </div>
          </div>

          <button className="mt-8 bg-sky-500 hover:bg-sky-600 transition-all duration-300 text-white px-6 py-3 rounded-md font-semibold">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default DoctorSection;
