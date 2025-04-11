import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import DashboardLayout from '@/components/DashboardLayout';
import CreatePostCard from '@/components/dashboard/CreatePostCard';
import PostFeed from '@/components/dashboard/PostFeed';
import SidebarWidgets from '@/components/dashboard/SidebarWidgets';
import AnimatedBackground from '@/components/dashboard/AnimatedBackground';
import { samplePosts } from '@/components/dashboard/PostsData';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Music, Video, Users, Briefcase, Book } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('Artist');
  const [createPostOpen, setCreatePostOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(samplePosts);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    const userData = localStorage.getItem('user');

    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    if (userData) {
      try {
        const user = JSON.parse(userData);
        setUsername(user.name || 'Artist');
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }

    setTimeout(() => {
      setPosts(samplePosts);
      setIsLoading(false);
    }, 800);
  }, [navigate]);

  const featuredCategories = [
    {
      title: "Visual Arts",
      icon: <Palette className="h-5 w-5" />, 
      color: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      path: "/visual-arts"
    },
    {
      title: "Music",
      icon: <Music className="h-5 w-5" />, 
      color: "bg-gradient-to-br from-violet-500/20 to-purple-500/20",
      border: "border-violet-500/30",
      path: "/music"
    },
    {
      title: "Video",
      icon: <Video className="h-5 w-5" />, 
      color: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      path: "/videos"
    },
    {
      title: "Literature",
      icon: <Book className="h-5 w-5" />, 
      color: "bg-gradient-to-br from-amber-500/20 to-yellow-500/20",
      border: "border-amber-500/30",
      path: "/literary-arts"
    }
  ];

  if (isLoading) {
    return (
      <DashboardLayout>
        <div className="p-6 h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="inline-block animate-spin h-8 w-8 border-4 border-t-white border-white/30 rounded-full mb-4"></div>
            <p className="text-white/70">Loading your creative feed...</p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 relative">
        <AnimatedBackground />

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">{username}</span>!</h1>
          <p className="text-muted-foreground">Explore creative content from artists around the world</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredCategories.map((category) => (
              <Card 
                key={category.title}
                className={`cursor-pointer backdrop-blur-sm bg-black/30 border ${category.border} hover:shadow-lg transition-all duration-300`}
                onClick={() => navigate(category.path)}
              >
                <CardContent className="p-4 flex items-center">
                  <div className={`${category.color} p-2 rounded-full mr-3`}>
                    {category.icon}
                  </div>
                  <span className="font-medium">{category.title}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-3">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <CreatePostCard 
              isOpen={createPostOpen} 
              setIsOpen={setCreatePostOpen} 
            />
            <PostFeed posts={posts} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <SidebarWidgets />
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
