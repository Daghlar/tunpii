'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Background3D from './components/Background3D';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      <Background3D />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <div className="relative h-full flex items-center">
          <div className="w-full max-w-[2000px] mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Sol Taraf */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="space-y-8"
              >
                <h1 className="text-8xl font-bold tracking-tighter">
                  TUN
                  <span className="text-zinc-500">PI</span>
                </h1>
                
                <p className="text-xl text-zinc-400 max-w-xl">
                  Kredi kartı boyutunda, yüksek performanslı mini bilgisayar. 
                  Sınırsız olasılıklar için tasarlandı.
                </p>

                <div className="flex flex-wrap gap-4">
                  <button className="px-8 py-3 bg-white text-black font-medium rounded-full hover:bg-zinc-200 transition-colors">
                    Teknik Özellikler
                  </button>
                  <button className="px-8 py-3 border border-white rounded-full text-white hover:bg-white/10 transition-colors">
                    Satın Al
                  </button>
                </div>
              </motion.div>

              {/* Sağ Taraf */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className="relative w-full max-w-xl mx-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-transparent rounded-full animate-spin-slow" />
                <div className="relative h-full flex items-center justify-center p-8">
                  <div className="w-full aspect-[16/10] bg-zinc-900 rounded-lg shadow-2xl overflow-hidden relative group">
                    {/* Stylized Board Design */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-[90%] h-[90%] border border-white/10 rounded-md relative">
                        {/* CPU */}
                        <div className="absolute top-1/4 left-1/4 w-14 h-14 bg-zinc-800 border border-white/20 rounded-sm" />
                        {/* RAM */}
                        <div className="absolute top-1/4 right-1/4 w-20 h-7 bg-zinc-800 border border-white/20 rounded-sm" />
                        {/* GPIO Pins */}
                        <div className="absolute top-0 right-0 w-1.5 h-full flex flex-col gap-0.5 p-0.5">
                          {[...Array(20)].map((_, i) => (
                            <div key={i} className="w-full h-0.5 bg-white/20 rounded-full" />
                          ))}
                        </div>
                        {/* Circuit Traces */}
                        <div className="absolute inset-0">
                          <div className="absolute top-1/4 left-1/2 w-px h-1/2 bg-white/10" />
                          <div className="absolute top-1/2 left-1/4 w-1/2 h-px bg-white/10" />
                          <div className="absolute top-1/3 right-1/4 w-1/4 h-px bg-white/10" />
                          <div className="absolute bottom-1/4 left-1/3 w-1/3 h-px bg-white/10" />
                        </div>
                      </div>
                    </div>
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Specs Section */}
      <div className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { label: "İŞLEMCİ", value: "1.5GHz", sub: "Quad Core" },
              { label: "RAM", value: "2GB", sub: "LPDDR4" },
              { label: "BOYUT", value: "85×56", sub: "mm" },
              { label: "GPIO", value: "40+", sub: "Pin" }
            ].map((spec, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-zinc-900 rounded-lg transform transition-transform group-hover:scale-105" />
                <div className="relative p-6 space-y-2">
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">{spec.label}</div>
                  <div className="text-3xl font-bold text-white">{spec.value}</div>
                  <div className="text-sm text-zinc-400">{spec.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 text-white">Kullanım Alanları</h2>
            <p className="text-zinc-400">Sınırsız olasılıklar, sonsuz kullanım.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Yazılım Geliştirme", desc: "Kodlama ve eğitim projeleri" },
              { title: "Robotik", desc: "Otomasyon ve kontrol sistemleri" },
              { title: "Ağ Sunucusu", desc: "Web ve VPN çözümleri" },
              { title: "Siber Güvenlik", desc: "Güvenlik testleri ve analiz" },
              { title: "Medya Merkezi", desc: "Multimedya sistemleri" },
              { title: "IoT Projeleri", desc: "Akıllı cihaz uygulamaları" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-zinc-900 rounded-lg transform transition-transform group-hover:scale-105" />
                <div className="relative p-8 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
                    <div className="w-6 h-px bg-white/50 group-hover:w-8 transition-all" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 