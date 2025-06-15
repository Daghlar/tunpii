'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SifreSifirla() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Şifre sıfırlama işlemi burada yapılacak
    console.log('Şifre sıfırlama isteği gönderildi:', email);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/logo.png"
              alt="TunPi Logo"
              width={100}
              height={100}
              className="mx-auto"
            />
          </Link>
          <h1 className="text-3xl font-bold mt-4">Şifre Sıfırlama</h1>
          <p className="text-gray-400 mt-2">
            Şifrenizi sıfırlamak için e-posta adresinizi girin
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              E-posta
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Şifre Sıfırlama Bağlantısı Gönder
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Giriş sayfasına dönmek ister misiniz?{' '}
            <Link href="/giris" className="text-blue-500 hover:text-blue-400">
              Giriş Yap
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
} 