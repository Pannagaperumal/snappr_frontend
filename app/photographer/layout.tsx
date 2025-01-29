"use client";

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Camera,
  Calendar,
  Users,
  Image as ImageIcon,
  BarChart3,
  Settings,
  LogOut,
} from 'lucide-react';

export default function PhotographerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  const handleNavigation = (path: string) => {
    if (isNavigating) return;
    setIsNavigating(true);
    router.push(path);
    setIsNavigating(false);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r p-4">
        <div className="flex items-center gap-2 mb-8">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">PhotoShare</span>
        </div>
        
        <nav className="space-y-2">
          <Button
            variant={isActive('/photographer') ? 'secondary' : 'ghost'}
            className="w-full justify-start gap-2"
            onClick={() => handleNavigation('/photographer')}
          >
            <BarChart3 className="h-5 w-5" /> Dashboard
          </Button>
          <Button
            variant={isActive('/photographer/events') ? 'secondary' : 'ghost'}
            className="w-full justify-start gap-2"
            onClick={() => handleNavigation('/photographer/events')}
          >
            <Calendar className="h-5 w-5" /> Events
          </Button>
          <Button
            variant={isActive('/photographer/photos') ? 'secondary' : 'ghost'}
            className="w-full justify-start gap-2"
            onClick={() => handleNavigation('/photographer/photos')}
          >
            <ImageIcon className="h-5 w-5" /> Photos
          </Button>
          <Button
            variant={isActive('/photographer/clients') ? 'secondary' : 'ghost'}
            className="w-full justify-start gap-2"
            onClick={() => handleNavigation('/photographer/clients')}
          >
            <Users className="h-5 w-5" /> Clients
          </Button>
          <Button
            variant={isActive('/photographer/settings') ? 'secondary' : 'ghost'}
            className="w-full justify-start gap-2"
            onClick={() => handleNavigation('/photographer/settings')}
          >
            <Settings className="h-5 w-5" /> Settings
          </Button>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2 text-muted-foreground"
            onClick={() => handleNavigation('/login')}
          >
            <LogOut className="h-5 w-5" /> Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
}