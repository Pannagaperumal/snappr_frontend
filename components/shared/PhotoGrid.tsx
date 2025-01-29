"use client";

import React from 'react';
import Image from 'next/image';
import { Photo } from '@/app/types';
import { Download } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';

interface PhotoGridProps {
  photos: Photo[];
  onDownload?: (photo: Photo) => void;
  className?: string;
}

export function PhotoGrid({ photos, onDownload, className = '' }: PhotoGridProps) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
      {photos.map((photo) => (
        <Card key={photo.id} className="group relative overflow-hidden">
          <div className="aspect-square relative">
            <Image
              src={photo.url}
              alt="Photo"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            {onDownload && (
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => onDownload(photo)}
                  className="rounded-full"
                >
                  <Download className="h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </Card>
      ))}
    </div>
  );
}