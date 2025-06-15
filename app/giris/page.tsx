'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Örnek kullanıcı kontrolü
    if (email === 'ornek@gmail.com' && password === '1') {
      // Başarılı giriş
      router.push('/profil');
    } else {
      setError('E-posta veya şifre hatalı');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <FaUser className="w-16 h-16 mx-auto mb-6 text-zinc-400" />
          <h1 className="text-3xl font-bold mb-4">Giriş Yap</h1>
          <p className="text-zinc-400">
            Hesabınıza giriş yaparak tüm özelliklere erişin
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-zinc-400 mb-2"
              >
                E-posta Adresi
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-zinc-400" />
                </div>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full pl-10 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                  placeholder="ornek@gmail.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-zinc-400 mb-2"
              >
                Şifre
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-zinc-400" />
                </div>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full pl-10 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {error && (
              <div className="text-red-500 text-sm text-center">{error}</div>
            )}

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-zinc-600 text-white focus:ring-white/10"
                />
                <span className="ml-2 text-zinc-400">Beni hatırla</span>
              </label>
              <Link
                href="/sifremi-unuttum"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Şifremi unuttum
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 px-6 rounded-xl font-semibold hover:bg-zinc-200 transition-colors"
            >
              Giriş Yap
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center text-sm text-zinc-400"
        >
          Hesabınız yok mu?{' '}
          <Link href="/kayit" className="text-white hover:underline">
            Hemen kaydolun
          </Link>
        </motion.div>

        {/* Terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center text-xs text-zinc-500"
        >
          Giriş yaparak{' '}
          <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
            Kullanım Koşulları
          </Link>
          {' '}ve{' '}
          <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
            Gizlilik Politikası
          </Link>
          'nı kabul etmiş olursunuz.
        </motion.div>
      </div>
    </div>
  );
};

export default LoginPage; 