'use client';

import { motion } from 'framer-motion';
import { FaLock, FaDatabase, FaUserShield, FaCookie } from 'react-icons/fa';

const PrivacyPage = () => {
  const lastUpdated = new Date().toLocaleDateString('tr-TR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <FaLock className="w-16 h-16 mx-auto mb-6 text-zinc-400" />
          <h1 className="text-3xl font-bold mb-4">Gizlilik Politikası</h1>
          <p className="text-zinc-400">
            Son güncelleme: {lastUpdated}
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="space-y-12"
        >
          {/* Data Collection */}
          <section>
            <div className="flex items-center mb-4">
              <FaDatabase className="w-6 h-6 text-zinc-400 mr-3" />
              <h2 className="text-xl font-semibold">Veri Toplama</h2>
            </div>
            <div className="text-zinc-400 space-y-4">
              <p>
                TunPi olarak, hizmetlerimizi sunabilmek için aşağıdaki verileri topluyoruz:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hesap bilgileri (e-posta, kullanıcı adı)</li>
                <li>Profil bilgileri (isim, biyografi, avatar)</li>
                <li>Kullanım istatistikleri ve tercihler</li>
                <li>Teknik veriler (IP adresi, tarayıcı bilgileri)</li>
              </ul>
            </div>
          </section>

          {/* Data Usage */}
          <section>
            <div className="flex items-center mb-4">
              <FaUserShield className="w-6 h-6 text-zinc-400 mr-3" />
              <h2 className="text-xl font-semibold">Veri Kullanımı</h2>
            </div>
            <div className="text-zinc-400 space-y-4">
              <p>
                Topladığımız verileri aşağıdaki amaçlar için kullanıyoruz:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hizmetlerimizi sunmak ve geliştirmek</li>
                <li>Hesap güvenliğini sağlamak</li>
                <li>Kullanıcı deneyimini iyileştirmek</li>
                <li>Yasal yükümlülükleri yerine getirmek</li>
                <li>Teknik sorunları çözmek ve destek sağlamak</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <div className="flex items-center mb-4">
              <FaCookie className="w-6 h-6 text-zinc-400 mr-3" />
              <h2 className="text-xl font-semibold">Çerezler</h2>
            </div>
            <div className="text-zinc-400 space-y-4">
              <p>
                Platform üzerinde kullanılan çerezler ve kullanım amaçları:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Oturum yönetimi için gerekli çerezler</li>
                <li>Tercihlerinizi hatırlamak için kullanılan çerezler</li>
                <li>Analitik amaçlı çerezler</li>
                <li>Güvenlik için kullanılan çerezler</li>
              </ul>
              <p className="mt-4">
                Tarayıcı ayarlarınızdan çerez tercihlerinizi yönetebilirsiniz.
              </p>
            </div>
          </section>

          {/* Data Protection */}
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Veri Koruma</h2>
            <div className="text-zinc-400 space-y-4">
              <p>
                Verilerinizin güvenliği bizim için önemlidir. Bu nedenle:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Tüm veriler şifrelenerek saklanır</li>
                <li>Düzenli güvenlik denetimleri yapılır</li>
                <li>Sadece yetkili personel verilere erişebilir</li>
                <li>Veri sızıntılarına karşı önlemler alınır</li>
              </ul>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-xl font-semibold mb-4">Kullanıcı Hakları</h2>
            <div className="text-zinc-400 space-y-4">
              <p>
                KVKK ve GDPR kapsamında sahip olduğunuz haklar:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Verilerinize erişim hakkı</li>
                <li>Verilerinizin düzeltilmesini talep etme hakkı</li>
                <li>Verilerinizin silinmesini talep etme hakkı</li>
                <li>Veri işlemeye itiraz etme hakkı</li>
                <li>Veri taşınabilirliği hakkı</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center">
            <p className="text-zinc-400">
              Gizlilik politikamız hakkında sorularınız için{' '}
              <a
                href="mailto:gizlilik@tunpi.dev"
                className="text-white hover:underline"
              >
                gizlilik@tunpi.dev
              </a>
              {' '}adresinden bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPage; 