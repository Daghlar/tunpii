'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaEnvelope, FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Şifre sıfırlama e-postası gönderme işlemi burada yapılacak
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/giris"
            className="inline-flex items-center text-zinc-400 hover:text-white transition-colors"
          >
            <FaArrowLeft className="w-4 h-4 mr-2" />
            Giriş sayfasına dön
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <FaLock className="w-16 h-16 mx-auto mb-6 text-zinc-400" />
          <h1 className="text-3xl font-bold mb-4">Şifremi Unuttum</h1>
          <p className="text-zinc-400">
            E-posta adresinizi girin, size şifre sıfırlama bağlantısı gönderelim.
          </p>
        </motion.div>

        {!isSubmitted ? (
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
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black py-3 px-6 rounded-xl font-semibold hover:bg-zinc-200 transition-colors"
              >
                Şifre Sıfırlama Bağlantısı Gönder
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
              <FaEnvelope className="w-12 h-12 mx-auto mb-4 text-zinc-400" />
              <h2 className="text-xl font-semibold mb-2">E-posta Gönderildi</h2>
              <p className="text-zinc-400 mb-6">
                {email} adresine şifre sıfırlama bağlantısı gönderdik.
                Lütfen e-posta kutunuzu kontrol edin.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Farklı bir e-posta adresi dene
              </button>
            </div>
          </motion.div>
        )}

        {/* Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-center text-sm text-zinc-400"
        >
          E-posta almadınız mı?{' '}
          <button className="text-white hover:underline">
            Tekrar gönder
          </button>
          {' '}veya{' '}
          <Link href="/iletisim" className="text-white hover:underline">
            destek ekibimizle iletişime geçin
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage; 