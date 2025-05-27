import React from 'react';
import PostCard from './PostCard';

const SamplePostFeed = () => {
  const samplePosts = [
    {
      id: '1',
      title: 'Just finished my latest electronic music track - "Neon Nights"',
      content: 'After months of work, I\'ve finally completed my new electronic track. Would love to get your feedback!',
      type: 'audio',
      mediaUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      author: { name: 'ElectroArtist', avatar: 'https://i.pravatar.cc/150?img=1' },
      category: 'MUSIC',
      upvotes: 128,
      downvotes: 5,
      comments: 24,
      timePosted: '3 hours ago'
    },
    {
      id: '2',
      title: 'My new short film "Shadows" - experimental cinematography',
      content: 'I\'ve been experimenting with unusual lighting techniques in my latest short film. Here\'s a snippet.',
      type: 'video',
      mediaUrl: 'https://samplelib.com/lib/preview/mp4/sample-5s.mp4',
      author: { name: 'FilmDirector22', avatar: 'https://i.pravatar.cc/150?img=2' },
      category: 'FILM',
      upvotes: 95,
      downvotes: 12,
      comments: 18,
      timePosted: '5 hours ago'
    },
    {
      id: '3',
      title: 'Urban landscape photography series - "City Lights"',
      content: 'Just completed a new series focusing on night photography in urban environments. This is my favorite shot from the collection.',
      type: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      author: { name: 'UrbanPhotographer', avatar: 'https://i.pravatar.cc/150?img=3' },
      category: 'VISUAL_ARTS',
      upvotes: 243,
      downvotes: 8,
      comments: 42,
      timePosted: '12 hours ago'
    },
    {
      id: '4',
      title: 'Looking for vocalist collaboration on my new ambient track',
      content: 'I\'ve composed an ambient piece that needs vocals. If you\'re interested in collaborating, please reach out!',
      type: 'text',
      author: { name: 'AmbientComposer', avatar: 'https://i.pravatar.cc/150?img=4' },
      category: 'COLLABORATION',
      upvotes: 65,
      downvotes: 2,
      comments: 31,
      timePosted: '1 day ago'
    },
    {
      id: '5',
      title: 'New abstract painting collection inspired by jazz',
      content: 'I\'ve been working on this collection for months, combining my love for abstract art and jazz music. Here\'s one of the key pieces.',
      type: 'image',
      mediaUrl: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      author: { name: 'JazzPainter', avatar: 'https://i.pravatar.cc/150?img=5' },
      category: 'VISUAL_ARTS',
      upvotes: 187,
      downvotes: 14,
      comments: 29,
      timePosted: '2 days ago'
    },
    {
      id: '6',
      title: 'Audio drama podcast - "The Last Transmission"',
      content: 'First episode of my new audio drama podcast exploring sci-fi themes. Full cast, original score, and sound design all done by me.',
      type: 'audio',
      mediaUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      author: { name: 'AudioDramatist', avatar: 'https://i.pravatar.cc/150?img=6' },
      category: 'DIGITAL_MEDIA_ARTS',
      upvotes: 112,
      downvotes: 7,
      comments: 35,
      timePosted: '3 days ago'
    }
  ];

  return (
    <div className="space-y-4">
      {samplePosts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default SamplePostFeed;
