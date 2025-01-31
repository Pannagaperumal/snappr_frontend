"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Camera, User, Lock, Mail, Building2, Phone } from 'lucide-react';

export default function SignUpPage() {
  const [isPhotographer, setIsPhotographer] = useState(false);
  const router = useRouter();

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = {
        username: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
        ...(isPhotographer && {
            business: formData.get('business') as string,
            phone: formData.get('phone') as string,
        }),
    };

    try {
        const response = await fetch('http://127.0.0.1:8000/users/signup/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            router.push(isPhotographer ? '/photographer' : '/user');
        } else {
            // Handle error response
            console.error('Signup failed');
        }
    } catch (error) {
        console.error('An error occurred during signup', error);
    }
};

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-center">Create Account</h1>
            <p className="text-muted-foreground mt-2 text-center">
              Join PhotoShare and start sharing moments
            </p>
          </div>

          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="flex items-center space-x-2">
              <User className={`w-5 h-5 ${!isPhotographer ? 'text-primary' : 'text-muted-foreground'}`} />
              <Label htmlFor="role-toggle" className="cursor-pointer">User</Label>
            </div>
            <Switch
              id="role-toggle"
              checked={isPhotographer}
              onCheckedChange={setIsPhotographer}
              className="data-[state=checked]:bg-primary"
            />
            <div className="flex items-center space-x-2">
              <Camera className={`w-5 h-5 ${isPhotographer ? 'text-primary' : 'text-muted-foreground'}`} />
              <Label htmlFor="role-toggle" className="cursor-pointer">Photographer</Label>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">User Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Enter your full name"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full"
              />
            </div>
            {isPhotographer && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="business">Business Name</Label>
                  <Input
                    id="business"
                    type="text"
                    placeholder="Enter your business name"
                    required
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="w-full"
                  />
                </div>
              </>
            )}
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link href="/login" className="text-primary hover:underline">
              Sign In
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}