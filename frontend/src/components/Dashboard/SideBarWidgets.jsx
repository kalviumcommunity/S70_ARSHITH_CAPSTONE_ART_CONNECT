import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Briefcase } from 'lucide-react';

const SidebarWidgets = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
        <CardContent className="p-4">
          <h2 className="font-bold text-lg mb-3">Trending Categories</h2>
          <div className="space-y-2">
            {['MUSIC', 'DIGITAL ART', 'PHOTOGRAPHY', 'FILM', 'LITERATURE'].map((category) => (
              <div key={category} className="flex items-center justify-between py-2 border-b border-gray-800 last:border-0">
                <span className="text-sm">{category}</span>
                <span className="text-xs px-2 py-1 bg-gray-800 rounded-full">
                  {Math.floor(Math.random() * 1000)} posts
                </span>
              </div>
            ))}
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-2">
            View All Categories
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
        <CardContent className="p-4">
          <h2 className="font-bold text-lg mb-3">Upcoming Events</h2>
          <div className="space-y-3">
            <div className="rounded-md bg-gray-900 p-3">
              <div className="text-sm font-semibold">Digital Art Workshop</div>
              <div className="text-xs text-gray-400 mt-1">Tomorrow at 7:00 PM</div>
              <div className="text-xs text-gray-400">Online • Free</div>
            </div>
            <div className="rounded-md bg-gray-900 p-3">
              <div className="text-sm font-semibold">Music Production Masterclass</div>
              <div className="text-xs text-gray-400 mt-1">June 15, 2023 at 2:00 PM</div>
              <div className="text-xs text-gray-400">Online • $15</div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-3">
            <Calendar className="h-4 w-4 mr-2" />
            View All Events
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-black/30 border-white/10 backdrop-blur-sm">
        <CardContent className="p-4">
          <h2 className="font-bold text-lg mb-3">Job Opportunities</h2>
          <div className="space-y-3">
            <div className="rounded-md bg-gray-900 p-3">
              <div className="text-sm font-semibold">Music Composer Needed</div>
              <div className="text-xs text-gray-400 mt-1">Indie Game Studio • Remote</div>
              <div className="text-xs text-gray-400">$500 - $1,000 • Posted 2d ago</div>
            </div>
            <div className="rounded-md bg-gray-900 p-3">
              <div className="text-sm font-semibold">Video Editor for YouTube Channel</div>
              <div className="text-xs text-gray-400 mt-1">Content Creator • Remote</div>
              <div className="text-xs text-gray-400">$25/hr • Posted 4h ago</div>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="w-full mt-3">
            <Briefcase className="h-4 w-4 mr-2" />
            Browse All Jobs
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SidebarWidgets;
