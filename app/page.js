'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function HomePage() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-center"
        style={{ backgroundImage: 'url("/optometry-bg.jpg")' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-0"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Your Vision, Our Focus
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 mb-8">
            Experience professional and personalized eye care services.
          </p>
          <Link href="/services">
            <p className="px-6 py-3 bg-blue-600 text-white text-lg rounded-full hover:bg-blue-700 transition-all duration-300">
              Explore Our Services
            </p>
          </Link>
        </div>
      </section>

      {/* Section after the Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h3 className="text-3xl font-semibold mb-6 text-gray-800">Why Choose Us?</h3>
        <p className="text-lg text-gray-600 mb-12 max-w-xl mx-auto">
          We provide comprehensive eye care solutions, personalized just for you. From regular check-ups to advanced treatments, we ensure you receive the best care.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-blue-600 mb-4">Advanced Technology</h4>
            <p className="text-gray-600">
              We use state-of-the-art equipment to ensure accurate diagnoses and effective treatments.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-blue-600 mb-4">Experienced Optometrists</h4>
            <p className="text-gray-600">
              Our highly trained optometrists have years of experience in providing the best eye care solutions.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold text-blue-600 mb-4">Personalized Care</h4>
            <p className="text-gray-600">
              Every patient is unique. We tailor our services to fit your individual needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
