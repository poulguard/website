import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Camera, Brain, Bell, TrendingUp, Heart, Activity, AlertTriangle, Shield, BarChart3, CheckCircle, ArrowRight } from 'lucide-react';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-green-50 via-white to-green-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                AI-Powered Poultry Intelligence
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-Powered Poultry Monitoring for <span className="text-green-700">Healthier Flocks</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Monitor chicken health and behavior in real-time with computer vision and AI. Detect disease early, reduce mortality, and make data-driven decisions for your poultry farm.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="inline-flex items-center justify-center bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl">
                  Join the Waitlist
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link to="/how-it-works" className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold border-2 border-green-700 hover:bg-green-50 transition-colors">
                  How It Works
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-100 to-green-50 p-8">
                <img src="https://images.pexels.com/photos/1300355/pexels-photo-1300355.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Healthy poultry flock" className="rounded-xl w-full h-auto" />
                <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">Live Monitoring</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Challenges Facing Poultry Farmers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Traditional poultry farming faces significant challenges that impact productivity and profitability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: 'High Mortality Rates',
                description: 'Disease outbreaks can devastate entire flocks before symptoms are noticed, leading to significant financial losses.',
              },
              {
                icon: Activity,
                title: 'Limited Real-Time Visibility',
                description: 'Manual observation is time-consuming and cannot provide 24/7 monitoring, missing critical early warning signs.',
              },
              {
                icon: BarChart3,
                title: 'Lack of Data Insights',
                description: 'Without data-driven insights, farmers struggle to optimize feeding, health management, and overall productivity.',
              },
            ].map((problem, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <div className="relative">
                <img src="https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=800" alt="AI technology monitoring chickens" className="rounded-2xl shadow-2xl" />
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Poulguard: Your AI-Powered Solution</h2>
              <p className="text-lg text-gray-600 mb-8">
                Poulguard Intelligence combines cutting-edge computer vision and AI technology to provide 24/7 monitoring of your poultry flock. Our smart camera system detects health issues, behavioral changes, and environmental risks before they become critical.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Camera, title: 'AI-Powered Camera', description: 'Computer vision technology monitors every chicken, every moment' },
                  { icon: Brain, title: 'Smart Detection', description: 'Advanced AI identifies abnormal behavior and health risks instantly' },
                  { icon: Bell, title: 'Real-Time Alerts', description: 'Instant notifications when issues are detected, allowing quick action' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Four simple steps to transform your poultry farming with AI technology</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Install Camera', description: 'Our team installs the Poulguard AI camera in your poultry house', icon: Camera },
              { step: '02', title: 'AI Monitoring', description: 'Computer vision monitors your flock 24/7, analyzing behavior and health', icon: Brain },
              { step: '03', title: 'Detect Issues', description: 'AI identifies abnormal patterns, health risks, and environmental concerns', icon: Shield },
              { step: '04', title: 'Get Insights', description: 'Receive real-time alerts and actionable data to make informed decisions', icon: TrendingUp },
            ].map((step, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="relative">
                <div className="bg-gray-800 rounded-xl p-6 h-full border border-gray-700 hover:border-green-500 transition-colors">
                  <div className="text-green-500 text-5xl font-bold mb-4 opacity-20">{step.step}</div>
                  <div className="bg-green-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Poulguard Advantage</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your poultry farming with measurable benefits and real results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Reduced Mortality', description: 'Early detection of health issues prevents disease spread and reduces flock losses', stat: 'Up to 30% reduction' },
              { icon: Activity, title: 'Early Disease Detection', description: 'AI spots subtle behavioral changes that indicate illness before symptoms appear', stat: 'Days earlier' },
              { icon: TrendingUp, title: 'Improved Productivity', description: 'Data-driven insights optimize feeding, environment, and flock management', stat: '15-25% increase' },
              { icon: BarChart3, title: 'Data-Driven Decisions', description: 'Historical trends and analytics help you plan and improve operations', stat: 'Real-time insights' },
            ].map((benefit, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} viewport={{ once: true }} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 mb-3">{benefit.description}</p>
                <div className="text-green-700 font-semibold text-sm">{benefit.stat}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-green-700 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Poultry Farm?</h2>
            <p className="text-xl text-green-50 mb-8">
              Join forward-thinking farmers who are using AI to improve their flock health and productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center justify-center bg-white text-green-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg">
                Join the Waitlist
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/product" className="inline-flex items-center justify-center bg-green-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-900 transition-colors">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Trusted by Poultry Farmers Across Kenya
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Poulguard Intelligence is built specifically for African poultry farmers, understanding the unique challenges and opportunities in our market.
                </p>
                <div className="space-y-4">
                  {['Affordable pricing for small and medium-scale farmers', 'Local support and installation services', 'Designed for African farming conditions', 'Continuous AI improvements and updates'].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img src="https://images.pexels.com/photos/1359229/pexels-photo-1359229.jpeg?auto=compress&cs=tinysrgb&w=800" alt="African poultry farmer" className="rounded-xl shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
