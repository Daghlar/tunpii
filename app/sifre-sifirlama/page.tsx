export default function SifreSifirlama() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Şifre Sıfırlama</h1>
          
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="text-gray-300 mb-6">
              Yeni şifrenizi belirleyin. Güvenli bir şifre oluşturmak için en az 8 karakter kullanın.
            </p>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Yeni Şifreniz
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                  Yeni Şifrenizi Tekrar Girin
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Şifreyi Sıfırla
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <a href="/giris" className="text-blue-500 hover:text-blue-400">
                Giriş sayfasına dön
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 