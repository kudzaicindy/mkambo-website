import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Users, Building, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="absolute inset-0">
          <img
            src="/mkambo11.jpg"
            alt="Mbare Market"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-mkambo-green-900/80 via-mkambo-orange-900/70 to-mkambo-green-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 h-screen flex items-center">
          <div className="text-white max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Transforming Market Spaces
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8"
            >
              Creating vibrant, modern marketplaces that empower communities and drive economic growth.
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-mkambo-orange-500 to-mkambo-green-500 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:from-mkambo-orange-600 hover:to-mkambo-green-600 transition-all duration-300 shadow-lg"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-mkambo-orange-50 to-mkambo-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-mkambo-orange-600 to-mkambo-green-600 bg-clip-text text-transparent">
              Why Choose Mkambo
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're dedicated to creating sustainable market spaces that benefit both vendors and customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: ShoppingBag,
                title: 'Modern Facilities',
                description: 'State-of-the-art market facilities designed for optimal trading'
              },
              {
                icon: Users,
                title: 'Community Focus',
                description: 'Supporting local businesses and strengthening community bonds'
              },
              {
                icon: Building,
                title: 'Strategic Location',
                description: 'Easily accessible locations with high foot traffic'
              },
              {
                icon: TrendingUp,
                title: 'Growth Potential',
                description: 'Opportunities for business expansion and development'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-mkambo-orange-100 to-mkambo-green-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-mkambo-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-mkambo-orange-600 to-mkambo-green-600 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-mkambo-orange-600 to-mkambo-green-600 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Market Space?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join us in creating vibrant, sustainable marketplaces that benefit everyone.
            Let's work together to build the future of commerce.
          </p>
          <button className="bg-white text-mkambo-orange-600 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors font-semibold border-2 border-white">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;