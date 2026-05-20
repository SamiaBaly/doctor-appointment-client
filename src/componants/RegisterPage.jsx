'use client';

import {
  Button,
  Description,
  FieldError,
  Input,
  Label,
  TextField,
  Card,
  Separator,
} from '@heroui/react';

import Image from 'next/image';
import doctor2 from '../assets/doctor2.png';
import logo from '../assets/iconLogo.png';

import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const RegisterPage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const res = await authClient.signUp.email({
      name: user?.name,
      email: user?.email,
      password: user?.password,
      image: user?.photo, // FIXED
      callbackURL: '/login',
    });

    if (res?.error) {
      toast.error(res.error.message || 'Signup failed');
      return;
    }

    toast.success('Account created successfully');
    router.push('/login'); // FIXED
  };

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: 'google',
      });
    } catch (err) {
      toast.error('Google login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-100 px-4">
      <Card className="w-full max-w-4xl shadow-xl rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* IMAGE */}
          <div className="relative hidden md:block">
            <Image src={doctor2} alt="Doctor" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* FORM */}
          <div className="p-8 space-y-4">
            <Image src={logo} height={80} width={80} alt="logo" />

            <h1 className="text-2xl font-bold">Register Account</h1>
            <p className="text-gray-500 text-sm">
              Register to book doctor appointments
            </p>

            {/* GOOGLE */}
            <Button
              onClick={handleGoogle}
              variant="bordered"
              className="w-full"
            >
              <FcGoogle />
              Continue with Google
            </Button>

            {/* OR */}
            <div className="flex items-center gap-2">
              <Separator />
              <p className="text-xs text-gray-400">OR</p>
              <Separator />
            </div>

            <form onSubmit={onSubmit} className="space-y-3">
              {/* NAME */}
              <TextField isRequired name="name">
                <Label>Full Name</Label>
                <Input placeholder="John Doe" />
                <FieldError />
              </TextField>

              {/* EMAIL */}
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>

              {/* PHOTO */}
              <TextField name="photo">
                <Label>Photo URL (optional)</Label>
                <Input placeholder="https://image-link.com" />
                <FieldError />
              </TextField>

              {/* PASSWORD */}
              <TextField isRequired name="password" type="password">
                <Label>Password</Label>
                <Input placeholder="••••••••" />
                <FieldError />
              </TextField>

              {/* BUTTON */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3"
              >
                Register
              </Button>
            </form>

            {/* LOGIN LINK */}
            <p className="text-center text-sm text-gray-500">
              Already have an account?{' '}
              <span
                onClick={() => router.push('/login')}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Log in
              </span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RegisterPage;
