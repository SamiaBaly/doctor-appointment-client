'use client';

import { useState } from 'react';
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { FaSquarePen } from 'react-icons/fa6';
import toast from 'react-hot-toast';


import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';

const EditModal = ({ booking }) => {
  const [open, setOpen] = useState(false);
    const router = useRouter();

  const { _id, time, reason, patientName, doctorName, date } = booking;

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());

    const { data: tokenData } = await authClient.token();
   console.log(tokenData);
      const res = await fetch(`http://localhost:6001/booking/${_id}`, {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${tokenData?.token}`,
        },
        body: JSON.stringify(updatedData), // ✅ FIXED
      });

    const data = await res.json();
    console.log(data);
    
    if (data.modifiedCount === 0) {
        toast.error('You are not added data');
    } else {
  
        toast.success('Update succefully');
        setOpen(false)
        router.push('/dashboard/booking');
      router.refresh();
    }
    
  };

  return (
    <Modal open={open} onOpenChange={setOpen}>
     
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="flex-1 border border-blue-600 text-blue-600 rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition"
      >
        <FaSquarePen size={16} />
        Edit
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />

            <Modal.Header>
              <Modal.Heading>Update Booking</Modal.Heading>
            </Modal.Header>

            <Modal.Body className="p-6">
              <Surface variant="default">
                <h2 className="text-gray-500">Book Appointment with</h2>

                <p className="text-2xl font-bold mb-5">{doctorName}</p>

                {/* FORM */}
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  {/* Patient Name */}
                  <TextField name="patientName" defaultValue={patientName}>
                    <Label>Patient Name</Label>
                    <Input />
                  </TextField>

                  {/* Date */}
                  <TextField name="date" defaultValue={date}>
                    <Label>Date</Label>
                    <Input type="date" />
                  </TextField>

                  {/* Time */}
                  <TextField name="time" defaultValue={time}>
                    <Label>Time</Label>
                    <Input type="time" />
                  </TextField>

                  {/* Reason */}
                  <TextField name="reason" defaultValue={reason}>
                    <Label>Reason</Label>
                    <Input />
                  </TextField>

                  <Button
                    type="submit"
                    slot={"close"}
                  
                    className="w-full bg-blue-600 text-white rounded-none"
                  >
                    Update
                  </Button>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditModal;
