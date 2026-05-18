const HealthcareServices = () => {
  const services = [
    {
      id: 1,
      title: 'Qualified Doctors',
      description:
        'Get treatment from experienced and certified medical specialists.',
      icon: '👨‍⚕️',
    },
    {
      id: 2,
      title: 'Online Appointment',
      description: 'Book doctor appointments anytime from your home easily.',
      icon: '📅',
    },
    {
      id: 3,
      title: '24/7 Support',
      description: 'Our support team is always available for emergency help.',
      icon: '🚑',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-slate-800">
          Our Medical Services
        </h2>

        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          We provide trusted healthcare services with modern technology and
          experienced doctors for better patient care.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map(service => (
          <div
            key={service.id}
            className="bg-white shadow-md rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300"
          >
            <div className="text-5xl mb-5">{service.icon}</div>

            <h3 className="text-2xl font-bold text-slate-800 mb-3">
              {service.title}
            </h3>

            <p className="text-gray-500 leading-7">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthcareServices;
