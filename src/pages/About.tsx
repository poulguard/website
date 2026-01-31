import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Target, Eye, Heart, Users, Globe, Award, Lightbulb, TrendingUp, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-green-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Poulguard Intelligence
            </h1>
            <p className="text-xl text-green-50">
              Empowering African poultry farmers with cutting-edge AI technology
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Poulguard Intelligence was born from a deep understanding of the challenges facing poultry farmers in Africa. Founded by Gladys Gathoni, who combines hands-on experience in poultry farming with expertise in product design and technology, we recognized that farmers needed better tools to protect their investments and improve productivity.
                </p>
                <p>
                  Traditional farming methods rely heavily on manual observation, which is time-consuming, inconsistent, and often misses early warning signs of disease. We knew that artificial intelligence and computer vision could change this, but existing solutions were built for large-scale Western operations and were neither affordable nor practical for African farmers.
                </p>
                <p>
                  That's why we built Poulguard specifically for African poultry farming. Our technology is designed to work in local conditions, at a price point that makes sense for small and medium-scale farmers, with support in the languages and contexts that matter.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
              <img src="https://images.pexels.com/photos/5255238/pexels-photo-5255238.jpeg?auto=compress&cs=tinysrgb&w=800" alt="African farmer with poultry" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-green-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600">
                To improve poultry farming across Africa through accessible, intelligent technology that empowers farmers to make better decisions, reduce losses, and increase productivity. We believe every farmer deserves access to tools that were once available only to large commercial operations.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-700" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600">
                To become the leading agricultural intelligence platform in Africa, expanding beyond poultry to support farmers across all livestock sectors. We envision a future where smart, data-driven farming is the norm, contributing to food security, sustainability, and economic growth across the continent.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Farmer-First', description: 'Every decision we make prioritizes the needs and success of our farming community.' },
              { icon: Lightbulb, title: 'Innovation', description: 'We continuously push the boundaries of what technology can do for agriculture.' },
              { icon: Globe, title: 'Accessibility', description: 'Technology should be available to all farmers, not just the wealthy few.' },
              { icon: Award, title: 'Excellence', description: 'We are committed to delivering the highest quality products and service.' },
            ].map((value, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Founder
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Leadership with passion, experience, and vision
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="aspect-square bg-gradient-to-br from-green-600 to-green-700 rounded-2xl flex items-center justify-center">
                    <Users className="w-24 h-24 text-white opacity-50" />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Gladys Gathoni</h3>
                  <p className="text-green-400 text-lg mb-4">Founder & CEO</p>
                  <p className="text-gray-300 mb-4">
                    Gladys brings a unique combination of hands-on poultry farming experience and professional expertise in product design. As a certified Product Designer with deep roots in agricultural practices, she understands both the technical possibilities of AI and the practical realities of farming in Africa.
                  </p>
                  <p className="text-gray-300">
                    Her vision is to bridge the gap between cutting-edge technology and traditional farming, making advanced tools accessible to farmers who need them most. Under her leadership, Poulguard Intelligence is committed to creating solutions that are not just technologically advanced, but truly useful and affordable for African farmers.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experts in AI, agriculture, product development, and engineering
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, title: 'AI & Data Science', description: 'Machine learning engineers and data scientists building cutting-edge computer vision models.' },
              { icon: Heart, title: 'Agriculture Experts', description: 'Veterinarians and poultry specialists ensuring our AI understands chicken health and behavior.' },
              { icon: Lightbulb, title: 'Product Team', description: 'Designers and product managers creating intuitive, farmer-friendly experiences.' },
              { icon: Users, title: 'Engineering', description: 'Software and hardware engineers building reliable, scalable infrastructure.' },
            ].map((team, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <team.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{team.title}</h3>
                <p className="text-gray-600 text-sm">{team.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Whether you're a farmer, investor, or partner, we'd love to connect and explore how we can work together to transform African agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                Get In Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/impact" className="inline-flex items-center justify-center bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-colors">
                See Our Impact
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
