'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaClock, FaUser, FaTag, FaArrowRight } from 'react-icons/fa';

const BlogPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');

  const tags = [
    { id: 'all', name: 'Tümü' },
    { id: 'tutorial', name: 'Rehber' },
    { id: 'news', name: 'Haberler' },
    { id: 'projects', name: 'Projeler' },
    { id: 'hardware', name: 'Donanım' },
    { id: 'software', name: 'Yazılım' }
  ];

  const posts = [
    {
      id: 1,
      title: 'TunPi OS 2.0 Yayınlandı',
      excerpt: 'Yeni özellikleri ve iyileştirmeleri ile TunPi OS 2.0 sürümü kullanıma hazır.',
      author: 'Ahmet Yılmaz',
      date: '2 Mart 2024',
      readTime: '5 dk',
      tags: ['news', 'software'],
      image: '/blog/tunpi-os-2.jpg'
    },
    {
      id: 2,
      title: 'IoT Projelerinde TunPi Kullanımı',
      excerpt: 'TunPi ile IoT projelerinizi nasıl geliştirebileceğinizi öğrenin.',
      author: 'Mehmet Demir',
      date: '1 Mart 2024',
      readTime: '8 dk',
      tags: ['tutorial', 'projects'],
      image: '/blog/iot-projects.jpg'
    },
    {
      id: 3,
      title: 'Yeni Sensör Modülleri',
      excerpt: 'TunPi için geliştirilen yeni sensör modülleri ile tanışın.',
      author: 'Zeynep Kaya',
      date: '28 Şubat 2024',
      readTime: '4 dk',
      tags: ['news', 'hardware'],
      image: '/blog/sensors.jpg'
    },
    {
      id: 4,
      title: 'Linux Komut Satırı İpuçları',
      excerpt: 'TunPi üzerinde Linux komut satırını daha etkili kullanmanın yolları.',
      author: 'Can Yıldız',
      date: '27 Şubat 2024',
      readTime: '6 dk',
      tags: ['tutorial', 'software'],
      image: '/blog/linux-tips.jpg'
    }
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            TunPi ile ilgili en güncel haberler, rehberler ve projeler.
            Topluluğumuzun deneyimlerini ve bilgilerini paylaştığı blog yazıları.
          </p>
        </motion.div>

        {/* Search and Tags */}
        <div className="max-w-3xl mx-auto mb-12 space-y-6">
          {/* Search Bar */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Blog yazısı ara..."
              className="block w-full pl-10 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => setSelectedTag(tag.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedTag === tag.id
                    ? 'bg-white text-black'
                    : 'bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {tag.name}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group"
            >
              {/* Post Image */}
              <div className="relative h-48 bg-zinc-800 group-hover:brightness-110 transition-all">
                {post.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Post Content */}
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-400 mb-4 line-clamp-2">{post.excerpt}</p>

                {/* Post Meta */}
                <div className="flex items-center justify-between text-sm text-zinc-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <FaUser className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaClock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <span>{post.date}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center space-x-1 px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full"
                    >
                      <FaTag className="w-3 h-3" />
                      <span>{tags.find(t => t.id === tag)?.name}</span>
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button className="flex items-center space-x-2 text-white hover:text-zinc-300 transition-colors group/btn">
                  <span>Devamını Oku</span>
                  <FaArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">Aradığınız kriterlere uygun yazı bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage; 