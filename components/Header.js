'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scroll ? 'bg-white/70 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-blue-600">Optometry</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/" className={`transition-all duration-300 hover:underline ${scroll ? 'text-blue-600' : 'text-white'}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={`transition-all duration-300 hover:underline ${scroll ? 'text-blue-600' : 'text-white'}`}>
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className={`transition-all duration-300 hover:underline ${scroll ? 'text-blue-600' : 'text-white'}`}>
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className={`transition-all duration-300 hover:underline ${scroll ? 'text-blue-600' : 'text-white'}`}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
