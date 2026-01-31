import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Heart, Leaf, TrendingUp, Globe, Shield, Droplet, Sprout, Award, Target, ArrowRight, CheckCircle } from 'lucide-react';

const Impact = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-green-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Impact on African Agriculture
            </h1>
            <p className="text-xl text-green-50">
              Transforming lives, supporting communities, and building sustainable food systems
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Our Work Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Poulguard Intelligence is more than technology. We're contributing to food security, economic empowerment, and sustainable agriculture across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Supporting Smallholder Farmers', description: 'Over 80% of African farms are small-scale. We provide these farmers with tools once available only to large commercial operations.', stat: '1,000+', statLabel: 'Farmers to be reached in Year 1' },
              { icon: Sprout, title: 'Improving Food Security', description: 'By reducing poultry losses and increasing productivity, we help ensure stable, affordable protein sources for communities.', stat: '30%', statLabel: 'Reduction in flock mortality' },
              { icon: TrendingUp, title: 'Economic Empowerment', description: 'Higher productivity and lower losses mean better incomes for farming families and stronger rural economies.', stat: '25%', statLabel: 'Average income increase' },
            ].map((impact, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border-2 border-green-100 hover:border-green-300 transition-colors">
                <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                  <impact.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{impact.title}</h3>
                <p className="text-gray-600 mb-6">{impact.description}</p>
                <div className="border-t border-green-200 pt-4">
                  <div className="text-3xl font-bold text-green-700 mb-1">{impact.stat}</div>
                  <div className="text-sm text-gray-600">{impact.statLabel}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Smallholder Farmers
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Small-scale farmers are the backbone of African agriculture, yet they often lack access to modern tools and technology. Poulguard Intelligence is changing that by making advanced AI monitoring affordable and accessible.
              </p>
              <div className="space-y-4">
                {['Affordable pricing designed for small and medium-scale operations', 'Local language support and culturally relevant training', 'Flexible payment options including pay-as-you-go models', 'On-the-ground support from local agricultural experts', 'Community knowledge sharing and best practices'].map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
              <img src="https://images.pexels.com/photos/5255238/pexels-photo-5255238.jpeg?auto=compress&cs=tinysrgb&w=800" alt="African smallholder farmer" className="rounded-2xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contributing to Food Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthy, productive poultry farming plays a critical role in nutrition and food security across Africa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-green-100">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Affordable Protein</h3>
              <p className="text-gray-600 mb-4">
                Poultry is one of the most affordable and accessible protein sources in Africa. By helping farmers reduce losses and increase productivity, we contribute to stable, affordable food prices for communities.
              </p>
              <ul className="space-y-2">
                {['Reduced mortality means more birds reach market', 'Lower production costs translate to affordable prices', 'Consistent supply stabilizes local markets'].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-green-100">
              <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Disease Prevention</h3>
              <p className="text-gray-600 mb-4">
                Early disease detection prevents outbreaks that can devastate entire communities' food supplies. Our AI helps identify and contain health issues before they spread.
              </p>
              <ul className="space-y-2">
                {['Early warning system prevents major outbreaks', 'Reduced use of antibiotics and medications', 'Safer food supply for consumers'].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sustainable Agriculture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building farming practices that protect the environment and support long-term productivity
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'Reduced Waste', description: 'Lower mortality rates mean less waste of feed, water, and other resources invested in raising chickens.' },
              { icon: Droplet, title: 'Resource Efficiency', description: 'Data-driven insights help optimize feed and water usage, reducing environmental impact.' },
              { icon: Globe, title: 'Sustainable Growth', description: 'Better productivity without expansion means more food with less land and resource use.' },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="bg-green-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Commitments
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we ensure our impact is meaningful and lasting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Measurable Impact', description: 'We track and report our impact on farmer incomes, mortality rates, and productivity improvements.' },
              { icon: Users, title: 'Community First', description: 'We work with farming communities to understand needs and ensure our solutions are truly beneficial.' },
              { icon: Award, title: 'Quality Standards', description: 'Rigorous testing and continuous improvement ensure reliable, accurate monitoring.' },
              { icon: Heart, title: 'Fair Pricing', description: 'Transparent pricing that makes sense for small and medium-scale farmers.' },
              { icon: Globe, title: 'Local Support', description: 'On-the-ground teams provide training, installation, and ongoing assistance.' },
              { icon: Leaf, title: 'Environmental Care', description: 'Solutions designed to improve efficiency and reduce the environmental footprint of farming.' },
            ].map((commitment, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="bg-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-sm">
                  <commitment.icon className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{commitment.title}</h3>
                <p className="text-gray-600 text-sm">{commitment.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Be Part of the Solution
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Whether you're a farmer looking to improve your operations, an investor interested in agricultural technology, or a partner organization, join us in transforming African agriculture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="inline-flex items-center justify-center bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-colors">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Impact;
