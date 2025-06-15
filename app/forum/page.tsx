'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaFire, FaClock, FaComment, FaUser, FaSearch, FaTags, FaPlus } from 'react-icons/fa';

const ForumPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const topics = [
    {
      id: 1,
      title: 'GPIO pinlerini Python ile nasıl kontrol edebilirim?',
      author: 'ahmet_dev',
      replies: 12,
      views: 234,
      category: 'GPIO',
      lastActivity: '2 saat önce',
      isHot: true
    },
    {
      id: 2,
      title: 'TunPi ile IoT projesi geliştirme',
      author: 'tech_master',
      replies: 8,
      views: 156,
      category: 'IoT',
      lastActivity: '4 saat önce',
      isHot: false
    },
    {
      id: 3,
      title: 'Sensör verilerini web arayüzünde gösterme',
      author: 'webdev_pro',
      replies: 15,
      views: 289,
      category: 'Web',
      lastActivity: '6 saat önce',
      isHot: true
    },
    {
      id: 4,
      title: 'TunPi üzerinde Docker kullanımı',
      author: 'docker_expert',
      replies: 6,
      views: 142,
      category: 'Docker',
      lastActivity: '1 gün önce',
      isHot: false
    }
  ];

  const categories = [
    { name: 'Tümü', count: 156 },
    { name: 'GPIO', count: 45 },
    { name: 'IoT', count: 32 },
    { name: 'Web', count: 28 },
    { name: 'Docker', count: 21 },
    { name: 'Python', count: 18 },
    { name: 'Linux', count: 12 }
  ];

  const filteredTopics = topics.filter(topic =>
    topic.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
    topic.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">Forum</h1>
            <p className="text-zinc-400 mt-2">TunPi topluluğuna katılın ve deneyimlerinizi paylaşın</p>
          </motion.div>
          
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-xl transition-all"
          >
            <FaPlus className="w-4 h-4" />
            <span>Yeni Konu</span>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Search */}
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                placeholder="Forum'da ara..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 pl-12 pr-4 rounded-xl bg-zinc-900/50 border border-zinc-800 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
              />
            </div>

            {/* Categories */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <FaTags className="text-zinc-400" />
                <h2 className="text-lg font-semibold">Kategoriler</h2>
              </div>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name}>
                    <button className="w-full flex justify-between items-center py-2 px-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors">
                      <span>{category.name}</span>
                      <span className="bg-zinc-800 px-2 py-1 rounded-full text-xs">
                        {category.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Topics List */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="space-y-4">
              {filteredTopics.map((topic, index) => (
                <motion.div
                  key={topic.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-white/30 transition-all group"
                >
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-white">
                          {topic.category}
                        </span>
                        {topic.isHot && (
                          <span className="flex items-center space-x-1 text-white">
                            <FaFire className="w-3 h-3" />
                            <span className="text-xs">Popüler</span>
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-white transition-colors">
                        <a href={`/forum/topic/${topic.id}`}>{topic.title}</a>
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-zinc-400">
                        <div className="flex items-center space-x-1">
                          <FaUser className="w-3 h-3" />
                          <span>{topic.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaComment className="w-3 h-3" />
                          <span>{topic.replies} yanıt</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <FaClock className="w-3 h-3" />
                          <span>{topic.lastActivity}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-zinc-500 text-sm">
                      {topic.views} görüntülenme
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ForumPage; 