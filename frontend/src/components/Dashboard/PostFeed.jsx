import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import { TrendingUp, Sparkles, Users } from 'lucide-react';
import PostCard from './PostCard';

const PostFeed = ({ posts }) => {
  return (
    <Tabs defaultValue="popular" className="mb-6">
      <TabsList className="mb-4 bg-black/40">
        <TabsTrigger value="popular" className="data-[state=active]:bg-gray-800">
          <TrendingUp className="h-4 w-4 mr-2" />
          Popular
        </TabsTrigger>
        <TabsTrigger value="new" className="data-[state=active]:bg-gray-800">
          <Sparkles className="h-4 w-4 mr-2" />
          New
        </TabsTrigger>
        <TabsTrigger value="following" className="data-[state=active]:bg-gray-800">
          <Users className="h-4 w-4 mr-2" />
          Following
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="popular" className="space-y-4">
        {posts.length > 0 ? posts.map(post => (
          <PostCard key={post.id} {...post} />
        )) : (
          <div className="p-12 text-center text-gray-500">
            <p>No posts available in this category yet.</p>
            <Button variant="outline" className="mt-4">Create First Post</Button>
          </div>
        )}
      </TabsContent>
      
      <TabsContent value="new" className="space-y-4">
        {posts.filter(post => post.category === "NEW").length > 0 ? (
          posts.filter(post => post.category === "NEW").map(post => (
            <PostCard key={post.id} {...post} />
          ))
        ) : (
          <div className="p-12 text-center text-gray-500">
            <p>New posts will appear here.</p>
            <Button variant="outline" className="mt-4">Create New Post</Button>
          </div>
        )}
      </TabsContent>
      
      <TabsContent value="following" className="space-y-4">
        <div className="p-12 text-center text-gray-500">
          <p>Follow some artists to see their work here.</p>
          <Button variant="outline" className="mt-4">Find Artists</Button>
        </div>
      </TabsContent>
      
      <div className="mt-8 text-center">
        <Button variant="outline">Load More</Button>
      </div>
    </Tabs>
  );
};

export default PostFeed;
