'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="TunPi"
              width={100}
              height={100}
              className="h-12 w-auto"
            />
          </Link>
        </div>

        <h1 className="text-4xl font-bold mb-4">Bir Hata Oluştu</h1>
        <p className="text-gray-400 mb-8">
          Üzgünüz, bir şeyler yanlış gitti. Lütfen tekrar deneyin veya ana sayfaya dönün.
        </p>

        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Tekrar Dene
          </button>

          <Link
            href="/"
            className="block w-full bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-md transition duration-200"
          >
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
} 