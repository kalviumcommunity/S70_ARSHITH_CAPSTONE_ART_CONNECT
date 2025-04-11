import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, MessageSquare, Share2, Filter, Search, ChevronDown } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

const ArtworkCard = ({ 
  title, 
  artist, 
  artistAvatar, 
  image, 
  likes, 
  comments, 
  hasLiked = false 
}) => {
  const [liked, setLiked] = useState(hasLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-4 aspect-h-3 relative">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-64"
        />
      </div>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img 
              src={artistAvatar} 
              alt={artist} 
              className="w-8 h-8 rounded-full mr-2"
            />
            <div>
              <h3 className="font-medium text-sm">{artist}</h3>
              <h2 className="font-semibold">{title}</h2>
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t mt-2">
          <div className="flex space-x-4">
            <button
              onClick={handleLike}
              className="flex items-center text-sm text-gray-500 hover:text-red-500"
            >
              <Heart 
                className={`h-4 w-4 mr-1 ${liked ? 'fill-red-500 text-red-500' : ''}`} 
              />
              {likeCount}
            </button>
            <button className="flex items-center text-sm text-gray-500 hover:text-blue-500">
              <MessageSquare className="h-4 w-4 mr-1" />
              {comments}
            </button>
          </div>
          <button className="text-gray-500 hover:text-gray-700">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

const ArtGallery = () => {
  const artworks = [
    {
      id: '1',
      title: 'Urban Landscape',
      artist: 'Alex Johnson',
      artistAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      likes: 256,
      comments: 24,
      category: 'Painting'
    },
    {
      id: '2',
      title: 'Abstract Thoughts',
      artist: 'Maria Silva',
      artistAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      likes: 189,
      comments: 18,
      category: 'Digital'
    },
    {
      id: '3',
      title: 'Mountain Serenity',
      artist: 'David Park',
      artistAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      image: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      likes: 320,
      comments: 36,
      category: 'Photography'
    },
    {
      id: '4',
      title: 'Sunset Dreams',
      artist: 'Emma Thompson',
      artistAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      image: 'https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      likes: 278,
      comments: 42,
      category: 'Photography'
    },
    {
      id: '5',
      title: 'Digital Escape',
      artist: 'James Wilson',
      artistAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      image: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      likes: 156,
      comments: 14,
      category: 'Digital'
    },
    {
      id: '6',
      title: 'Watercolor Wonder',
      artist: 'Sophie Chen',
      artistAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
      likes: 214,
      comments: 28,
      category: 'Painting'
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">Art Gallery</h1>
        <p className="text-muted-foreground mb-6">Discover amazing artwork from artists around the world</p>
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search artworks, artists..." 
              className="w-full h-10 pl-10 pr-4 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          
          <div className="flex space-x-3 w-full md:w-auto">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="h-10">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-72">
                <div className="font-medium mb-3">Categories</div>
                <div className="space-y-2">
                  {['Painting', 'Digital', 'Photography', 'Sculpture', 'Mixed Media'].map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox id={`category-${category}`} />
                      <Label htmlFor={`category-${category}`}>{category}</Label>
                    </div>
                  ))}
                </div>
                
                <div className="font-medium mb-3 mt-4">Medium</div>
                <div className="space-y-2">
                  {['Oil', 'Acrylic', 'Watercolor', 'Charcoal', 'Digital'].map((medium) => (
                    <div key={medium} className="flex items-center space-x-2">
                      <Checkbox id={`medium-${medium}`} />
                      <Label htmlFor={`medium-${medium}`}>{medium}</Label>
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 flex space-x-2">
                  <Button variant="outline" className="flex-1">Reset</Button>
                  <Button className="flex-1">Apply</Button>
                </div>
              </PopoverContent>
            </Popover>
            
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="h-10">
                  Sort
                  <ChevronDown className="h-4 w-4 ml-2" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56">
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start">Most Popular</Button>
                  <Button variant="ghost" className="w-full justify-start">Newest First</Button>
                  <Button variant="ghost" className="w-full justify-start">Oldest First</Button>
                  <Button variant="ghost" className="w-full justify-start">Most Commented</Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-6">
          <TabsList>
            <TabsTrigger value="all">All Artwork</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="following">From Artists You Follow</TabsTrigger>
            <TabsTrigger value="discover">Discover New</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map((artwork) => (
                <ArtworkCard key={artwork.id} {...artwork} />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" size="lg">
                Load More
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="trending">
            <div className="py-10 text-center text-muted-foreground">
              <p>Trending artworks will appear here.</p>
            </div>
          </TabsContent>
          
          <TabsContent value="following">
            <div className="py-10 text-center text-muted-foreground">
              <p>Follow some artists to see their work here.</p>
              <Button className="mt-4">Discover Artists</Button>
            </div>
          </TabsContent>
          
          <TabsContent value="discover">
            <div className="py-10 text-center text-muted-foreground">
              <p>Discover new artworks based on your interests.</p>
              <Button className="mt-4">Update Preferences</Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ArtGallery;
