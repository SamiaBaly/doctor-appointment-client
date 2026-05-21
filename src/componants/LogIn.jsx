'use client';

import {
  Button,
  FieldError,
  Input,
  Label,
  TextField,
  Card,
  Separator,
} from '@heroui/react';

import Image from 'next/image';
import doctor4 from '../assets/doctor4.jpg';
import logo from '../assets/iconLogo.png';

import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  const router = useRouter();

  const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const res = await authClient.signIn.email({
      email: user?.email,
      password: user?.password,
    });
    console.log(res);

    if (res?.error) {
      toast.error(res.error.message || 'Login failed');
    } else {
      toast.success('Login successful');
      router.push('/');
    }
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
            <Image src={doctor4} alt="Doctor" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="p-8 space-y-4">
            <Image src={logo} height={90} width={90} alt="logo" />

            <h1 className="text-2xl font-bold">Login Account</h1>

            <form onSubmit={onSubmit} className="space-y-3">
              <TextField isRequired name="email" type="email">
                <Label>Email</Label>
                <Input placeholder="john@example.com" />
                <FieldError />
              </TextField>

              <TextField isRequired name="password" type="password">
                <Label>Password</Label>
                <Input placeholder="••••••••" />
                <FieldError />
              </TextField>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3"
              >
                Login
              </Button>
            </form>

            <div className="flex items-center gap-2 text-center">
              <Separator />
            </div>

            <Button
              onClick={handleGoogle}
              variant="bordered"
              className="w-full flex items-center gap-2"
            >
              <FcGoogle size={20} />
              Continue with Google
            </Button>

            <p className="text-center text-sm text-gray-500">
              Don’t have an account?{' '}
              <span
                onClick={() => router.push('/register')}
                className="text-blue-600 cursor-pointer hover:underline"
              >
                Register
              </span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
