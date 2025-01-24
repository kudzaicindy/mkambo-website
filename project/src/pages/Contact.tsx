import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Have questions about our market transformation projects? We're here to help.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: 'Phone',
                content: '+263 123 456 789',
                href: 'tel:+263123456789'
              },
              {
                icon: Mail,
                title: 'Email',
                content: 'info@mkambo.co.zw',
                href: 'mailto:info@mkambo.co.zw'
              },
              {
                icon: MapPin,
                title: 'Location',
                content: '123 Market Street, Harare',
                href: '#'
              }
            ].map(({ icon: Icon, title, content, href }) => (
              <motion.a
                key={title}
                href={href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-orange-50 rounded-xl p-6 text-center hover:bg-orange-100 transition-colors"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{content}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-orange-600 text-white rounded-lg shadow-lg hover:bg-orange-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="h-96 bg-gray-200">
        {/* Add your map component here */}
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <p className="text-gray-600">Map will be displayed here</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;