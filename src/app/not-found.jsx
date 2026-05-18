import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-50 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-sky-500">404</h1>

        <h2 className="text-3xl font-bold mt-4">Page Not Found</h2>

        <p className="text-gray-500 mt-3">Sorry, this page does not exist.</p>

        <Link
          href="/"
          className="inline-block mt-6 bg-sky-500 text-white px-6 py-3 rounded-md"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
}
