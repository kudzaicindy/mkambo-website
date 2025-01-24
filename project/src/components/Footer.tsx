import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-orange-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">About Mkambo</h3>
          <p className="text-orange-100">Transforming market spaces into vibrant hubs.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-orange-100 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-orange-100 hover:text-white">About</a></li>
            <li><a href="/gallery" className="text-orange-100 hover:text-white">Gallery</a></li>
            <li><a href="/contact" className="text-orange-100 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-orange-100">
            <li>123 Market St, Harare</li>
            <li>+263 123 456 789</li>
            <li>info@mkambo.co.zw</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-orange-100 hover:text-white">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-orange-100 hover:text-white">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-orange-100 hover:text-white">
              <Twitter className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-orange-800 text-center text-orange-100">
        <p>&copy; {new Date().getFullYear()} Mkambo Marketing Hub</p>
      </div>
    </footer>
  );
};

export default Footer;