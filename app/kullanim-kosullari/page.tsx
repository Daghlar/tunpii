'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaUserLock, FaCopyright, FaExclamationTriangle } from 'react-icons/fa';

const TermsPage = () => {
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
          <FaShieldAlt className="w-16 h-16 mx-auto mb-6 text-zinc-400" />
          <h1 className="text-3xl font-bold mb-4">Kullanım Koşulları</h1>
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
          {/* Account Security */}
          <section>
            <div className="flex items-center mb-4">
              <FaUserLock className="w-6 h-6 text-zinc-400 mr-3" />
              <h2 className="text-xl font-semibold">Hesap Güvenliği</h2>
            </div>
            <div className="text-zinc-400 space-y-4">
              <p>
                TunPi platformunu kullanırken aşağıdaki güvenlik kurallarına uymanız gerekmektedir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Hesap bilgilerinizi kimseyle paylaşmayın</li>
                <li>Güçlü bir şifre kullanın ve düzenli olarak değiştirin</li>
                <li>Şüpheli aktivite fark ettiğinizde hemen bizimle iletişime geçin</li>
                <li>Oturum açık bırakılan cihazlardan güvenli çıkış yapın</li>
              </ul>
            </div>
          </section>

          {/* Usage Rules */}
          <section>
            <div className="flex items-center mb-4">
              <FaExclamationTriangle className="w-6 h-6 text-zinc-400 mr-3" />
              <h2 className="text-xl font-semibold">Kullanım Kuralları</h2>
            </div>
            <div className="text-zinc-400 space-y-4">
              <p>
                Platform içerisinde aşağıdaki davranışlar kesinlikle yasaktır:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Spam veya istenmeyen içerik paylaşımı</li>
                <li>Diğer kullanıcılara karşı kötü niyetli davranışlar</li>
                <li>Yanıltıcı bilgi paylaşımı</li>
                <li>Platform güvenliğini tehdit eden eylemler</li>
                <li>Telif hakkı ihlali içeren paylaşımlar</li>
              </ul>
            </div>
          </section>

          {/* Copyright */}
          <section>
            <div className="flex items-center mb-4">
              <FaCopyright className="w-6 h-6 text-zinc-400 mr-3" />
              <h2 className="text-xl font-semibold">Telif Hakkı</h2>
            </div>
            <div className="text-zinc-400 space-y-4">
              <p>
                TunPi üzerinde paylaşılan tüm içerikler için aşağıdaki kurallar geçerlidir:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Platform üzerindeki tüm içerikler telif hakkı koruması altındadır</li>
                <li>İçeriklerin izinsiz kullanımı ve dağıtımı yasaktır</li>
                <li>Kaynak göstererek alıntı yapılabilir</li>
                <li>Açık kaynak lisansı belirtilen projeler, ilgili lisans kapsamında kullanılabilir</li>
              </ul>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Sorumluluk Reddi</h2>
            <p className="text-zinc-400">
              TunPi platformu, kullanıcılar tarafından paylaşılan içeriklerden doğrudan sorumlu değildir. Platform üzerinden erişilen harici bağlantılar ve kaynaklar kullanıcının sorumluluğundadır. Platformun kullanımından doğabilecek herhangi bir zarar veya kayıp için TunPi sorumlu tutulamaz.
            </p>
          </section>

          {/* Contact */}
          <section className="text-center">
            <p className="text-zinc-400">
              Bu kullanım koşulları hakkında sorularınız için{' '}
              <a
                href="mailto:iletisim@tunpi.dev"
                className="text-white hover:underline"
              >
                iletisim@tunpi.dev
              </a>
              {' '}adresinden bizimle iletişime geçebilirsiniz.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsPage; 