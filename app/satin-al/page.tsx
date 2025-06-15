'use client';

import { motion } from 'framer-motion';
import { FaCheck, FaShoppingCart, FaCreditCard, FaShieldAlt } from 'react-icons/fa';

const PricingPage = () => {
  const plans = [
    {
      name: 'Başlangıç',
      price: '599',
      description: 'Hobi projeleri ve öğrenme amaçlı kullanım için ideal',
      features: [
        'TunPi Ana Kart',
        'GPIO Pinleri',
        'Temel Dokümantasyon',
        'Forum Desteği',
        '1 Yıl Garanti'
      ]
    },
    {
      name: 'Profesyonel',
      price: '899',
      description: 'Profesyonel projeler ve geliştiriciler için',
      features: [
        'TunPi Pro Ana Kart',
        'Gelişmiş GPIO Pinleri',
        'Detaylı Dokümantasyon',
        'Öncelikli Destek',
        'Örnek Projeler',
        '2 Yıl Garanti'
      ]
    },
    {
      name: 'Kurumsal',
      price: '1499',
      description: 'Kurumsal çözümler ve büyük projeler için',
      features: [
        'TunPi Enterprise Ana Kart',
        'Endüstriyel GPIO Pinleri',
        'Kapsamlı Dokümantasyon',
        '7/24 Destek',
        'Özel Eğitim',
        'Proje Danışmanlığı',
        '3 Yıl Garanti'
      ]
    }
  ];

  const features = [
    {
      title: 'Güvenli Ödeme',
      description: '256-bit SSL şifreleme ile güvenli ödeme',
      icon: <FaCreditCard className="w-6 h-6" />
    },
    {
      title: 'Hızlı Teslimat',
      description: '2-3 iş günü içinde kargoya teslim',
      icon: <FaShoppingCart className="w-6 h-6" />
    },
    {
      title: 'Garanti',
      description: 'Minimum 1 yıl garanti süresi',
      icon: <FaShieldAlt className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Fiyatlandırma</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            İhtiyaçlarınıza en uygun TunPi paketini seçin ve hemen geliştirmeye başlayın.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-white/30 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-zinc-400 ml-2">TL</span>
              </div>
              <p className="text-zinc-400 mb-6">{plan.description}</p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <FaCheck className="w-5 h-5 text-white" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white text-black hover:bg-zinc-200 py-3 px-6 rounded-xl font-medium transition-all">
                Satın Al
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.5 }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-white/30 transition-all"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-white/10 text-white">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
              </div>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PricingPage; 