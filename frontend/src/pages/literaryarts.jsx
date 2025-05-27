import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const LiteraryArts = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10 md:px-16">
      {/* Page Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Literary Arts</h1>
        <p className="text-lg text-gray-700">
          Dive into the world of poetry, prose, essays, and storytelling. Discover and share your voice.
        </p>
      </header>

      {/* Categories / Highlights */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="p-6 bg-gray-100 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Poetry</h2>
          <p className="text-gray-600">Explore traditional and experimental forms of poetry. Publish your own or read others’ works.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Short Stories</h2>
          <p className="text-gray-600">Read and contribute bite-sized fiction that inspires, challenges, and entertains.</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-2">Essays & Reflections</h2>
          <p className="text-gray-600">Express your thoughts on society, philosophy, identity, and more in longform narratives.</p>
        </div>
      </section>

      {/* Call to Action */}
      <div className="text-center">
        <h3 className="text-xl font-medium mb-4">Ready to share your literary art?</h3>
        <Link to="/submit-literary">
          <Button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
            Submit Your Work
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LiteraryArts;
