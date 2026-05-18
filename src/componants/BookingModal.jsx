'use client';

import { authClient } from '@/lib/auth-client';
import { Envelope } from '@gravity-ui/icons';
import { Button, Input, Modal } from '@heroui/react';

const BookingModal = ({ doctor }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSubmit =async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = {
      userEmail: user?.email,
      doctorName: doctor?.name,
      patientName: form.get('patientName'),
      gender: form.get('gender'),
      phone: form.get('phone'),
      date: form.get('date'),
      time: form.get('time'),
      reason: form.get('reason'),
    };

    console.log(data);

    const res = await fetch('http://localhost:6001/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      
      body: JSON.stringify(data),
    });
    const booking = await res.json()
  console.log(booking);
  };

  return (
    <Modal>
      {/* Trigger Button */}
      <Modal.Trigger className="w-full">
        <Button className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 font-medium text-lg transition rounded-none">
          Book Appointment
        </Button>
      </Modal.Trigger>

      {/* Modal */}
      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-2xl rounded-2xl bg-white">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="pb-2">
              <div className="flex items-start gap-3">
                <div>
                  <Modal.Heading className="text-2xl font-bold text-gray-800">
                    Book Appointment
                  </Modal.Heading>

                  <p className="text-sm text-gray-500 mt-1">
                    with Dr. {doctor?.name}
                  </p>
                </div>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* User Email */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">
                    User Email
                  </label>

                  <Input
                    value={user?.email || ''}
                    readOnly
                    classNames={{
                      inputWrapper:
                        'bg-slate-100 border border-slate-200 shadow-none',
                    }}
                  />
                </div>

                {/* Doctor Name */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">
                    Doctor Name
                  </label>

                  <Input
                    value={doctor?.name || ''}
                    readOnly
                    classNames={{
                      inputWrapper:
                        'bg-slate-100 border border-slate-200 shadow-none',
                    }}
                  />
                </div>

                {/* Patient Name */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">
                    Patient Name *
                  </label>

                  <Input
                    name="patientName"
                    placeholder="Enter patient name"
                    classNames={{
                      inputWrapper: 'border border-slate-200 shadow-none',
                    }}
                  />
                </div>

                {/* Gender + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1 block">
                      Gender *
                    </label>

                    <select
                      name="gender"
                      className="w-full h-12 px-3 rounded-xl border border-slate-200 outline-none focus:border-cyan-500"
                    >
                      <option>Female</option>
                      <option>Male</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1 block">
                      Phone *
                    </label>

                    <Input
                      name="phone"
                      placeholder="017XXXXXXXX"
                      classNames={{
                        inputWrapper:
                          'border border-slate-200 shadow-none focus-within:border-cyan-500',
                      }}
                    />
                  </div>
                </div>

                {/* Date + Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1 block">
                      Date *
                    </label>

                    <Input
                      name="date"
                      type="date"
                      classNames={{
                        inputWrapper: 'border border-slate-200 shadow-none',
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-gray-700 mb-1 block">
                      Time *
                    </label>

                    <Input
                      name="time"
                      type="time"
                      classNames={{
                        inputWrapper: 'border border-slate-200 shadow-none',
                      }}
                    />
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1 block">
                    Reason (optional)
                  </label>

                  <textarea
                    name="reason"
                    rows={3}
                    placeholder="Brief reason for visit"
                    className="w-full rounded-xl border border-slate-200 p-3 outline-none focus:border-cyan-500"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-8 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3 font-medium text-lg transition rounded-none"
                >
                  Confirm Booking
                </button>
              </form>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default BookingModal;
