'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaComments, FaUsers, FaHeart, FaClock, FaArrowRight } from 'react-icons/fa';

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'announcements', name: 'Duyurular' },
    { id: 'questions', name: 'Sorular' },
    { id: 'projects', name: 'Projeler' },
    { id: 'general', name: 'Genel' }
  ];

  const discussions = [
    {
      id: 1,
      title: 'TunPi OS 2.0 Beta Test Duyurusu',
      excerpt: 'Yeni TunPi OS 2.0 beta sürümünü test etmek için gönüllüler arıyoruz.',
      author: 'TunPi Ekibi',
      date: '2 Mart 2024',
      category: 'announcements',
      comments: 15,
      likes: 32,
      views: 245
    },
    {
      id: 2,
      title: 'GPIO Pinleri ile LED Kontrolü',
      excerpt: 'TunPi üzerinde GPIO pinlerini kullanarak LED kontrolü nasıl yapılır?',
      author: 'Ahmet Yılmaz',
      date: '1 Mart 2024',
      category: 'questions',
      comments: 8,
      likes: 12,
      views: 156
    },
    {
      id: 3,
      title: 'Akıllı Ev Projesi Paylaşımı',
      excerpt: 'TunPi kullanarak geliştirdiğim akıllı ev sistemini sizlerle paylaşmak istiyorum.',
      author: 'Mehmet Demir',
      date: '28 Şubat 2024',
      category: 'projects',
      comments: 25,
      likes: 45,
      views: 320
    },
    {
      id: 4,
      title: 'Yeni Başlayanlar İçin Öneriler',
      excerpt: 'TunPi ile projelere başlamak isteyenler için önerilerim ve ipuçlarım.',
      author: 'Zeynep Kaya',
      date: '27 Şubat 2024',
      category: 'general',
      comments: 18,
      likes: 28,
      views: 275
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesSearch = discussion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         discussion.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const stats = [
    { label: 'Üye', value: '5,234', icon: FaUsers },
    { label: 'Tartışma', value: '1,829', icon: FaComments },
    { label: 'Katkı', value: '12,456', icon: FaHeart }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Topluluk</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            TunPi topluluğuna katılın, sorular sorun, projelerinizi paylaşın ve
            diğer geliştiricilerle etkileşime geçin.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-zinc-400" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Search and Categories */}
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
              placeholder="Tartışmalarda ara..."
              className="block w-full pl-10 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-white text-black'
                    : 'bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Discussions */}
        <div className="space-y-4">
          {filteredDiscussions.map((discussion) => (
            <motion.div
              key={discussion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 hover:text-white transition-colors">
                    {discussion.title}
                  </h3>
                  <p className="text-zinc-400 mb-4">{discussion.excerpt}</p>
                  
                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400">
                    <span>{discussion.author}</span>
                    <span className="flex items-center gap-1">
                      <FaClock className="w-4 h-4" />
                      {discussion.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaComments className="w-4 h-4" />
                      {discussion.comments} yorum
                    </span>
                    <span className="flex items-center gap-1">
                      <FaHeart className="w-4 h-4" />
                      {discussion.likes} beğeni
                    </span>
                  </div>
                </div>

                <button className="flex items-center space-x-2 text-white hover:text-zinc-300 transition-colors group">
                  <span>Görüntüle</span>
                  <FaArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredDiscussions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">Aradığınız kriterlere uygun tartışma bulunamadı.</p>
          </div>
        )}

        {/* Create Discussion Button */}
        <div className="mt-8 text-center">
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">
            Yeni Tartışma Başlat
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage; 