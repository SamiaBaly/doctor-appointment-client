import Image from "next/image";
import logo from "../assets/logo.png"
import Link from "next/link";
import { Button } from "@heroui/react";


const Navbar = () => {
  return (
    <div className="shadow-md">
      <div className="flex justify-between items-center p-4">
        <div>
          <Image src={logo} height={150} width={150} alt="logo"></Image>
        </div>
        <div>
          <ul className="flex justify-between items-center gap-4 text-sky-900 font-semibold">
            <li>
              <Link href={'/'}>Home</Link>
            </li>
            <li>
              <Link href={'/all-appointments'}>All appointments</Link>
            </li>
            <li>
              <Link href={'/dashboard'}>Dashboard</Link>
            </li>
          </ul>
        </div>
        <div>
          <Button variant="outline " className={'rounded-none border'}>
            Login
          </Button>
          <Button className={'rounded-none bg-sky-500 ml-2'}>Register</Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar