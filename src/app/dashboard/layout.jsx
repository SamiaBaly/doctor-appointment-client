'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="container mx-auto px-6 py-5">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          <p className="text-gray-500 mt-1">
            Manage your account and appointments
          </p>

          <div className="flex gap-8 mt-6">
            <Link
              href="/dashboard/booking"
              className={`font-medium pb-2 border-b-2 transition-all duration-200 ${
                pathname === '/dashboard/booking'
                  ? 'text-cyan-700 border-cyan-700'
                  : 'text-gray-500 border-transparent hover:text-cyan-700'
              }`}
            >
              My Booking
            </Link>

            <Link
              href="/dashboard/profile"
              className={`font-medium pb-2 border-b-2 transition-all duration-200 ${
                pathname === '/dashboard/profile'
                  ? 'text-cyan-700 border-cyan-700'
                  : 'text-gray-500 border-transparent hover:text-cyan-700'
              }`}
            >
              My Profile
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">{children}</div>
    </div>
  );
}
