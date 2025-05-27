import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import CreatePostDialog from './CreatePostDialog';

const CreatePostCard = ({ isOpen, setIsOpen }) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="mb-6 backdrop-blur-sm bg-black/30 border-white/10 hover:border-white/30 transition-colors cursor-pointer">
          <CardContent className="p-4 flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?img=5" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <div className="flex-1 bg-gray-900 rounded-full px-4 py-2 text-gray-400">
              Share your art or ideas...
            </div>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Post
            </Button>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle>Create Post</DialogTitle>
        </DialogHeader>
        <CreatePostDialog onClose={() => setIsOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostCard;
