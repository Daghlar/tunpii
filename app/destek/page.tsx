'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHeadset, FaEnvelope, FaComments, FaQuestionCircle, FaArrowRight } from 'react-icons/fa';

const Destek = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  const supportChannels = [
    {
      title: 'Forum Desteği',
      description: 'Topluluk forumunda sorularınızı sorun ve diğer kullanıcılarla tartışın.',
      icon: <FaComments className="w-6 h-6" />,
      link: '/forum'
    },
    {
      title: 'E-posta Desteği',
      description: 'Teknik destek ekibimizle doğrudan iletişime geçin.',
      icon: <FaEnvelope className="w-6 h-6" />,
      link: 'mailto:destek@tunpi.com'
    },
    {
      title: 'Canlı Destek',
      description: 'Acil sorunlarınız için canlı destek hattımız.',
      icon: <FaHeadset className="w-6 h-6" />,
      link: '/canli-destek'
    }
  ];

  const faqs = [
    {
      question: 'TunPi nasıl kurulur?',
      answer: 'TunPi kurulumu için indirme sayfasından son sürümü indirin ve kurulum kılavuzunu takip edin.'
    },
    {
      question: 'Yazılım güncellemeleri nasıl yapılır?',
      answer: 'Sistem ayarları menüsünden "Güncellemeler" sekmesini kullanarak yazılımınızı güncelleyebilirsiniz.'
    },
    {
      question: 'GPIO pinlerini nasıl kullanabilirim?',
      answer: 'GPIO pinlerini Python veya C++ kullanarak programlayabilirsiniz. Detaylı bilgi için dokümanlara göz atın.'
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Destek</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Size yardımcı olmak için buradayız. Aşağıdaki destek kanallarından size en uygun olanı seçin.
          </p>
        </motion.div>

        {/* Support Channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {supportChannels.map((channel, index) => (
            <motion.a
              key={channel.title}
              href={channel.link}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-white/30 transition-all"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-lg bg-white/10 text-white group-hover:bg-white group-hover:text-black transition-all">
                  {channel.icon}
                </div>
                <h3 className="text-lg font-semibold">{channel.title}</h3>
              </div>
              <p className="text-zinc-400 mb-4">{channel.description}</p>
              <div className="flex items-center text-sm text-white group-hover:translate-x-2 transition-transform">
                <span>Daha fazla bilgi</span>
                <FaArrowRight className="ml-2 w-4 h-4" />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* FAQs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Sık Sorulan Sorular</h2>
            <p className="text-zinc-400">En çok sorulan sorulara hızlı cevaplar</p>
          </div>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-white/30 transition-all"
              >
                <div className="flex items-start space-x-4">
                  <FaQuestionCircle className="w-6 h-6 text-white mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-zinc-400">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">İletişim Formu</h2>
            <p className="text-zinc-400">Bize doğrudan mesaj gönderin</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Adınız
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-posta Adresiniz
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Konu
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Mesajınız
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-zinc-200 py-3 px-6 rounded-xl font-medium transition-all"
            >
              Gönder
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Destek; 