export default function ContactPage() {
    return (
      <section className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Your Name</label>
            <input type="text" id="name" className="w-full mt-2 p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Your Email</label>
            <input type="email" id="email" className="w-full mt-2 p-3 border border-gray-300 rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Message</label>
            <textarea id="message" className="w-full mt-2 p-3 border border-gray-300 rounded-lg"></textarea>
          </div>
          <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg">Submit</button>
        </form>
      </section>
    );
  }
  