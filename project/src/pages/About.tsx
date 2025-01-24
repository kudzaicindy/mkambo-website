import { motion } from 'framer-motion';
import { Target, Heart, } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-700 to-orange-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Mkambo</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Transforming traditional markets into modern, vibrant spaces for commerce and community.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Emergency Response Banner */}
      <div className="bg-gradient-to-r from-green-800 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-4">Mbare Musika Revival Initiative</h2>
              <p className="text-lg text-green-50 leading-relaxed">
                Following President E.D. Mnangagwa's national emergency declaration after the Mbare Musika fire, MkamboMisika Hubs has launched a comprehensive revival program.
              </p>
            </div>
            <div className="flex-shrink-0">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-50 transition-colors"
              >
                Join Our Initiative
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-green-50 p-8 rounded-xl"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize traditional marketplaces by creating modern, efficient, 
                and sustainable trading environments that empower vendors and enhance 
                the shopping experience for customers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-orange-50 p-8 rounded-xl"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading force in market transformation across Africa, 
                creating spaces that foster economic growth, preserve cultural heritage, 
                and build stronger communities.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work and shape our relationships with communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Community First',
                description: 'Prioritizing the needs and well-being of local communities in all our projects.'
              },
              {
                title: 'Sustainable Development',
                description: 'Creating lasting solutions that benefit both current and future generations.'
              },
              {
                title: 'Innovation',
                description: 'Embracing new technologies and ideas to improve market operations.'
              },
              {
                title: 'Transparency',
                description: 'Maintaining open communication and honest relationships with all stakeholders.'
              },
              {
                title: 'Excellence',
                description: 'Striving for the highest standards in all aspects of our work.'
              },
              {
                title: 'Cultural Preservation',
                description: 'Respecting and preserving local traditions while modernizing spaces.'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold mb-2 text-orange-600">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals working to transform market spaces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Collins Jimu',
                role: 'Project Director',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
              },
              {
                name:'Paul Kofa',
                role: 'Community Relations',
                image:  'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
              },
              {
                name: 'Zviko Claire',
                role: 'Operations Manager',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;