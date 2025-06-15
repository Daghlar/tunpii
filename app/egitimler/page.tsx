'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaPlay, FaClock, FaBook, FaStar, FaUserGraduate } from 'react-icons/fa';

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Tümü' },
    { id: 'beginner', name: 'Başlangıç' },
    { id: 'intermediate', name: 'Orta Seviye' },
    { id: 'advanced', name: 'İleri Seviye' },
    { id: 'hardware', name: 'Donanım' },
    { id: 'software', name: 'Yazılım' }
  ];

  const courses = [
    {
      id: 1,
      title: 'TunPi ile Başlangıç',
      description: 'TunPi\'yi ilk kez kullanmaya başlayanlar için temel eğitim.',
      duration: '2 saat',
      lessons: 12,
      level: 'beginner',
      rating: 4.8,
      students: 1234,
      image: '/courses/getting-started.jpg',
      instructor: 'Ahmet Yılmaz'
    },
    {
      id: 2,
      title: 'IoT Projeleri',
      description: 'TunPi ile IoT projelerini hayata geçirin.',
      duration: '4 saat',
      lessons: 24,
      level: 'intermediate',
      rating: 4.9,
      students: 856,
      image: '/courses/iot-projects.jpg',
      instructor: 'Mehmet Demir'
    },
    {
      id: 3,
      title: 'Sensör Programlama',
      description: 'Çeşitli sensörleri TunPi ile kullanmayı öğrenin.',
      duration: '3 saat',
      lessons: 18,
      level: 'intermediate',
      rating: 4.7,
      students: 645,
      image: '/courses/sensors.jpg',
      instructor: 'Zeynep Kaya'
    },
    {
      id: 4,
      title: 'Linux Sistem Yönetimi',
      description: 'TunPi üzerinde Linux sistem yönetimini öğrenin.',
      duration: '6 saat',
      lessons: 32,
      level: 'advanced',
      rating: 4.9,
      students: 423,
      image: '/courses/linux-admin.jpg',
      instructor: 'Can Yıldız'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || course.level === selectedCategory;
    return matchesSearch && matchesCategory;
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
          <h1 className="text-4xl font-bold mb-4">Eğitimler</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            TunPi ile projeler geliştirmek için ihtiyacınız olan tüm eğitimler burada.
            Başlangıç seviyesinden ileri seviyeye kadar öğrenin.
          </p>
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
              placeholder="Eğitim ara..."
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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all group"
            >
              {/* Course Image */}
              <div className="relative h-48 bg-zinc-800 group-hover:brightness-110 transition-all">
                {course.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <FaPlay className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Course Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors">
                  {course.title}
                </h3>
                <p className="text-zinc-400 mb-4 line-clamp-2">{course.description}</p>

                {/* Course Meta */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-zinc-400">
                  <div className="flex items-center space-x-2">
                    <FaClock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaBook className="w-4 h-4" />
                    <span>{course.lessons} Ders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaStar className="w-4 h-4 text-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaUserGraduate className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Instructor */}
                <div className="text-sm text-zinc-400 mb-4">
                  Eğitmen: {course.instructor}
                </div>

                {/* Action Button */}
                <button className="w-full bg-white text-black hover:bg-zinc-200 py-2 px-4 rounded-lg font-medium transition-colors">
                  Eğitime Başla
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">Aradığınız kriterlere uygun eğitim bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage; 