'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const project = {
  id: 1,
  title: 'Akıllı Ev Sistemi',
  description: 'TunPi ile geliştirilen ev otomasyon sistemi',
  image: '/smart-home.jpg',
  author: 'Ahmet Yılmaz',
  date: '15 Mart 2024',
  tags: ['IoT', 'Python', 'Home Assistant'],
  content: {
    description: `
      Bu proje, TunPi kullanarak evinizi akıllı hale getirmenizi sağlar. 
      Aydınlatma, ısıtma, güvenlik ve daha birçok sistem otomatik olarak kontrol edilebilir.
      
      Proje, Home Assistant platformu üzerine kurulmuştur ve Python ile geliştirilmiştir.
      Kullanıcı dostu arayüzü sayesinde kolayca yönetilebilir.
    `,
    materials: [
      'TunPi',
      'Home Assistant',
      'Python 3.x',
      'Sensörler',
      'Röleler'
    ],
    steps: [
      {
        title: 'Kurulum',
        description: 'TunPi\'ye Home Assistant kurulumu yapın'
      },
      {
        title: 'Sensörler',
        description: 'Sensörleri bağlayın ve yapılandırın'
      },
      {
        title: 'Otomasyon',
        description: 'Otomasyon kurallarını oluşturun'
      }
    ]
  },
  comments: [
    {
      id: 1,
      author: 'Mehmet Demir',
      date: '16 Mart 2024',
      content: 'Harika bir proje! Ben de evimde kullanıyorum.'
    },
    {
      id: 2,
      author: 'Ayşe Kaya',
      date: '17 Mart 2024',
      content: 'Detaylı anlatım için teşekkürler.'
    }
  ]
}

export default function ProjeDetay() {
  const router = useRouter()
  const [isDeleting, setIsDeleting] = useState(false)
  const [error, setError] = useState('')

  const handleDelete = async () => {
    if (!confirm('Bu projeyi silmek istediğinizden emin misiniz?')) {
      return
    }

    setIsDeleting(true)
    setError('')

    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      // Burada gerçek bir API çağrısı yapılacak
      console.log('Proje silme isteği gönderiliyor')
      // Başarılı silme sonrası yönlendirme
      router.push('/projeler')
    } catch (err) {
      setError('Proje silinirken bir hata oluştu. Lütfen tekrar deneyin.')
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <Link
            href="/projeler"
            className="text-blue-400 hover:text-blue-300 flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Projelere Dön
          </Link>
          <div className="flex space-x-4">
            <Link
              href={`/projeler/${project.id}/duzenle`}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
            >
              Düzenle
            </Link>
            <button
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 disabled:opacity-50"
            >
              {isDeleting ? 'Siliniyor...' : 'Sil'}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-400 rounded-lg p-4 mb-6">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Ana İçerik */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-400 mb-8">
                  <span>{project.author}</span>
                  <span>{project.date}</span>
                </div>

                {/* İçerik Sekmeleri */}
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4">Açıklama</h2>
                    <p className="text-gray-300 whitespace-pre-line">
                      {project.content.description}
                    </p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Gerekli Malzemeler</h2>
                    <ul className="list-disc list-inside text-gray-300">
                      {project.content.materials.map((material) => (
                        <li key={material}>{material}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold mb-4">Adımlar</h2>
                    <div className="space-y-4">
                      {project.content.steps.map((step, index) => (
                        <div key={index} className="bg-gray-700 rounded-lg p-4">
                          <h3 className="font-semibold mb-2">
                            {index + 1}. {step.title}
                          </h3>
                          <p className="text-gray-300">{step.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Yorumlar */}
            <div className="mt-8 bg-gray-800 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6">Yorumlar</h2>
              <div className="space-y-6">
                {project.comments.map((comment) => (
                  <div key={comment.id} className="border-b border-gray-700 pb-6 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{comment.author}</span>
                      <span className="text-sm text-gray-400">{comment.date}</span>
                    </div>
                    <p className="text-gray-300">{comment.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Yan Panel */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Proje Bilgileri</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-gray-400 text-sm">Yazar</h3>
                  <p>{project.author}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Tarih</h3>
                  <p>{project.date}</p>
                </div>
                <div>
                  <h3 className="text-gray-400 text-sm">Etiketler</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 