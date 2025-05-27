import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Music, Video, Image as ImageIcon, FileText, Upload } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CreatePostDialog = ({ onClose }) => {
  const [postType, setPostType] = useState('text');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  
  const handleSubmit = () => {
    if (!title.trim()) {
      toast({
        title: "Title required",
        description: "Please add a title for your post",
        variant: "destructive"
      });
      return;
    }
    
    setIsUploading(true);
    
    setTimeout(() => {
      toast({
        title: "Post created!",
        description: "Your post has been published successfully",
      });
      setIsUploading(false);
      onClose();
    }, 1500);
  };
  
  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="flex space-x-2 mb-4">
          <Button 
            variant={postType === 'text' ? 'default' : 'outline'} 
            size="sm" 
            onClick={() => setPostType('text')}
            className="flex-1"
          >
            <FileText className="mr-2 h-4 w-4" />
            Text
          </Button>
          <Button 
            variant={postType === 'image' ? 'default' : 'outline'} 
            size="sm" 
            onClick={() => setPostType('image')}
            className="flex-1"
          >
            <ImageIcon className="mr-2 h-4 w-4" />
            Image
          </Button>
          <Button 
            variant={postType === 'video' ? 'default' : 'outline'} 
            size="sm" 
            onClick={() => setPostType('video')}
            className="flex-1"
          >
            <Video className="mr-2 h-4 w-4" />
            Video
          </Button>
          <Button 
            variant={postType === 'audio' ? 'default' : 'outline'} 
            size="sm" 
            onClick={() => setPostType('audio')}
            className="flex-1"
          >
            <Music className="mr-2 h-4 w-4" />
            Audio
          </Button>
        </div>
        
        <Input 
          type="text" 
          placeholder="Title" 
          className="w-full p-3 mb-3 bg-gray-900 rounded-md border border-gray-700 text-white"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full mb-3 bg-gray-900 border-gray-700">
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent className="bg-gray-900 border-gray-700">
            <SelectItem value="VISUAL_ARTS">Visual Arts</SelectItem>
            <SelectItem value="PERFORMING_ARTS">Performing Arts</SelectItem>
            <SelectItem value="LITERARY_ARTS">Literary Arts</SelectItem>
            <SelectItem value="DIGITAL_MEDIA_ARTS">Digital & Media Arts</SelectItem>
            <SelectItem value="DECORATIVE_ARTS">Decorative Arts & Design</SelectItem>
            <SelectItem value="CULTURAL_ARTS">Cultural Arts</SelectItem>
            <SelectItem value="CULINARY_ARTS">Culinary & Edible Arts</SelectItem>
            <SelectItem value="ARCHITECTURAL_ARTS">Architectural Arts</SelectItem>
            <SelectItem value="MUSIC">Music</SelectItem>
            <SelectItem value="FILM">Film</SelectItem>
          </SelectContent>
        </Select>
        
        <Textarea 
          placeholder="What would you like to share?" 
          className="w-full p-3 bg-gray-900 rounded-md border border-gray-700 text-white resize-none h-32"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        
        {postType !== 'text' && (
          <div className="mt-3 p-8 border-2 border-dashed border-gray-700 rounded-md text-center cursor-pointer hover:border-gray-500 transition-colors">
            <div className="flex flex-col items-center">
              {postType === 'image' && <ImageIcon className="h-8 w-8 text-gray-400 mb-2" />}
              {postType === 'video' && <Video className="h-8 w-8 text-gray-400 mb-2" />}
              {postType === 'audio' && <Music className="h-8 w-8 text-gray-400 mb-2" />}
              <p className="text-gray-400 mb-1">
                {postType === 'image' && 'Upload Image'}
                {postType === 'video' && 'Upload Video'}
                {postType === 'audio' && 'Upload Audio'}
              </p>
              <p className="text-xs text-gray-500">Click to browse or drag and drop</p>
              <Button variant="outline" size="sm" className="mt-4">
                <Upload className="h-4 w-4 mr-2" />
                Upload File
              </Button>
            </div>
          </div>
        )}
        
        <div className="flex justify-between mt-4">
          <Button variant="outline" onClick={onClose}>Cancel</Button>
          <Button 
            onClick={handleSubmit}
            disabled={isUploading}
          >
            {isUploading ? (
              <>
                <div className="h-4 w-4 border-2 border-t-transparent border-white rounded-full animate-spin mr-2"></div>
                Posting...
              </>
            ) : "Post"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostDialog;
