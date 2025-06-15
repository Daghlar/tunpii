'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGithub, FaTwitter, FaDiscord } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log('Form data:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: 'Adres',
      details: ['Teknoloji Mahallesi', 'İnovasyon Caddesi No: 42', 'İstanbul, Türkiye']
    },
    {
      icon: FaPhone,
      title: 'Telefon',
      details: ['+90 (212) 555 0123', '+90 (532) 123 4567']
    },
    {
      icon: FaEnvelope,
      title: 'E-posta',
      details: ['info@tunpi.com', 'destek@tunpi.com']
    }
  ];

  const socialLinks = [
    { icon: FaGithub, label: 'GitHub', url: 'https://github.com/tunpi' },
    { icon: FaTwitter, label: 'Twitter', url: 'https://twitter.com/tunpi' },
    { icon: FaDiscord, label: 'Discord', url: 'https://discord.gg/tunpi' }
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
          <h1 className="text-4xl font-bold mb-4">İletişim</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Sorularınız, önerileriniz veya işbirliği teklifleriniz için
            bizimle iletişime geçebilirsiniz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6"
              >
                <div className="flex items-start gap-4">
                  <info.icon className="w-6 h-6 text-zinc-400 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-zinc-400">{detail}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-white transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-400 mb-2">
                  İsim
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-zinc-400 mb-2">
                  E-posta
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm text-zinc-400 mb-2">
                  Konu
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                >
                  <option value="">Seçiniz</option>
                  <option value="support">Teknik Destek</option>
                  <option value="business">İş Birliği</option>
                  <option value="feedback">Geri Bildirim</option>
                  <option value="other">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-zinc-400 mb-2">
                  Mesaj
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-6 rounded-xl font-semibold hover:bg-zinc-200 transition-colors"
              >
                Gönder
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-2 h-[400px]">
            {/* Harita komponenti buraya eklenecek */}
            <div className="w-full h-full bg-zinc-800 rounded-lg" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage; 