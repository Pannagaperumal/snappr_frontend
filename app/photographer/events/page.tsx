"use client";

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Plus, Filter, MapPin, Users as UsersIcon } from 'lucide-react';

interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  photoCount: number;
  attendees: number;
  status: 'upcoming' | 'active' | 'completed';
}

const events: Event[] = [
  {
    id: '1',
    name: 'Wedding Ceremony',
    date: '2024-03-20',
    location: 'Grand Plaza Hotel',
    photoCount: 450,
    attendees: 200,
    status: 'upcoming',
  },
  {
    id: '2',
    name: 'Corporate Conference',
    date: '2024-03-15',
    location: 'Business Center',
    photoCount: 200,
    attendees: 150,
    status: 'active',
  },
  {
    id: '3',
    name: 'Birthday Party',
    date: '2024-03-10',
    location: 'Sunset Restaurant',
    photoCount: 300,
    attendees: 50,
    status: 'completed',
  },
];

export default function EventsPage() {
  return (
    <div className="p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">Events</h1>
            <p className="text-muted-foreground">Manage your photography events</p>
          </div>
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
            <Card key={event.id} className="p-6">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">{event.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <p>{event.date}</p>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <UsersIcon className="h-4 w-4" />
                      {event.attendees} attendees
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Photos</p>
                    <p className="font-semibold">{event.photoCount}</p>
                  </div>
                  <div>
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}