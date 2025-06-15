'use client';

import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaLightbulb, FaCode } from 'react-icons/fa';

const AboutPage = () => {
  const stats = [
    {
      value: '10K+',
      label: 'Aktif Kullanıcı',
      icon: FaUsers,
      description: 'Dünya genelinde TunPi kullanan geliştirici'
    },
    {
      value: '1000+',
      label: 'Proje',
      icon: FaRocket,
      description: 'TunPi ile geliştirilen başarılı proje'
    },
    {
      value: '50+',
      label: 'Özellik',
      icon: FaLightbulb,
      description: 'Geliştiriciler için özel tasarlanmış özellik'
    },
    {
      value: '24/7',
      label: 'Destek',
      icon: FaCode,
      description: 'Kesintisiz teknik destek ve topluluk yardımı'
    }
  ];

  const team = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Kurucu & CEO',
      image: '/team/ahmet.jpg',
      bio: 'IoT ve gömülü sistemler konusunda 10+ yıl deneyim'
    },
    {
      name: 'Mehmet Demir',
      role: 'Baş Geliştirici',
      image: '/team/mehmet.jpg',
      bio: 'Linux kernel ve sürücü geliştirme uzmanı'
    },
    {
      name: 'Zeynep Kaya',
      role: 'Topluluk Yöneticisi',
      image: '/team/zeynep.jpg',
      bio: 'Açık kaynak toplulukları ve eğitim alanında uzman'
    }
  ];

  const values = [
    {
      title: 'Açık Kaynak',
      description: 'Tüm geliştirmelerimiz açık kaynak ve topluluk odaklıdır.'
    },
    {
      title: 'Yenilikçilik',
      description: 'Sürekli gelişen teknolojileri takip eder ve entegre ederiz.'
    },
    {
      title: 'Erişilebilirlik',
      description: 'Herkesin kolayca kullanabileceği çözümler geliştiririz.'
    },
    {
      title: 'Güvenilirlik',
      description: 'Güvenli ve kararlı sistemler oluşturmaya önem veririz.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            TunPi, geliştiricilerin IoT ve gömülü sistem projelerini daha kolay
            ve hızlı bir şekilde geliştirmelerini sağlayan açık kaynaklı bir platformdur.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-zinc-400" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-zinc-300 mb-2">{stat.label}</div>
              <p className="text-sm text-zinc-400">{stat.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Misyonumuz</h2>
            <p className="text-zinc-400 mb-6">
              IoT ve gömülü sistem geliştirmeyi herkes için erişilebilir kılmak ve
              geliştiricilere güçlü, güvenilir ve kullanımı kolay araçlar sunmak.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div key={value.title} className="border-l-2 border-zinc-800 pl-4">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-zinc-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-8 text-center">Ekibimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-zinc-800">
                  {member.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-zinc-400 mb-3">{member.role}</div>
                <p className="text-sm text-zinc-500">{member.bio}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Join Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Bize Katılın</h2>
            <p className="text-zinc-400 mb-6 max-w-2xl mx-auto">
              TunPi ekibine katılarak geleceğin teknolojilerini birlikte geliştirelim.
              Açık pozisyonlarımızı inceleyin ve başvurun.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">
              Açık Pozisyonlar
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage; 