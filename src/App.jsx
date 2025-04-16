import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from "./pages/Index";
import NotFound from "./pages/notfound";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Dashboard from "./pages/Dashboard";
import ArtCategories from "./pages/artcategories";
import PerformingArts from "./pages/performingarts";
import ArtGallery from "./pages/artgallery";
import LiteraryArts from "./pages/literaryarts";

// React Query client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/categories" element={<ArtCategories />} />
          <Route path="/visual-arts" element={<ArtGallery />} />
          <Route path="/performing-arts" element={<PerformingArts />} />
          <Route path="/literary-arts" element={<LiteraryArts />} />
          <Route path="/digital-media-arts" element={<Dashboard />} />
          <Route path="/decorative-arts" element={<Dashboard />} />
          <Route path="/cultural-arts" element={<Dashboard />} />
          <Route path="/culinary-arts" element={<Dashboard />} />
          <Route path="/architectural-arts" element={<Dashboard />} />
          <Route path="/music" element={<Dashboard />} />
          <Route path="/photography" element={<Dashboard />} />
          <Route path="/film-video" element={<Dashboard />} />
          <Route path="/mixed-media" element={<Dashboard />} />
          <Route path="/profile" element={<Dashboard />} />
          <Route path="/videos" element={<Dashboard />} />
          <Route path="/jobs" element={<Dashboard />} />
          <Route path="/network" element={<Dashboard />} />
          <Route path="/messages" element={<Dashboard />} />
          <Route path="/events" element={<Dashboard />} />
          <Route path="/saved" element={<Dashboard />} />
          <Route path="/settings" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
