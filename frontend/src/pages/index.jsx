import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from "../components/ui/button";

const Index = () => {
  useEffect(() => {
    console.log('Index page mounted');
    window.scrollTo(0, 0);
  }, []);

  const user = {
    name: "Alex Rivera",
    avatar: "https://i.pravatar.cc/40?img=3"
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-6 md:px-16">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-3xl font-bold">ART CONNECT</div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover-link">Home</Link>
            <Link to="#" className="hover-link">Features</Link>
            <Link to="#" className="hover-link">Categories</Link>
            <Link to="#" className="hover-link">About</Link>
            {user ? (
              <div className="flex items-center space-x-4 ml-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-8 h-8 rounded-full border-2 border-white"
                />
                <span className="text-white font-medium">{user.name}</span>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="outline" className="ml-4 border-white text-white hover:bg-white hover:text-black">
                  Login
                </Button>
              </Link>
            )}
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white mb-1.5"></div>
              <div className="w-6 h-0.5 bg-white"></div>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        {/* ... Remaining hero, stats, categories, and footer sections are unchanged ... */}
      </main>
    </div>
  );
};

export default Index;