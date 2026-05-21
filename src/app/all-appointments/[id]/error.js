"use client";

import Link from "next/link";
import { AlertTriangle, ArrowLeft} from "lucide-react";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 px-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl border border-gray-100 text-center">
        
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <AlertTriangle className="h-12 w-12 text-red-500" />
        </div>

        {/* Title */}
        <h1 className="mt-6 text-3xl font-bold text-gray-800">
          Something went wrong
        </h1>

        {/* Description */}
        <p className="mt-3 text-gray-500 leading-relaxed">
          We couldnt load the appointment details right now.
          Please try again or go back to the previous page.
        </p>

        {/* Error Message */}
        {error?.message && (
          <div className="mt-5 rounded-xl bg-red-50 border border-red-100 p-4 text-sm text-red-500">
            {error.message}
          </div>
        )}

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          
          

          <Link
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-5 py-3 text-gray-700 font-medium transition hover:bg-gray-100"
          >
            <ArrowLeft size={18} />
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;