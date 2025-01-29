export interface Photo {
  id: string;
  url: string;
  uploadedBy: string;
  faces: string[];
  createdAt: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'photographer' | 'user';
  avatar?: string;
}

export interface UploadResponse {
  success: boolean;
  url: string;
  message?: string;
}