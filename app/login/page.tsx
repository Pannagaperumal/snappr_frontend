"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Camera, User, Lock } from 'lucide-react';

export default function LoginPage() {
  const [isPhotographer, setIsPhotographer] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    router.push(isPhotographer ? '/photographer' : '/user');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
            <p className="text-muted-foreground mt-2 text-center">
              Sign in to access your account
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
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              Sign In
            </Button>
          </form>

          <div className="mt-6 text-center text-sm">
            <a href="#" className="text-primary hover:underline">
              Forgot your password?
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
}