export default function ServicesPage() {
    return (
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Eye Exams</h3>
            <p className="text-gray-600 mt-2">Comprehensive eye exams for all ages...</p>
          </div>
          {/* Add more services here */}
        </div>
      </section>
    );
  }
  