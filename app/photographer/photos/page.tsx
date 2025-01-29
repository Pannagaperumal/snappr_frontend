"use client";

import { useState } from 'react';
import { UploadZone } from '@/components/shared/UploadZone';
import { PhotoGrid } from '@/components/shared/PhotoGrid';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Filter } from 'lucide-react';
import { Photo } from '@/app/types';

export default function PhotosPage() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>([
    {
      id: '1',
      url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      uploadedBy: 'photographer-1',
      faces: ['user-1'],
      createdAt: new Date(),
    },
    {
      id: '2',
      url: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
      uploadedBy: 'photographer-1',
      faces: ['user-1'],
      createdAt: new Date(),
    },
  ]);

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
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Photos</h1>
            <p className="text-muted-foreground">Upload and manage your photos</p>
          </div>
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
    </div>
  );
}