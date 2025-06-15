'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaLock, FaGithub, FaGoogle } from 'react-icons/fa';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data:', formData);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-md mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">Hesap Oluşturun</h1>
            <p className="text-zinc-400">TunPi topluluğuna katılın</p>
          </div>

          {/* Social Register */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <button className="flex items-center justify-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 rounded-lg transition-colors">
              <FaGithub className="w-5 h-5" />
              <span>GitHub</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-3 rounded-lg transition-colors">
              <FaGoogle className="w-5 h-5" />
              <span>Google</span>
            </button>
          </div>

          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-zinc-800"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-zinc-900/50 text-zinc-400">veya e-posta ile kayıt olun</span>
            </div>
          </div>

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Ad Soyad
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-zinc-400" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full pl-10 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                E-posta Adresi
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-zinc-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                  placeholder="ornek@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-2">
                Şifre
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-zinc-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full pl-10 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium mb-2">
                Şifre Tekrar
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-zinc-400" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="block w-full pl-10 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 rounded border-zinc-800 bg-zinc-900/50 text-white focus:ring-white/10"
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-zinc-400">
                <Link href="/kullanim-kosullari" className="text-white hover:text-zinc-300">
                  Kullanım koşullarını
                </Link>{' '}
                kabul ediyorum
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black hover:bg-zinc-200 py-3 px-6 rounded-xl font-medium transition-all"
            >
              Kayıt Ol
            </button>
          </form>

          <div className="mt-6 text-center text-sm text-zinc-400">
            Zaten hesabınız var mı?{' '}
            <Link href="/giris" className="text-white hover:text-zinc-300 transition-colors">
              Giriş yapın
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage; 