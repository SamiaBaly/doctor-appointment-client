'use client';

import Image from 'next/image';
import logo from '../assets/logo.png';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { authClient } from '@/lib/auth-client';


const Navbar = () => {
  
    const {
      data: session,
     
  } = authClient.useSession(); 
  
  const user = session?.user
   

  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  

  const handleLogout = async () => {
    await authClient.signOut();
  
  };
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Appointments', path: '/all-appointments' },
    { name: 'Dashboard', path: '/dashboard' },
  ];

  return (
    <div className="shadow-md bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* LOGO */}
          <Image
            src={logo}
            height={150}
            width={150}
            alt="logo"
            className="w-[120px] md:w-[150px]"
          />

          {/* DESKTOP NAV */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-sky-900 font-semibold">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`pb-1 transition ${
                      pathname === link.path
                        ? 'text-sky-500 border-b-2 border-sky-500'
                        : 'hover:text-sky-500'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AUTH BUTTONS (DESKTOP) */}
          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <>
                <h2 className="text-xl font-bold mr-2">{user?.name}</h2>
                <Image
                  src={user?.image || '/avatar.png'}
                  width={50}
                  height={20}
                  className="rounded-full h-12 w-12"
                  alt="user"
                />

                <Button
                  onClick={handleLogout}
                  className="rounded-none bg-red-500 text-white ml-3"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button
                    variant="bordered"
                    className="rounded-none border-sky-500 text-sky-500"
                  >
                    Login
                  </Button>
                </Link>

                <Link href="/register">
                  <Button className="rounded-none bg-sky-500 text-white">
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* MOBILE MENU */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <ul className="flex flex-col gap-4 text-sky-900 font-semibold">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block p-2 rounded-md ${
                      pathname === link.path
                        ? 'bg-sky-500 text-white'
                        : 'hover:bg-sky-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-col gap-3">
              {user ? (
                <Button
                  onClick={handleLogout}
                  className="rounded-none bg-red-500 text-white"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Link href="/login">
                    <Button
                      variant="bordered"
                      className="rounded-none border-sky-500 text-sky-500 w-full"
                    >
                      Login
                    </Button>
                  </Link>

                  <Link href="/register">
                    <Button className="rounded-none bg-sky-500 text-white w-full">
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
