'use client';

import { motion } from 'framer-motion';
import {
  FaRocket,
  FaCode,
  FaCloud,
  FaShieldAlt,
  FaBolt,
  FaTools,
  FaUsers,
  FaMobile,
  FaLightbulb,
  FaCogs,
  FaChartLine,
  FaLock
} from 'react-icons/fa';

const FeaturesPage = () => {
  const mainFeatures = [
    {
      icon: FaRocket,
      title: 'Hızlı Geliştirme',
      description: 'Hazır şablonlar ve araçlarla projelerinizi hızlıca hayata geçirin.'
    },
    {
      icon: FaCode,
      title: 'Kolay Entegrasyon',
      description: 'Popüler kütüphaneler ve API\'ler ile sorunsuz entegrasyon.'
    },
    {
      icon: FaCloud,
      title: 'Bulut Desteği',
      description: 'Projelerinizi bulut üzerinde yönetin ve izleyin.'
    },
    {
      icon: FaShieldAlt,
      title: 'Güvenli Altyapı',
      description: 'End-to-end şifreleme ve güvenlik önlemleri.'
    }
  ];

  const technicalFeatures = [
    {
      icon: FaBolt,
      title: 'Yüksek Performans',
      description: 'Optimize edilmiş kod ve verimli kaynak kullanımı.',
      details: [
        'Düşük gecikme süresi',
        'Minimum kaynak tüketimi',
        'Hızlı açılış süresi'
      ]
    },
    {
      icon: FaTools,
      title: 'Geliştirici Araçları',
      description: 'Kapsamlı debug ve geliştirme araçları.',
      details: [
        'Gerçek zamanlı log takibi',
        'Detaylı hata ayıklama',
        'Performans analizi'
      ]
    },
    {
      icon: FaUsers,
      title: 'Topluluk Özellikleri',
      description: 'Geliştiriciler için sosyal özellikler.',
      details: [
        'Proje paylaşımı',
        'Kod inceleme',
        'Ortak çalışma'
      ]
    }
  ];

  const additionalFeatures = [
    {
      icon: FaMobile,
      title: 'Mobil Uyumluluk',
      description: 'Tüm cihazlardan erişim ve kontrol.'
    },
    {
      icon: FaLightbulb,
      title: 'Akıllı Otomasyon',
      description: 'Görevleri otomatikleştirin ve iş akışlarını optimize edin.'
    },
    {
      icon: FaCogs,
      title: 'Özelleştirme',
      description: 'İhtiyaçlarınıza göre özelleştirilebilir yapı.'
    },
    {
      icon: FaChartLine,
      title: 'Analitik',
      description: 'Detaylı raporlar ve performans analizleri.'
    },
    {
      icon: FaLock,
      title: 'Erişim Kontrolü',
      description: 'Rol tabanlı yetkilendirme sistemi.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Özellikler</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            TunPi'nin sunduğu güçlü özellikler ile projelerinizi
            daha hızlı ve verimli bir şekilde geliştirin.
          </p>
        </motion.div>

        {/* Main Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {mainFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all"
            >
              <feature.icon className="w-8 h-8 text-zinc-400 mb-4" />
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Technical Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Teknik Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
              >
                <feature.icon className="w-8 h-8 text-zinc-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, i) => (
                    <li key={i} className="flex items-center text-sm text-zinc-500">
                      <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mr-2" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Ek Özellikler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all"
              >
                <feature.icon className="w-6 h-6 text-zinc-400 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Hemen Başlayın</h2>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              TunPi'nin tüm özelliklerini keşfedin ve projelerinizi
              geliştirmeye hemen başlayın.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">
              Ücretsiz Deneyin
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FeaturesPage; 