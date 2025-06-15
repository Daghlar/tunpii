'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch, FaChevronDown, FaChevronUp } from 'react-icons/fa'

const FAQPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [openQuestions, setOpenQuestions] = useState<number[]>([])

  const categories = [
    {
      title: 'Genel',
      questions: [
        {
          id: 1,
          question: 'TunPi nedir?',
          answer: 'TunPi, IoT ve gömülü sistem projelerini geliştirmek için tasarlanmış açık kaynaklı bir platformdur. Raspberry Pi tabanlı sistemler için özel olarak optimize edilmiş araçlar ve kütüphaneler sunar.'
        },
        {
          id: 2,
          question: 'TunPi\'yi kimler kullanabilir?',
          answer: 'TunPi, hem başlangıç seviyesindeki geliştiriciler hem de profesyoneller için uygundur. Özellikle IoT, robotik ve gömülü sistem projeleri geliştirmek isteyen herkes kullanabilir.'
        }
      ]
    },
    {
      title: 'Teknik',
      questions: [
        {
          id: 3,
          question: 'TunPi hangi programlama dillerini destekler?',
          answer: 'TunPi temel olarak Python, C++ ve JavaScript dillerini destekler. Ayrıca Node.js ve diğer popüler frameworkler ile de uyumlu çalışır.'
        },
        {
          id: 4,
          question: 'TunPi için minimum sistem gereksinimleri nelerdir?',
          answer: 'TunPi, Raspberry Pi 3 Model B ve üzeri modellerde sorunsuz çalışır. En az 1GB RAM ve 8GB SD kart önerilir.'
        }
      ]
    },
    {
      title: 'Lisans ve Fiyatlandırma',
      questions: [
        {
          id: 5,
          question: 'TunPi açık kaynak mıdır?',
          answer: 'Evet, TunPi tamamen açık kaynak bir projedir ve MIT lisansı altında dağıtılmaktadır.'
        },
        {
          id: 6,
          question: 'TunPi\'nin ücretli bir versiyonu var mı?',
          answer: 'TunPi\'nin temel özellikleri ücretsizdir. Ancak kurumsal kullanım için ek özellikler ve destek içeren bir Pro sürümü mevcuttur.'
        }
      ]
    },
    {
      title: 'Destek',
      questions: [
        {
          id: 7,
          question: 'Teknik destek nasıl alabilirim?',
          answer: 'Topluluk forumları, Discord kanalımız ve dokümantasyon üzerinden destek alabilirsiniz. Pro kullanıcılar için ayrıca öncelikli destek hizmeti sunulmaktadır.'
        },
        {
          id: 8,
          question: 'Hata bildirimi nasıl yapabilirim?',
          answer: 'GitHub üzerinden issue açarak veya destek portalımız üzerinden hata bildirimi yapabilirsiniz.'
        }
      ]
    }
  ]

  const toggleQuestion = (id: number) => {
    setOpenQuestions(prev =>
      prev.includes(id) ? prev.filter(q => q !== id) : [...prev, id]
    )
  }

  const filteredCategories = categories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Sıkça Sorulan Sorular</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            TunPi hakkında en çok sorulan soruların cevaplarını burada bulabilirsiniz.
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-zinc-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Soru ara..."
              className="block w-full pl-10 px-4 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white focus:border-white/20 focus:outline-none focus:ring-2 focus:ring-white/10 transition-all"
            />
          </div>
        </motion.div>

        {/* FAQ Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          {filteredCategories.map((category, categoryIndex) => (
            <div key={category.title}>
              <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
              <div className="space-y-4">
                {category.questions.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * categoryIndex }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => toggleQuestion(item.id)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-zinc-800/50 transition-colors"
                    >
                      <span className="font-medium">{item.question}</span>
                      {openQuestions.includes(item.id) ? (
                        <FaChevronUp className="w-4 h-4 text-zinc-400" />
                      ) : (
                        <FaChevronDown className="w-4 h-4 text-zinc-400" />
                      )}
                    </button>
                    {openQuestions.includes(item.id) && (
                      <div className="px-6 py-4 border-t border-zinc-800">
                        <p className="text-zinc-400">{item.answer}</p>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-zinc-400">Aradığınız kriterlere uygun soru bulunamadı.</p>
          </div>
        )}

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">Sorunuz hala cevaplanmadı mı?</h2>
            <p className="text-zinc-400 mb-6">
              Destek ekibimiz size yardımcı olmaktan mutluluk duyacaktır.
            </p>
            <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-zinc-200 transition-colors">
              İletişime Geç
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQPage 