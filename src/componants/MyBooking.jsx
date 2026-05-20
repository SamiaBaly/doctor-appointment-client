import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import MyBookingCard from '@/componants/MyBookingCard';

const MyBooking = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
   const { token } = await auth.api.getToken({
     headers: await headers(),
   });

  const user = session?.user;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: 'no-store',
    },
  );

  const bookings = await res.json();

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">My Bookings</h1>

        <p className="text-gray-500 mt-1">Manage your appointments easily</p>
      </div>

      {/* Empty state */}
      {bookings?.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-xl font-semibold text-gray-600">
            No Appointments Found
          </h2>
          <p className="text-gray-400 mt-2">
            You haven’t booked any doctor yet.
          </p>
        </div>
      ) : (
        /* Cards Grid */
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bookings?.map(booking => (
            <MyBookingCard key={booking._id} booking={booking} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooking;
