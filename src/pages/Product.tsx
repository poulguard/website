import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Brain, Bell, Activity, Eye, Database, Smartphone, Thermometer, Wind, TrendingUp, Clock, Shield, Zap, ArrowRight } from 'lucide-react';

const Product = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-green-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Poulguard AI Camera System
            </h1>
            <p className="text-xl text-green-50 mb-8">
              Advanced computer vision and AI technology designed specifically for poultry farming. Monitor your entire flock 24/7 with intelligent automation.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
              Request a Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <img src="https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Poulguard AI Camera" className="rounded-2xl shadow-2xl" />
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Your AI Farming Assistant</h2>
              <p className="text-lg text-gray-600 mb-6">
                The Poulguard AI Camera is more than just surveillance. It's an intelligent system that understands poultry behavior, identifies health risks, and provides actionable insights to help you manage your farm more effectively.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Camera, title: 'High-Resolution Monitoring', description: 'Crystal-clear video captures every detail of your flock' },
                  { icon: Brain, title: 'Advanced AI Processing', description: 'Machine learning models trained specifically on poultry behavior' },
                  { icon: Zap, title: 'Real-Time Analysis', description: 'Instant processing and alerts when issues are detected' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Features for Modern Farming
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every feature is designed to give you better control and understanding of your flock
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Activity, title: 'Behavior Analysis', description: 'Track movement patterns, feeding behavior, and activity levels. Detect unusual clustering, lethargy, or distress signals automatically.' },
              { icon: Eye, title: 'Health Monitoring', description: 'AI detects early signs of illness through behavioral changes, posture analysis, and movement patterns before symptoms become visible.' },
              { icon: Bell, title: 'Smart Alerts', description: 'Receive instant notifications via SMS or mobile app when the AI detects potential health issues or abnormal behavior.' },
              { icon: Database, title: 'Historical Data', description: 'Access complete historical records of your flock behavior and health trends to identify patterns and optimize management.' },
              { icon: TrendingUp, title: 'Analytics Dashboard', description: 'Visualize key metrics, mortality rates, growth patterns, and productivity trends with easy-to-understand charts and graphs.' },
              { icon: Clock, title: '24/7 Monitoring', description: 'Continuous surveillance means you never miss critical moments, even during night hours when manual observation is impossible.' },
            ].map((feature, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              What AI Detects
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Detection Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI is trained to identify a wide range of health and behavioral indicators
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                category: 'Behavioral Indicators',
                items: ['Abnormal movement patterns', 'Reduced activity or lethargy', 'Unusual clustering behavior', 'Distress signals and vocalizations', 'Feeding pattern changes', 'Aggressive or pecking behavior'],
              },
              {
                category: 'Health Indicators',
                items: ['Posture abnormalities', 'Respiratory distress signs', 'Mobility issues or limping', 'Isolation from flock', 'Sudden mortality detection', 'Disease outbreak patterns'],
              },
            ].map((section, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-900 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Future Roadmap
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're constantly innovating to bring you more powerful tools for poultry management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Thermometer, title: 'Environmental Sensors', description: 'Monitor temperature, humidity, and air quality in real-time to maintain optimal conditions.', timeline: 'Q2 2026' },
              { icon: Smartphone, title: 'Mobile App', description: 'Manage your farm on the go with our dedicated iOS and Android mobile application.', timeline: 'Q3 2026' },
              { icon: Wind, title: 'Ammonia Detection', description: 'Advanced sensors to monitor ammonia levels and ensure healthy air quality for your flock.', timeline: 'Q4 2026' },
            ].map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-colors">
                <div className="bg-green-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-green-400" />
                </div>
                <div className="text-green-400 text-sm font-semibold mb-2">{item.timeline}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Upgrade Your Poultry Farm?
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Join the waitlist to be among the first farmers to experience the power of AI-driven poultry monitoring.
            </p>
            <Link to="/contact" className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
              Join the Waitlist
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Product;
