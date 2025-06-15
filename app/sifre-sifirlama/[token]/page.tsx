'use client';

import React from 'react';

export default function SifreSifirlamaTokenPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Şifre Sıfırlama</h1>
      <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
        <form className="space-y-4">
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Yeni Şifre
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Yeni şifrenizi girin"
            />
          </div>
          <div>
            <label htmlFor="password2" className="block text-sm font-medium text-gray-700">
              Yeni Şifre (Tekrar)
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Yeni şifrenizi tekrar girin"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Şifreyi Sıfırla
            </button>
          </div>
        </form>
      </div>
    </main>
  );
} 