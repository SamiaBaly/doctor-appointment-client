'use client';

import { authClient } from '@/lib/auth-client';
import { AlertDialog, Button } from '@heroui/react';
import { Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const DeleteAlert = ({ booking }) => {
  const router = useRouter();

  const { _id, doctorName } = booking || {};

  const handleDelete = async () => {
    try {
      const { data: tokenData } = await authClient.token();
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${_id}`,
        {
          method: 'DELETE',
          headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${tokenData?.token}`,
          },
        },
      );

      const data = await res.json();

      if (data.deletedCount > 0) {
        toast.success('Deleted successfully ');
        router.refresh(); // 🔥 best way in Next.js
      } else {
        toast.error('Delete failed ');
      }
    } catch (error) {
      toast.error('Something went wrong ⚠️');
    }
  };

  return (
    <AlertDialog>
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

              <Button onPress={handleDelete} variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};
export default DeleteAlert;
