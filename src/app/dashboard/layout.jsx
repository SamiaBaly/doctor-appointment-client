import Link from 'next/link';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          <p className="text-gray-500 mt-1">
            Manage your account and appointments
          </p>

          {/* Navigation */}
          <div className="flex gap-8 mt-6">
            <Link
              href="/dashboard/booking"
              className="font-medium text-cyan-700 border-b-2 border-cyan-700 pb-2"
            >
              My Booking
            </Link>

            <Link
              href="/dashboard/profile"
              className="font-medium text-gray-500 hover:text-cyan-700 pb-2"
            >
              My Profile
            </Link>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="container mx-auto px-6 py-8">{children}</div>
    </div>
  );
}
