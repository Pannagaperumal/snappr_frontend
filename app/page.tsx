import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Camera, User, Search, Shield, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted flex flex-col">
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">PhotoShare</span>
            </div>
            <Button asChild variant="default">
              <Link href="/login">Sign In</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20 md:py-32 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Find Your Perfect Moments
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Our AI-powered platform connects photographers and their clients, making it easy to find and download your photos using facial recognition technology.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link href="/login">Get Started</Link>
            </Button>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Photos</h3>
                <p className="text-muted-foreground">
                  Photographers upload event photos to our secure platform.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Processing</h3>
                <p className="text-muted-foreground">
                  Our AI technology organizes photos by facial recognition.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Search className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Find & Download</h3>
                <p className="text-muted-foreground">
                  Users easily find and download their photos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-8 rounded-xl bg-card border hover:shadow-lg transition-shadow">
                <Camera className="w-12 h-12 mb-4 text-primary" />
                <h2 className="text-2xl font-semibold mb-4">For Photographers</h2>
                <p className="text-muted-foreground mb-6">
                  Upload your photos and let our AI organize them by faces. Streamline your delivery process and delight your clients.
                </p>
                <Button asChild className="w-full">
                  <Link href="/login">Start Uploading</Link>
                </Button>
              </div>

              <div className="p-8 rounded-xl bg-card border hover:shadow-lg transition-shadow">
                <User className="w-12 h-12 mb-4 text-primary" />
                <h2 className="text-2xl font-semibold mb-4">For Users</h2>
                <p className="text-muted-foreground mb-6">
                  Find all your photos from events by simply uploading one reference photo of yourself. Quick, easy, and secure.
                </p>
                <Button asChild className="w-full">
                  <Link href="/login">Find Your Photos</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <Shield className="w-12 h-12 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl font-bold mb-4">Secure & Private</h2>
              <p className="text-muted-foreground">
                Your privacy is our top priority. All photos are securely stored and processed with state-of-the-art encryption.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-card/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary" />
              <span className="font-bold">PhotoShare</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 PhotoShare. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}