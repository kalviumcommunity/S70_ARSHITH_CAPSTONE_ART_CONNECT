import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Palette, Music, Video, BookText, Camera, Theater, 
  PenTool, Utensils, Building, Layers, Users, Film, Briefcase
} from "lucide-react";
import DashboardLayout from '@/components/DashboardLayout';

const ArtCategories = () => {
  const categories = [
    {
      title: "Visual Arts",
      icon: <Palette className="h-8 w-8" />,
      description: "Painting, Drawing, Sculpture, Printmaking",
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      link: "/visual-arts"
    },
    {
      title: "Music",
      icon: <Music className="h-8 w-8" />,
      description: "Classical, Contemporary, Jazz, Electronic",
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      link: "/music"
    },
    {
      title: "Performing Arts",
      icon: <Theater className="h-8 w-8" />,
      description: "Theater, Dance, Opera, Performance Art",
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      link: "/performing-arts"
    },
    {
      title: "Literary Arts",
      icon: <BookText className="h-8 w-8" />,
      description: "Poetry, Fiction, Drama, Creative Non-fiction",
      gradient: "from-yellow-500/20 to-amber-500/20",
      border: "border-yellow-500/30",
      link: "/literary-arts"
    },
    {
      title: "Photography",
      icon: <Camera className="h-8 w-8" />,
      description: "Digital, Film, Documentary, Artistic",
      gradient: "from-red-500/20 to-orange-500/20",
      border: "border-red-500/30",
      link: "/photography"
    },
    {
      title: "Digital Media Arts",
      icon: <Layers className="h-8 w-8" />,
      description: "Digital Art, Animation, Game Design, VR/AR",
      gradient: "from-indigo-500/20 to-violet-500/20",
      border: "border-indigo-500/30",
      link: "/digital-media-arts"
    },
    {
      title: "Film & Video",
      icon: <Film className="h-8 w-8" />,
      description: "Cinema, Short Films, Documentary, Experimental",
      gradient: "from-slate-500/20 to-gray-500/20",
      border: "border-slate-500/30",
      link: "/film-video"
    },
    {
      title: "Decorative Arts",
      icon: <PenTool className="h-8 w-8" />,
      description: "Ceramics, Textiles, Glass, Metalwork",
      gradient: "from-rose-500/20 to-pink-500/20",
      border: "border-rose-500/30",
      link: "/decorative-arts"
    },
    {
      title: "Culinary Arts",
      icon: <Utensils className="h-8 w-8" />,
      description: "Gastronomy, Baking, Mixology, Food Design",
      gradient: "from-amber-500/20 to-yellow-500/20",
      border: "border-amber-500/30",
      link: "/culinary-arts"
    },
    {
      title: "Architectural Arts",
      icon: <Building className="h-8 w-8" />,
      description: "Contemporary, Landscape, Urban, Sustainable",
      gradient: "from-stone-500/20 to-neutral-500/20",
      border: "border-stone-500/30",
      link: "/architectural-arts"
    },
    {
      title: "Mixed Media",
      icon: <Layers className="h-8 w-8" />,
      description: "Collage, Assemblage, Installation, Hybrid Forms",
      gradient: "from-fuchsia-500/20 to-purple-500/20",
      border: "border-fuchsia-500/30",
      link: "/mixed-media"
    },
    {
      title: "Cultural Arts",
      icon: <Users className="h-8 w-8" />,
      description: "Folk Art, Traditional Crafts, Indigenous Art",
      gradient: "from-teal-500/20 to-emerald-500/20",
      border: "border-teal-500/30",
      link: "/cultural-arts"
    }
  ];

  return (
    <DashboardLayout>
      <div className="p-6 md:p-10 relative min-h-screen">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black -z-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Explore Art Categories</h1>
          <p className="text-muted-foreground">Discover and connect with artists across different disciplines</p>
        </motion.div>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Link to={category.link} className="block h-full">
                <Card className={`h-full backdrop-blur-sm bg-black/30 border ${category.border} hover:bg-black/40 transition-all duration-300 overflow-hidden group`}>
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className={`bg-gradient-to-br ${category.gradient} p-4 rounded-full mb-4 w-16 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ArtCategories;
