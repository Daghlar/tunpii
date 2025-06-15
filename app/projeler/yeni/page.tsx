'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function YeniProje() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Burada gerçek API çağrısı yapılacak
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/projeler');
    } catch (err) {
      setError('Proje oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <Link
              href="/projeler"
              className="text-blue-400 hover:text-blue-300 flex items-center"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Projelere Dön
            </Link>
          </div>

          <div className="bg-gray-800 rounded-lg p-8">
            <h1 className="text-3xl font-bold mb-8">Yeni Proje Oluştur</h1>

            {error && (
              <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg p-4 mb-6">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Proje Başlığı
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Projenizin başlığını girin"
                />
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Proje Açıklaması
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={4}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Projenizi kısaca açıklayın"
                />
              </div>

              <div>
                <label htmlFor="tags" className="block text-sm font-medium mb-2">
                  Etiketler
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Etiketleri virgülle ayırarak girin (örn: IoT, Python, Otomasyon)"
                />
              </div>

              <div>
                <label htmlFor="image" className="block text-sm font-medium mb-2">
                  Proje Görseli
                </label>
                <div className="flex items-center justify-center w-full">
                  <label className="w-full flex flex-col items-center px-4 py-6 bg-gray-700 text-gray-300 rounded-lg tracking-wide border border-gray-600 cursor-pointer hover:bg-gray-600 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="mt-2 text-sm">Görsel seçin veya sürükleyin</span>
                    <input type="file" className="hidden" accept="image/*" />
                  </label>
                </div>
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-2">
                  Proje İçeriği
                </label>
                <textarea
                  id="content"
                  name="content"
                  rows={8}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Projenizin detaylı açıklamasını, kullanılan malzemeleri ve adımları yazın"
                />
              </div>

              <div className="flex justify-end space-x-4">
                <Link
                  href="/projeler"
                  className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition-colors"
                >
                  İptal
                </Link>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Oluşturuluyor...' : 'Projeyi Oluştur'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 