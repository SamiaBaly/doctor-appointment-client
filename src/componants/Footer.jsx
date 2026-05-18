import Image from 'next/image';
import Link from 'next/link';
import logo2 from '../assets/iconLogo.png';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Logo & Description */}
          <div>
            <Image
              src={logo2}
              alt="logo"
              width={120}
              height={120}
              className="mb-4"
            />

            <p className="text-gray-400 leading-7">
              Providing trusted healthcare services with experienced doctors and
              modern medical technology for better patient care.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <Link
                href="/"
                className="bg-slate-800 hover:bg-sky-500 transition-all duration-300 p-3 rounded-full"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="/"
                className="bg-slate-800 hover:bg-sky-500 transition-all duration-300 p-3 rounded-full"
              >
                <FaInstagram />
              </Link>

              <Link
                href="/"
                className="bg-slate-800 hover:bg-sky-500 transition-all duration-300 p-3 rounded-full"
              >
                <FaTwitter />
              </Link>

              <Link
                href="/"
                className="bg-slate-800 hover:bg-sky-500 transition-all duration-300 p-3 rounded-full"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-5">Quick Links</h2>

            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="/" className="hover:text-sky-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/all-appointments" className="hover:text-sky-400">
                  Appointments
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="hover:text-sky-400">
                  Dashboard
                </Link>
              </li>

              <li>
                <Link href="/" className="hover:text-sky-400">
                  Doctors
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold mb-5">Contact Info</h2>

            <div className="space-y-4 text-gray-400">
              <p>📍 Barishal, Bangladesh</p>

              <p>📞 +880 1234-567890</p>

              <p>✉️ support@docapp.com</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-gray-500">
          <p>© 2026 DocApp. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
