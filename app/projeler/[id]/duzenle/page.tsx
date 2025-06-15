'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function ProjeDuzenle() {
  const params = useParams();
  const projeId = params.id;

  const [formData, setFormData] = useState({
    baslik: '',
    aciklama: '',
    malzemeler: '',
    adimlar: '',
    etiketler: '',
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProje = async () => {
      try {
        // Burada gerçek bir API çağrısı yapılacak
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Örnek veri
        setFormData({
          baslik: 'Örnek Proje',
          aciklama: 'Bu bir örnek proje açıklamasıdır.',
          malzemeler: 'Malzeme 1\nMalzeme 2\nMalzeme 3',
          adimlar: 'Adım 1\nAdım 2\nAdım 3',
          etiketler: 'etiket1, etiket2, etiket3',
        });
      } catch (err) {
        setError('Proje bilgileri yüklenirken bir hata oluştu.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProje();
  }, [projeId]);

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
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Burada gerçek bir API çağrısı yapılacak
      console.log('Proje güncelleme isteği gönderiliyor:', formData);
      // Başarılı güncelleme sonrası yönlendirme
      window.location.href = `/projeler/${projeId}`;
    } catch (err) {
      setError('Proje güncellenirken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TunPi Logo"
              width={100}
              height={100}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <div className="bg-gray-800 rounded-lg p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Projeyi Düzenle</h1>

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg p-4 mb-6">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="baslik" className="block text-sm font-medium mb-1">
                Proje Başlığı
              </label>
              <input
                type="text"
                id="baslik"
                name="baslik"
                value={formData.baslik}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="aciklama" className="block text-sm font-medium mb-1">
                Proje Açıklaması
              </label>
              <textarea
                id="aciklama"
                name="aciklama"
                value={formData.aciklama}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="malzemeler" className="block text-sm font-medium mb-1">
                Gerekli Malzemeler
              </label>
              <textarea
                id="malzemeler"
                name="malzemeler"
                value={formData.malzemeler}
                onChange={handleChange}
                rows={4}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Her malzemeyi yeni satıra yazın"
              />
            </div>

            <div>
              <label htmlFor="adimlar" className="block text-sm font-medium mb-1">
                Yapım Adımları
              </label>
              <textarea
                id="adimlar"
                name="adimlar"
                value={formData.adimlar}
                onChange={handleChange}
                rows={6}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Her adımı yeni satıra yazın"
              />
            </div>

            <div>
              <label htmlFor="etiketler" className="block text-sm font-medium mb-1">
                Etiketler
              </label>
              <input
                type="text"
                id="etiketler"
                name="etiketler"
                value={formData.etiketler}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Etiketleri virgülle ayırarak yazın"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50"
              >
                {isSubmitting ? 'Güncelleniyor...' : 'Değişiklikleri Kaydet'}
              </button>
              <Link
                href={`/projeler/${projeId}`}
                className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200 text-center"
              >
                İptal
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 