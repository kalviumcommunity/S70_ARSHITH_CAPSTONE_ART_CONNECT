import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowUp, ArrowDown, MessageSquare, Share2, Bookmark, 
  Music, Video, Image as ImageIcon, Heart, Flag
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/**
 * PostCard - Renders a user-generated post with media, voting, and interaction features.
 * @param {Object} post - The post data.
 */
const PostCard = (post) => {
  const [upvotes, setUpvotes] = useState(post.upvotes);
  const [downvotes, setDownvotes] = useState(post.downvotes);
  const [hasUpvoted, setHasUpvoted] = useState(post.hasUpvoted || false);
  const [hasDownvoted, setHasDownvoted] = useState(post.hasDownvoted || false);
  const [hasBookmarked, setHasBookmarked] = useState(post.hasBookmarked || false);

  const handleUpvote = () => {
    if (hasUpvoted) {
      setUpvotes(prev => prev - 1);
      setHasUpvoted(false);
    } else {
      setUpvotes(prev => prev + 1);
      setHasUpvoted(true);
      if (hasDownvoted) {
        setDownvotes(prev => prev - 1);
        setHasDownvoted(false);
      }
    }
  };

  const handleDownvote = () => {
    if (hasDownvoted) {
      setDownvotes(prev => prev - 1);
      setHasDownvoted(false);
    } else {
      setDownvotes(prev => prev + 1);
      setHasDownvoted(true);
      if (hasUpvoted) {
        setUpvotes(prev => prev - 1);
        setHasUpvoted(false);
      }
    }
  };

  const getCategoryLabel = (category) => {
    return category.replace(/_/g, ' ').split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  };

  const renderMedia = () => {
    switch (post.type) {
      case 'image':
        return (
          <div className="mt-3 rounded-md overflow-hidden bg-gray-900">
            <motion.img 
              src={post.mediaUrl} 
              alt={post.title} 
              className="w-full object-cover max-h-96"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.01 }}
            />
          </div>
        );
      case 'video':
        return (
          <div className="mt-3 rounded-md overflow-hidden bg-gray-900">
            <video 
              src={post.mediaUrl} 
              controls 
              className="w-full max-h-96"
              poster="https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        );
      case 'audio':
        return (
          <motion.div 
            className="mt-3 p-4 bg-gray-900 rounded-md"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center space-x-3">
              <Music className="h-10 w-10 text-white" />
              <div className="flex-1">
                <audio 
                  src={post.mediaUrl} 
                  controls 
                  className="w-full"
                >
                  Your browser does not support the audio element.
                </audio>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="mb-4"
    >
      <Card className="backdrop-blur-sm bg-black/30 border-white/10 overflow-hidden shadow-lg hover:shadow-white/5 transition-all">
        <CardContent className="p-0">
          <div className="flex">
            <div className="bg-gray-900 p-2 flex flex-col items-center justify-start space-y-2 min-w-14">
              <button 
                onClick={handleUpvote}
                className={`p-1 rounded-full transition-colors ${hasUpvoted ? 'bg-orange-600 text-white' : 'hover:bg-gray-800'}`}
              >
                <ArrowUp className="h-5 w-5" />
              </button>
              <span className="text-sm font-medium">{upvotes - downvotes}</span>
              <button 
                onClick={handleDownvote}
                className={`p-1 rounded-full transition-colors ${hasDownvoted ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'}`}
              >
                <ArrowDown className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4 w-full">
              <div className="flex items-center mb-2">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="text-sm font-medium">{post.author.name}</div>
                  <div className="text-xs text-gray-500">{post.timePosted}</div>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs mb-2">
                <span className="px-2 py-1 rounded-full bg-gray-800 text-xs">
                  {getCategoryLabel(post.category)}
                </span>
                {post.type === 'audio' && (
                  <span className="px-2 py-1 rounded-full bg-purple-900/50 text-xs flex items-center">
                    <Music className="h-3 w-3 mr-1" /> Audio
                  </span>
                )}
                {post.type === 'video' && (
                  <span className="px-2 py-1 rounded-full bg-blue-900/50 text-xs flex items-center">
                    <Video className="h-3 w-3 mr-1" /> Video
                  </span>
                )}
                {post.type === 'image' && (
                  <span className="px-2 py-1 rounded-full bg-green-900/50 text-xs flex items-center">
                    <ImageIcon className="h-3 w-3 mr-1" /> Image
                  </span>
                )}
              </div>

              <h3 className="text-lg font-bold mt-1">{post.title}</h3>
              
              <p className="mt-2 text-gray-300">{post.content}</p>
              
              {renderMedia()}
              
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <button className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors">
                  <MessageSquare className="h-4 w-4" />
                  <span>{post.comments} Comments</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </button>
                <button 
                  className={`flex items-center space-x-1 transition-colors ${hasBookmarked ? 'text-yellow-500' : 'text-gray-400 hover:text-white'}`}
                  onClick={() => setHasBookmarked(!hasBookmarked)}
                >
                  <Bookmark className="h-4 w-4" />
                  <span>Save</span>
                </button>
                <button className="flex items-center space-x-1 text-gray-400 hover:text-red-500 transition-colors ml-auto">
                  <Flag className="h-4 w-4" />
                  <span>Report</span>
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PostCard;
