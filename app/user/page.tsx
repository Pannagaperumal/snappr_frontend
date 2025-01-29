"use client";

import { useState } from 'react';
import { UploadZone } from '@/components/shared/UploadZone';
import { PhotoGrid } from '@/components/shared/PhotoGrid';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Photo } from '../types';
import { UserCircle, Download } from 'lucide-react';

export default function UserDashboard() {
  const [referencePhoto, setReferencePhoto] = useState<string | null>(null);
  const [matchedPhotos, setMatchedPhotos] = useState<Photo[]>([]);

  const handleReferenceUpload = async (files: File[]) => {
    if (files.length === 0) return;
    
    const file = files[0];
    setReferencePhoto(URL.createObjectURL(file));

    // Simulate API call to find matching photos
    setTimeout(() => {
      // Mock matched photos
      setMatchedPhotos([
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
    }, 2000);
  };

  const handleDownload = (photo: Photo) => {
    // Implement download logic
    window.open(photo.url, '_blank');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-3 mb-8">
        <UserCircle className="h-8 w-8" />
        <h1 className="text-3xl font-bold">Find Your Photos</h1>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upload Reference Photo</h2>
          <p className="text-muted-foreground mb-4">
            Upload a clear photo of yourself to find matching photos from our collection.
          </p>
          {referencePhoto ? (
            <Card className="relative aspect-square">
              <img
                src={referencePhoto}
                alt="Reference"
                className="w-full h-full object-cover rounded-lg"
              />
              <Button
                variant="secondary"
                className="absolute bottom-4 right-4"
                onClick={() => setReferencePhoto(null)}
              >
                Change Photo
              </Button>
            </Card>
          ) : (
            <UploadZone onUpload={handleReferenceUpload} multiple={false} />
          )}
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                1
              </div>
              <div>
                <h3 className="font-medium">Upload Your Photo</h3>
                <p className="text-muted-foreground">
                  Upload a clear, recent photo of yourself as a reference.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                2
              </div>
              <div>
                <h3 className="font-medium">Face Recognition</h3>
                <p className="text-muted-foreground">
                  Our system will analyze your photo and find matches in our database.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                3
              </div>
              <div>
                <h3 className="font-medium">Download Your Photos</h3>
                <p className="text-muted-foreground">
                  Browse and download the photos where you appear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {matchedPhotos.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold">Matching Photos</h2>
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download All
            </Button>
          </div>
          <PhotoGrid photos={matchedPhotos} onDownload={handleDownload} />
        </div>
      )}
    </div>
  );
}