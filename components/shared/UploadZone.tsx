"use client";

import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Image as ImageIcon } from 'lucide-react';
import { Card } from '../ui/card';

interface UploadZoneProps {
  onUpload: (files: File[]) => void;
  multiple?: boolean;
  className?: string;
}

export function UploadZone({ onUpload, multiple = true, className = '' }: UploadZoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onUpload(acceptedFiles);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    multiple
  });

  return (
    <Card
      {...getRootProps()}
      className={`border-2 border-dashed border-muted-foreground/25 hover:border-muted-foreground/50 transition-colors cursor-pointer p-8 ${className}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center justify-center gap-2 text-muted-foreground">
        {isDragActive ? (
          <>
            <Upload className="h-12 w-12 animate-bounce" />
            <p className="text-lg font-medium">Drop your images here...</p>
          </>
        ) : (
          <>
            <ImageIcon className="h-12 w-12" />
            <p className="text-lg font-medium">Drag & drop images here or click to select</p>
            <p className="text-sm">Supports: JPG, JPEG, PNG</p>
          </>
        )}
      </div>
    </Card>
  );
}