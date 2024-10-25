export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-6 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Optometry Clinic. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  