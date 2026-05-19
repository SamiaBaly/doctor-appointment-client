'use client';

import { AlertDialog, Button } from '@heroui/react';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const DeleteAlert=({ booking }) =>{
  const router = useRouter();

  const { _id, doctorName } = booking || {};

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:6001/booking/${_id}`, {
        method: 'DELETE',
      });

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success('Deleted successfully 🗑️');
        router.refresh(); // 🔥 best way in Next.js
      } else {
        toast.error('Delete failed ❌');
      }
    } catch (error) {
      toast.error('Something went wrong ⚠️');
    }
  };

  return (
    <AlertDialog>
      {/* TRIGGER BUTTON (ONLY OPEN DIALOG) */}
      <AlertDialog.Trigger>
        <Button className="flex-1 bg-red-100 text-black rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-red-600 hover:text-white transition">
          <Trash2 size={16} />
          Cancel
        </Button>
      </AlertDialog.Trigger>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />

            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete appointment permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>

            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{doctorName}</strong>{' '}
                appointment. This action cannot be undone.
              </p>
            </AlertDialog.Body>

            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>

              {/* REAL DELETE BUTTON */}
              <Button onPress={handleDelete} variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
export default DeleteAlert;
