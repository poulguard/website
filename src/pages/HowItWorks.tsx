import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Camera, Brain, Database, Bell, TrendingUp, Shield, Eye, Zap, CheckCircle, ArrowRight, ArrowDown } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-green-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How Poulguard Works
            </h1>
            <p className="text-xl text-green-50">
              Understanding the technology behind AI-powered poultry monitoring
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Complete System Flow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From camera installation to actionable insights, here's how Poulguard transforms your poultry farming
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 hidden lg:block"></div>

            {[
              { step: 1, title: 'Camera Installation', icon: Camera, description: 'Our technical team installs high-resolution AI cameras in your poultry house, positioned for optimal coverage of your flock.', details: ['Professional installation by certified technicians', 'Strategic positioning for maximum coverage', 'Weatherproof and durable hardware', 'Minimal disruption to your operations'], align: 'right' },
              { step: 2, title: 'Continuous Video Capture', icon: Eye, description: 'Cameras capture high-quality video footage of your flock 24/7, ensuring no critical moment is missed.', details: ['24/7 continuous monitoring', 'High-resolution video capture', 'Night vision capabilities', 'Secure data transmission'], align: 'left' },
              { step: 3, title: 'AI Processing & Analysis', icon: Brain, description: 'Advanced computer vision and machine learning models analyze chicken behavior, movement patterns, and health indicators in real-time.', details: ['Real-time behavior analysis', 'Movement pattern recognition', 'Anomaly detection algorithms', 'Health indicator assessment'], align: 'right' },
              { step: 4, title: 'Data Storage & Learning', icon: Database, description: 'All data is securely stored and used to continuously improve AI accuracy while building your farm historical records.', details: ['Secure cloud storage', 'Historical trend analysis', 'Continuous AI improvement', 'Privacy-protected data'], align: 'left' },
              { step: 5, title: 'Smart Alerts & Notifications', icon: Bell, description: 'When the AI detects potential issues, you receive instant alerts via SMS, email, or mobile app.', details: ['Instant issue detection', 'Multi-channel notifications', 'Priority-based alerts', 'Actionable recommendations'], align: 'right' },
              { step: 6, title: 'Insights & Action', icon: TrendingUp, description: 'Access detailed analytics, trends, and recommendations through your dashboard to make informed decisions.', details: ['Comprehensive dashboard', 'Visual analytics and reports', 'Trend identification', 'Data-driven recommendations'], align: 'left' },
            ].map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, x: step.align === 'right' ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className={`relative mb-12 lg:mb-24 ${step.align === 'left' ? 'lg:pr-1/2' : 'lg:pl-1/2'}`}>
                <div className={`lg:w-1/2 ${step.align === 'left' ? 'lg:ml-auto lg:pr-16' : 'lg:pl-16'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-100 hover:border-green-300 transition-colors">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                        <step.icon className="w-8 h-8 text-green-700" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-700 mb-1">Step {step.step}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="hidden lg:block absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>
                </div>

                {index < 5 && (
                  <div className="hidden lg:block absolute top-12 left-1/2 transform -translate-x-1/2">
                    <ArrowDown className="w-6 h-6 text-green-400 animate-bounce" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Understanding the AI Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simplified explanation of the advanced technology powering Poulguard
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Camera, title: 'Computer Vision', description: 'Like human eyes but better, our AI can see and track hundreds of chickens simultaneously, identifying individual birds and their behaviors.' },
              { icon: Brain, title: 'Machine Learning', description: 'Trained on thousands of hours of poultry behavior, our AI learns what normal looks like and can spot abnormalities instantly.' },
              { icon: Zap, title: 'Real-Time Processing', description: 'Powerful cloud computing analyzes video streams in milliseconds, ensuring alerts reach you immediately when action is needed.' },
            ].map((tech, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-white rounded-xl p-8 shadow-md">
                <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 mx-auto">
                  <tech.icon className="w-8 h-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{tech.title}</h3>
                <p className="text-gray-600 text-center">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                What Makes Poulguard Different?
              </h2>
              <div className="space-y-6">
                {[
                  { icon: Shield, title: 'Built for African Farms', description: 'Designed specifically for the challenges and conditions of African poultry farming, not adapted from Western systems.' },
                  { icon: Brain, title: 'Poultry-Specific AI', description: 'Our AI is trained exclusively on chicken behavior, not generic animal detection, ensuring higher accuracy.' },
                  { icon: Zap, title: 'Affordable & Accessible', description: 'Pricing designed for small and medium-scale farmers, with flexible payment options and local support.' },
                  { icon: TrendingUp, title: 'Continuously Improving', description: 'Every farm using Poulguard helps improve the AI, making it smarter and more accurate over time.' },
                ].map((point, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <point.icon className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{point.title}</h3>
                      <p className="text-gray-600">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative">
              <img src="https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Healthy poultry flock" className="rounded-2xl shadow-2xl" />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-900">Real Results</span>
                </div>
                <p className="text-sm text-gray-600">Up to 30% reduction in mortality rates reported by early adopters</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              See Poulguard in Action
            </h2>
            <p className="text-xl text-green-50 mb-8">
              Ready to experience the future of poultry farming? Join our waitlist for early access and exclusive pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/product" className="inline-flex items-center justify-center bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-colors">
                Explore Features
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
