'use client';

import React from 'react';

export default function ProjeOlustur() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Yeni Proje Oluştur</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-4">
          <div>
            <label htmlFor="projeAdi" className="block text-sm font-medium text-gray-700">
              Proje Adı
            </label>
            <input
              type="text"
              id="projeAdi"
              name="projeAdi"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Projenizin adını girin"
            />
          </div>
          
          <div>
            <label htmlFor="aciklama" className="block text-sm font-medium text-gray-700">
              Açıklama
            </label>
            <textarea
              id="aciklama"
              name="aciklama"
              rows={4}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Projeniz hakkında kısa bir açıklama yazın"
            />
          </div>

          <div>
            <label htmlFor="kategori" className="block text-sm font-medium text-gray-700">
              Kategori
            </label>
            <select
              id="kategori"
              name="kategori"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="">Kategori seçin</option>
              <option value="web">Web Geliştirme</option>
              <option value="mobil">Mobil Uygulama</option>
              <option value="desktop">Masaüstü Uygulama</option>
              <option value="game">Oyun Geliştirme</option>
              <option value="other">Diğer</option>
            </select>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Proje Oluştur
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 