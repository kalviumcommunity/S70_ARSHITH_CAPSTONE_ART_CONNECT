import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Theater, Users, Search, Filter, ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const PerformanceCard = ({ 
  title, 
  artist, 
  artistAvatar, 
  image, 
  category,
  description,
  location,
  date
}) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 backdrop-blur-sm bg-black/30 border border-white/10">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-48"
        />
        <div className="absolute top-3 left-3 bg-black/60 text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
          {category}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex items-center mb-3">
          <img 
            src={artistAvatar} 
            alt={artist} 
            className="w-8 h-8 rounded-full mr-2 border border-white/20"
          />
          <div>
            <h3 className="font-medium text-sm text-gray-300">{artist}</h3>
          </div>
        </div>
        
        <h2 className="font-semibold text-lg mb-2">{title}</h2>
        <p className="text-sm text-gray-400 mb-3 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-xs text-gray-400 mt-4 pt-3 border-t border-gray-800">
          <div>{location}</div>
          <div>{date}</div>
        </div>
      </CardContent>
    </Card>
  );
};

const PerformingArts = () => {
  const performances = [/* ...performance data here... */];

  const performanceCategories = [
    'Theater', 'Dance', 'Opera', 'Ballet', 'Circus', 'Performance Art', 'Puppetry', 'Mime', 'Musical'
  ];

  return (
    <DashboardLayout>
      <div className="p-6 min-h-screen relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black -z-10"></div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-2 rounded-full">
                <Theater className="h-6 w-6" />
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">Performing Arts</h1>
            </div>
            <p className="text-muted-foreground">Discover theater, dance, opera, and live performances</p>
          </div>

          {/* Search and Filter */}
          <div className="w-full md:w-auto flex flex-col md:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search performances..." 
                className="w-full md:w-64 h-10 pl-10 pr-4 rounded-md bg-black/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-transparent"
              />
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="h-10 bg-black/50 border-white/10">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72 bg-gray-900 border border-white/10">
                <div className="font-medium mb-3">Categories</div>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {performanceCategories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category}`} />
                      <Label htmlFor={`category-${category}`}>{category}</Label>
                    </div>
                  ))}
                </div>

                <div className="font-medium mb-3 mt-4">Location</div>
                <div className="space-y-2">
                  {['Local Events', 'International', 'Online Performances'].map((location) => (
                    <div key={location} className="flex items-center space-x-2">
                      <Checkbox id={`location-${location}`} />
                      <Label htmlFor={`location-${location}`}>{location}</Label>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex space-x-2">
                  <Button variant="outline" className="flex-1 bg-transparent border-white/10">Reset</Button>
                  <Button className="flex-1">Apply</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </motion.div>

        {/* Tabs Section */}
        <Tabs defaultValue="all" className="mb-6">
          <TabsList className="bg-black/50 border border-white/10">
            <TabsTrigger value="all">All Performances</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="local">Local Events</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performances.map((performance, index) => (
                <motion.div
                  key={performance.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <PerformanceCard {...performance} />
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" size="lg" className="bg-black/50 border-white/10">
                Load More
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="upcoming">
            <div className="py-10 text-center text-muted-foreground">
              <p>Upcoming performances will appear here.</p>
              <Button className="mt-4">Set Notifications</Button>
            </div>
          </TabsContent>

          <TabsContent value="trending">
            <div className="py-10 text-center text-muted-foreground">
              <p>Trending performances will appear here.</p>
            </div>
          </TabsContent>

          <TabsContent value="local">
            <div className="py-10 text-center text-muted-foreground">
              <p>Local events based on your location will appear here.</p>
              <Button className="mt-4">Update Location</Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Featured Artists */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Featured Artists</h2>
            <Button variant="ghost">View All</Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* ...featured artists map logic here... */}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PerformingArts;
