'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaBook, FaCode, FaTools, FaLightbulb, FaSearch } from 'react-icons/fa';

const DocPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      title: 'Başlangıç',
      icon: <FaBook className="w-5 h-5" />,
      docs: [
        { title: 'TunPi Nedir?', path: '/baslangic/tunpi-nedir' },
        { title: 'Hızlı Kurulum', path: '/baslangic/kurulum' },
        { title: 'İlk Adımlar', path: '/baslangic/ilk-adimlar' }
      ]
    },
    {
      title: 'Geliştirme',
      icon: <FaCode className="w-5 h-5" />,
      docs: [
        { title: 'GPIO Kullanımı', path: '/gelistirme/gpio' },
        { title: 'Python ile Programlama', path: '/gelistirme/python' },
        { title: 'C++ ile Programlama', path: '/gelistirme/cpp' }
      ]
    },
    {
      title: 'Donanım',
      icon: <FaTools className="w-5 h-5" />,
      docs: [
        { title: 'Teknik Özellikler', path: '/donanim/ozellikler' },
        { title: 'Pin Diyagramı', path: '/donanim/pin-diyagram' },
        { title: 'Güç Yönetimi', path: '/donanim/guc-yonetimi' }
      ]
    },
    {
      title: 'Projeler',
      icon: <FaLightbulb className="w-5 h-5" />,
      docs: [
        { title: 'Örnek Projeler', path: '/projeler/ornekler' },
        { title: 'Topluluk Projeleri', path: '/projeler/topluluk' },
        { title: 'Proje Fikirleri', path: '/projeler/fikirler' }
      ]
    }
  ];

  const filteredCategories = categories.map(category => ({
    ...category,
    docs: category.docs.filter(doc =>
      doc.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.docs.length > 0);

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Dökümanlar
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto"
          >
            TunPi'nin tüm özelliklerini keşfedin ve projelerinizi geliştirin.
          </motion.p>
        </div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder="Dokümanlarda ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-3 pl-12 pr-4 rounded-xl bg-zinc-900/50 border border-zinc-800 focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
            />
          </div>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="group"
            >
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-zinc-800 text-white group-hover:text-blue-400 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.docs.map((doc) => (
                    <li key={doc.path}>
                      <a
                        href={doc.path}
                        className="block py-2 px-3 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {doc.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocPage; 