'use client';

import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Button, Input } from '@heroui/react';
import toast from 'react-hot-toast';

const BookingModal = ({ doctor }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const [open, setOpen] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const data = {
      userId: user?.id,
      userEmail: user?.email,
      doctorName: doctor?.name,
      patientName: form.get('patientName'),
      gender: form.get('gender'),
      phone: form.get('phone'),
      date: form.get('date'),
      time: form.get('time'),
      reason: form.get('reason'),
    };

    if (
      !data.patientName ||
      !data.gender ||
      !data.phone ||
      !data.date ||
      !data.time ||
      !data.reason
    ) {
      toast.error('Please fill all fields ❗');
      return;
    }

    try {
      const { data: tokenData } = await authClient.token();
      console.log(tokenData);
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result?.acknowledged) {
        toast.success('Booked Successfully 🎉');

        e.target.reset();

        setOpen(false);

        return;
      }

      toast.error('Booking failed ❌');
    } catch (error) {
      console.log(error);

      toast.error('Something went wrong ⚠️');
    }
  };

  return (
    <div>
      {/* Open Button */}
      <Button
        onClick={() => setOpen(true)}
        className="w-full mt-6 bg-blue-600 text-white rounded-none"
      >
        Book Appointment
      </Button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-full max-w-2xl rounded-2xl p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-2xl"
            >
              ×
            </button>

            <h2 className="text-2xl font-bold mb-1">Book Appointment</h2>

            <p className="text-gray-500 mb-5">with {doctor?.name}</p>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input value={user?.email || ''} readOnly label="User Email" />

              <Input value={doctor?.name || ''} readOnly label="Doctor Name" />

              <Input
                name="patientName"
                placeholder="Patient Name"
                label="Patient Name"
              />

              <select
                name="gender"
                defaultValue=""
                className="w-full border rounded-xl h-12 px-3"
              >
                <option value="" disabled>
                  Select Gender
                </option>

                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
              </select>

              <Input name="phone" placeholder="Phone Number" label="Phone" />

              <Input name="date" type="date" label="Date" />

              <Input name="time" type="time" label="Time" />

              <textarea
                name="reason"
                rows={4}
                placeholder="Enter reason"
                className="w-full border rounded-xl p-3"
              />

              <Button type="submit" className="w-full bg-blue-600 text-white">
                Confirm Booking
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingModal;
