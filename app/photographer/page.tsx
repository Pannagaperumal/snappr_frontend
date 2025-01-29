"use client";

import { useState } from 'react';
import { UploadZone } from '@/components/shared/UploadZone';
import { PhotoGrid } from '@/components/shared/PhotoGrid';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Camera,
  Calendar,
  Users,
  Image as ImageIcon,
  BarChart3,
  Settings,
  LogOut,
  Plus,
  Download,
  Filter,
} from 'lucide-react';
import { Photo } from '../types';

interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  photoCount: number;
  status: 'active' | 'completed';
}

export default function PhotographerDashboard() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>([]);

  // Mock data
  const events: Event[] = [
    {
      id: '1',
      name: 'Wedding Ceremony',
      date: '2024-03-20',
      location: 'Grand Plaza',
      photoCount: 450,
      status: 'active',
    },
    {
      id: '2',
      name: 'Corporate Event',
      date: '2024-03-15',
      location: 'Business Center',
      photoCount: 200,
      status: 'completed',
    },
  ];

  const stats = {
    totalPhotos: 2450,
    totalEvents: 12,
    activeEvents: 3,
    totalDownloads: 1850,
  };

  const handleUpload = async (files: File[]) => {
    setUploading(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);

    setTimeout(() => {
      const newPhotos: Photo[] = files.map((file) => ({
        id: Math.random().toString(),
        url: URL.createObjectURL(file),
        uploadedBy: 'photographer-1',
        faces: [],
        createdAt: new Date(),
      }));

      setPhotos((prev) => [...newPhotos, ...prev]);
      setUploading(false);
      clearInterval(interval);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-card border-r p-4">
        <div className="flex items-center gap-2 mb-8">
          <Camera className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">PhotoShare</span>
        </div>
        
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start gap-2">
            <BarChart3 className="h-5 w-5" /> Dashboard
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Calendar className="h-5 w-5" /> Events
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <ImageIcon className="h-5 w-5" /> Photos
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Users className="h-5 w-5" /> Clients
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-2">
            <Settings className="h-5 w-5" /> Settings
          </Button>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <Button variant="ghost" className="w-full justify-start gap-2 text-muted-foreground">
            <LogOut className="h-5 w-5" /> Sign Out
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <ImageIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Photos</p>
                  <p className="text-2xl font-bold">{stats.totalPhotos}</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Events</p>
                  <p className="text-2xl font-bold">{stats.totalEvents}</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Active Events</p>
                  <p className="text-2xl font-bold">{stats.activeEvents}</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                  <p className="text-2xl font-bold">{stats.totalDownloads}</p>
                </div>
              </div>
            </Card>
          </div>

          <Tabs defaultValue="events" className="mb-8">
            <TabsList>
              <TabsTrigger value="events">Assigned Events</TabsTrigger>
              <TabsTrigger value="photos">Recent Photos</TabsTrigger>
            </TabsList>

            <TabsContent value="events">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-semibold">Assigned Events</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" /> Filter
                    </Button>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" /> New Event
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {events.map((event) => (
                    <Card key={event.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{event.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {event.date} • {event.location}
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">Photos</p>
                            <p className="font-semibold">{event.photoCount}</p>
                          </div>
                          <Button variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="photos">
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">Upload Photos</h2>
                  <Button variant="outline">
                    <Filter className="h-4 w-4 mr-2" /> Filter
                  </Button>
                </div>

                <UploadZone onUpload={handleUpload} className="mb-8" />
                
                {uploading && (
                  <div className="mb-8">
                    <Progress value={progress} className="mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Processing photos and detecting faces...
                    </p>
                  </div>
                )}

                <PhotoGrid photos={photos} className="mb-8" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}