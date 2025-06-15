'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

interface MenuItem {
  href?: string;
  label: string;
  children?: MenuItem[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { href: '/', label: 'Ana Sayfa' },
    { href: '/dokumanlar', label: 'Dökümanlar' },
    { href: '/egitimler', label: 'Eğitimler' },
    { href: '/projeler', label: 'Projeler' },
    { href: '/forum', label: 'Forum' },
    { href: '/blog', label: 'Blog' },
    {
      label: 'Topluluk',
      children: [
        { href: '/topluluk', label: 'Topluluk Sayfası' },
        { href: '/hakkimizda', label: 'Hakkımızda' },
        { href: '/iletisim', label: 'İletişim' }
      ]
    },
    {
      label: 'Destek',
      children: [
        { href: '/destek', label: 'Destek Merkezi' },
        { href: '/sss', label: 'SSS' },
        { href: '/ozellikler', label: 'Özellikler' }
      ]
    },
    { href: '/satin-al', label: 'Satın Al' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  const handleDropdownClick = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-black/50'
      }`}
    >
      <div className="max-w-[95%] ml-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="w-8 h-8 bg-white rounded-lg flex items-center justify-center"
            >
              <span className="text-black font-bold text-xl">T</span>
            </motion.div>
            <span className="font-bold text-xl">TunPi</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <div key={item.label} className="relative">
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors relative ${
                      pathname === item.href
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                    {pathname === item.href && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                      />
                    )}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleDropdownClick(item.label)}
                    className={`px-3 py-2 rounded-lg text-sm transition-colors relative flex items-center space-x-1 ${
                      openDropdown === item.label
                        ? 'text-white bg-white/5'
                        : 'text-zinc-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{item.label}</span>
                    <FaChevronDown className={`w-3 h-3 transition-transform ${
                      openDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-1 py-2 bg-black/80 backdrop-blur-md rounded-lg border border-zinc-800 min-w-[160px]"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href || '#'}
                        className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 ml-4 border-l border-zinc-800 pl-4">
              <Link
                href="/giris"
                className="px-4 py-2 rounded-lg text-sm text-white hover:bg-white/5 transition-colors"
              >
                Giriş Yap
              </Link>
              <Link
                href="/kayit"
                className="px-4 py-2 rounded-lg text-sm bg-white text-black hover:bg-zinc-200 transition-colors"
              >
                Kayıt Ol
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden py-4 border-t border-zinc-800"
          >
            <div className="flex flex-col space-y-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className={`px-4 py-2 rounded-lg text-sm ${
                        pathname === item.href
                          ? 'bg-white/10 text-white'
                          : 'text-zinc-400 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => handleDropdownClick(item.label)}
                        className={`w-full px-4 py-2 rounded-lg text-sm flex items-center justify-between ${
                          openDropdown === item.label
                            ? 'bg-white/10 text-white'
                            : 'text-zinc-400 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span>{item.label}</span>
                        <FaChevronDown className={`w-3 h-3 transition-transform ${
                          openDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {item.children && openDropdown === item.label && (
                        <div className="pl-4 space-y-1 mt-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href || '#'}
                              className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg"
                              onClick={() => setIsOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
              <div className="border-t border-zinc-800 mt-2 pt-2 space-y-1">
                <Link
                  href="/giris"
                  className="block px-4 py-2 rounded-lg text-sm text-white hover:bg-white/5 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Giriş Yap
                </Link>
                <Link
                  href="/kayit"
                  className="block px-4 py-2 rounded-lg text-sm bg-white text-black hover:bg-zinc-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Kayıt Ol
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Bottom Border */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent opacity-50" />
    </nav>
  );
};

export default Navbar; 