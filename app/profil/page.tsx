'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaCog,
  FaCode,
  FaStar,
  FaUsers,
  FaEdit
} from 'react-icons/fa'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('projects')
  const [isEditing, setIsEditing] = useState(false)

  const user = {
    name: 'Ahmet Yılmaz',
    username: '@ahmetyilmaz',
    bio: 'IoT ve gömülü sistemler üzerine çalışan bir yazılım geliştiricisi. Açık kaynak projelere katkıda bulunmayı seviyorum.',
    location: 'İstanbul, Türkiye',
    joinDate: 'Mart 2024',
    stats: {
      projects: 12,
      contributions: 156,
      followers: 89,
      following: 134
    },
    social: {
      github: 'github.com/ahmetyilmaz',
      twitter: 'twitter.com/ahmetyilmaz',
      linkedin: 'linkedin.com/in/ahmetyilmaz'
    }
  }

  const projects = [
    {
      id: 1,
      name: 'IoT Sensör Monitörü',
      description: 'Raspberry Pi tabanlı sensör verilerini izleme sistemi',
      stars: 45,
      forks: 12
    },
    {
      id: 2,
      name: 'Akıllı Ev Kontrolü',
      description: 'ESP32 ile ev otomasyonu projesi',
      stars: 32,
      forks: 8
    },
    {
      id: 3,
      name: 'Veri Görselleştirme',
      description: 'IoT verilerini gerçek zamanlı görselleştirme aracı',
      stars: 28,
      forks: 5
    }
  ]

  const activities = [
    {
      id: 1,
      type: 'commit',
      project: 'IoT Sensör Monitörü',
      description: 'Sensör veri toplama optimizasyonu',
      date: '2 saat önce'
    },
    {
      id: 2,
      type: 'issue',
      project: 'Akıllı Ev Kontrolü',
      description: 'Yeni özellik önerisi: Enerji tüketimi takibi',
      date: '1 gün önce'
    },
    {
      id: 3,
      type: 'pull',
      project: 'Veri Görselleştirme',
      description: 'Grafik performans iyileştirmesi',
      date: '3 gün önce'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 bg-zinc-800 rounded-xl flex items-center justify-center">
                  <FaUser className="w-12 h-12 text-zinc-600" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
                  <p className="text-zinc-400 mb-2">{user.username}</p>
                  <p className="text-zinc-300 max-w-2xl mb-4">{user.bio}</p>
                  <div className="flex items-center gap-4 text-sm text-zinc-400">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="w-4 h-4" />
                      {user.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="w-4 h-4" />
                      Katılım: {user.joinDate}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
              >
                <FaEdit className="w-4 h-4" />
                Profili Düzenle
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold">{user.stats.projects}</div>
                <div className="text-sm text-zinc-400">Proje</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{user.stats.contributions}</div>
                <div className="text-sm text-zinc-400">Katkı</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{user.stats.followers}</div>
                <div className="text-sm text-zinc-400">Takipçi</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">{user.stats.following}</div>
                <div className="text-sm text-zinc-400">Takip Edilen</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href={`https://${user.social.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href={`https://${user.social.twitter}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href={`https://${user.social.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="flex gap-4 border-b border-zinc-800">
            <button
              onClick={() => setActiveTab('projects')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'projects'
                  ? 'text-white border-b-2 border-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Projeler
            </button>
            <button
              onClick={() => setActiveTab('activity')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'activity'
                  ? 'text-white border-b-2 border-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Aktiviteler
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === 'settings'
                  ? 'text-white border-b-2 border-white'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Ayarlar
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all"
                >
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                  <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                  <div className="flex items-center gap-4 text-sm text-zinc-500">
                    <span className="flex items-center gap-1">
                      <FaStar className="w-4 h-4" />
                      {project.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaCode className="w-4 h-4" />
                      {project.forks}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'activity' && (
            <div className="space-y-4">
              {activities.map((activity) => (
                <div
                  key={activity.id}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-zinc-800 rounded-lg flex items-center justify-center">
                      <FaCode className="w-4 h-4 text-zinc-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{activity.project}</h3>
                      <p className="text-zinc-400 text-sm mb-2">{activity.description}</p>
                      <span className="text-zinc-500 text-sm">{activity.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-6">Profil Ayarları</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    İsim
                  </label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">
                    Biyografi
                  </label>
                  <textarea
                    defaultValue={user.bio}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-zinc-200 transition-colors"
                >
                  Değişiklikleri Kaydet
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ProfilePage 