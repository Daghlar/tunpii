'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaGithub, FaExternalLinkAlt, FaStar } from 'react-icons/fa';

const ProjectsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Örnek proje verileri
  const projects = [
    {
      id: 1,
      title: 'TunPi OS',
      description: 'Raspberry Pi için özelleştirilmiş Linux tabanlı işletim sistemi.',
      tags: ['Linux', 'Raspberry Pi', 'Python'],
      stars: 128,
      githubUrl: '#',
      demoUrl: '#',
      author: 'TunPi Team',
      image: '/projects/tunpi-os.jpg'
    },
    {
      id: 2,
      title: 'TunPi CLI',
      description: 'TunPi projelerini yönetmek için komut satırı arayüzü.',
      tags: ['CLI', 'Node.js', 'TypeScript'],
      stars: 84,
      githubUrl: '#',
      demoUrl: '#',
      author: 'TunPi Team',
      image: '/projects/tunpi-cli.jpg'
    },
    // Daha fazla proje eklenebilir
  ];

  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Projeler</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            TunPi topluluğu tarafından geliştirilen açık kaynak projeler.
            İstediğiniz projeye katkıda bulunabilir veya kendi projenizi ekleyebilirsiniz.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Proje ara..."
              className="block w-full pl-10 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden hover:border-zinc-700 transition-all"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-zinc-800">
                {project.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center space-x-2 text-zinc-400">
                    <FaStar className="w-4 h-4" />
                    <span>{project.stars}</span>
                  </div>
                </div>

                <p className="text-zinc-400 mb-4">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-zinc-800 text-zinc-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Author */}
                <div className="text-sm text-zinc-400 mb-4">
                  Geliştirici: {project.author}
                </div>

                {/* Links */}
                <div className="flex space-x-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">Aradığınız kriterlere uygun proje bulunamadı.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsPage; 