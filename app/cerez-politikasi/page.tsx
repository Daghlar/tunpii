'use client';

import { motion } from 'framer-motion';
import { FaCookie, FaShieldAlt, FaCog, FaInfoCircle, FaCheck } from 'react-icons/fa';

const CookiePolicyPage = () => {
  const sections = [
    {
      icon: FaInfoCircle,
      title: 'Çerez Nedir?',
      content: 'Çerezler, web sitemizi ziyaret ettiğinizde tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Bu dosyalar size daha iyi bir deneyim sunmamıza yardımcı olur.'
    },
    {
      icon: FaCog,
      title: 'Çerez Türleri',
      content: 'Zorunlu çerezler, analitik çerezler, işlevsel çerezler ve hedefleme çerezleri olmak üzere farklı türde çerezler kullanıyoruz.',
      details: [
        'Zorunlu Çerezler: Sitenin çalışması için gerekli',
        'Analitik Çerezler: Kullanım istatistikleri için',
        'İşlevsel Çerezler: Tercihlerinizi hatırlamak için',
        'Hedefleme Çerezleri: Size özel içerik sunmak için'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Çerez Güvenliği',
      content: 'Çerezler aracılığıyla toplanan verileriniz güvenli bir şekilde saklanır ve üçüncü taraflarla paylaşılmaz.'
    }
  ];

  const cookieSettings = [
    {
      title: 'Zorunlu Çerezler',
      description: 'Web sitesinin temel işlevleri için gerekli',
      required: true
    },
    {
      title: 'Analitik Çerezler',
      description: 'Kullanıcı deneyimini iyileştirmek için kullanım verilerini toplar',
      required: false
    },
    {
      title: 'İşlevsel Çerezler',
      description: 'Kişiselleştirilmiş deneyim için tercihlerinizi hatırlar',
      required: false
    },
    {
      title: 'Hedefleme Çerezleri',
      description: 'İlgi alanlarınıza göre özelleştirilmiş içerik sunar',
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <FaCookie className="w-16 h-16 mx-auto mb-6 text-zinc-400" />
          <h1 className="text-4xl font-bold mb-4">Çerez Politikası</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Web sitemizde kullanılan çerezler hakkında bilgi edinin ve
            çerez tercihlerinizi yönetin.
          </p>
        </motion.div>

        {/* Sections */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-8 mb-16"
        >
          {sections.map((section) => (
            <div
              key={section.title}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <section.icon className="w-6 h-6 text-zinc-400 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-2">{section.title}</h2>
                  <p className="text-zinc-400 mb-4">{section.content}</p>
                  {section.details && (
                    <ul className="space-y-2">
                      {section.details.map((detail, i) => (
                        <li key={i} className="flex items-center text-sm text-zinc-500">
                          <span className="w-1.5 h-1.5 bg-zinc-500 rounded-full mr-2" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cookie Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Çerez Ayarları</h2>
          <div className="space-y-4">
            {cookieSettings.map((setting) => (
              <div
                key={setting.title}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 flex items-center justify-between"
              >
                <div>
                  <h3 className="text-lg font-semibold mb-1">{setting.title}</h3>
                  <p className="text-zinc-400 text-sm">{setting.description}</p>
                </div>
                {setting.required ? (
                  <span className="text-zinc-400 text-sm">Zorunlu</span>
                ) : (
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-white/10 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
                  </label>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">
            Ayarları Kaydet
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CookiePolicyPage; 