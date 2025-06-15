'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function ProjeOlustur() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    baslik: '',
    aciklama: '',
    malzemeler: '',
    adimlar: '',
    etiketler: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // Form doğrulama
      if (!formData.baslik.trim()) {
        throw new Error('Proje başlığı gereklidir');
      }
      if (!formData.aciklama.trim()) {
        throw new Error('Proje açıklaması gereklidir');
      }

      // API çağrısı simülasyonu
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Proje oluşturma isteği gönderiliyor:', formData);
      
      // Başarılı oluşturma sonrası yönlendirme
      router.push('/projeler');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Proje oluşturulurken bir hata oluştu');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex justify-between items-center mb-8">
          <Link href="/projeler" className="text-blue-400 hover:text-blue-300 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Projelere Dön
          </Link>
          <h1 className="text-2xl font-bold">Yeni Proje Oluştur</h1>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg p-4 mb-6">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="baslik" className="block text-sm font-medium mb-2">
              Proje Başlığı
            </label>
            <input
              type="text"
              id="baslik"
              name="baslik"
              value={formData.baslik}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Projenizin başlığını girin"
              required
            />
          </div>

          <div>
            <label htmlFor="aciklama" className="block text-sm font-medium mb-2">
              Proje Açıklaması
            </label>
            <textarea
              id="aciklama"
              name="aciklama"
              value={formData.aciklama}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Projenizin detaylı açıklamasını girin"
              required
            />
          </div>

          <div>
            <label htmlFor="malzemeler" className="block text-sm font-medium mb-2">
              Gerekli Malzemeler
            </label>
            <textarea
              id="malzemeler"
              name="malzemeler"
              value={formData.malzemeler}
              onChange={handleChange}
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Her malzemeyi yeni satıra yazın"
            />
          </div>

          <div>
            <label htmlFor="adimlar" className="block text-sm font-medium mb-2">
              Proje Adımları
            </label>
            <textarea
              id="adimlar"
              name="adimlar"
              value={formData.adimlar}
              onChange={handleChange}
              rows={6}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Her adımı yeni satıra yazın"
            />
          </div>

          <div>
            <label htmlFor="etiketler" className="block text-sm font-medium mb-2">
              Etiketler
            </label>
            <input
              type="text"
              id="etiketler"
              name="etiketler"
              value={formData.etiketler}
              onChange={handleChange}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Etiketleri virgülle ayırarak girin"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {isSubmitting ? 'Oluşturuluyor...' : 'Projeyi Oluştur'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 