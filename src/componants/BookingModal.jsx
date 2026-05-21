'use client';

import React, { useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { Button, Input } from '@heroui/react';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

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
        toast.success('Booked Successfully');
        e.target.reset();
        setOpen(false);
        return;
      }

      toast.error('Booking failed ');
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong ');
    }
  };

  return (
    <div>
      <Button
        onClick={() => setOpen(true)}
        className="w-full mt-6 bg-blue-600 text-white rounded-none"
      >
        Book Appointment
      </Button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white w-full max-w-2xl rounded-2xl p-6 relative"
            >
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
                <div className="flex md:justify-between items-center flex-col space-y-1">
                  <Input
                    value={user?.email || ''}
                    readOnly
                    label="User Email"
                    className={'w-full'}
                  />

                  <Input
                    value={doctor?.name || ''}
                    readOnly
                    label="Doctor Name"
                    className={'w-full font-bold text-md mx-2'}
                  />
                </div>

                <Input
                  name="patientName"
                  placeholder="Patient Name"
                  label="Patient Name"
                  className={'w-full'}
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

                <div className="flex flex-col space-y-1 md:justify-between">
                  <Input
                    name="phone"
                    placeholder="Phone Number"
                    label="Phone"
                    className={'w-full mx-2'}
                  />

                  <Input
                    name="date"
                    type="date"
                    label="Date"
                    className={'w-full mx-2'}
                  />

                  <Input
                    name="time"
                    type="time"
                    label="Time"
                    className={'w-full mx-2'}
                  />
                </div>

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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BookingModal;
