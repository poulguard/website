import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { submitToWaitlist, submitContact } from '../lib/supabase';

const Contact = () => {
  const [formType, setFormType] = useState<'waitlist' | 'contact'>('waitlist');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'Farmer',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (formType === 'waitlist') {
        await submitToWaitlist({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          phone: formData.phone,
        });
      } else {
        await submitContact({
          name: formData.name,
          email: formData.email,
          role: formData.role,
          message: formData.message,
        });
      }
      setSubmitted(true);
      setFormData({ name: '', email: '', role: 'Farmer', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to submit form. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <section className="relative bg-gradient-to-br from-green-700 to-green-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-green-50">
              Have questions? Ready to join the revolution in poultry farming? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Mail,
                title: 'Email',
                content: 'info@poulguard.com',
                description: 'Get in touch via email',
              },
              {
                icon: Phone,
                title: 'Phone',
                content: '+254 (0) 700 000 000',
                description: 'Call us during business hours',
              },
              {
                icon: MapPin,
                title: 'Location',
                content: 'Nairobi, Kenya',
                description: 'Visit our office',
              },
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 text-center"
              >
                <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <contact.icon className="w-7 h-7 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-green-700 font-semibold mb-1">{contact.content}</p>
                <p className="text-sm text-gray-600">{contact.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
            >
              <div className="mb-8">
                <div className="flex space-x-4">
                  <button
                    onClick={() => { setFormType('waitlist'); setSubmitted(false); }}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                      formType === 'waitlist'
                        ? 'bg-green-700 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Join Waitlist
                  </button>
                  <button
                    onClick={() => { setFormType('contact'); setSubmitted(false); }}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all ${
                      formType === 'contact'
                        ? 'bg-green-700 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Send Message
                  </button>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-600 mb-2">
                    {formType === 'waitlist'
                      ? 'You have been added to our waitlist. We will contact you soon with updates.'
                      : 'Your message has been received. We will get back to you as soon as possible.'}
                  </p>
                  <p className="text-sm text-gray-500">
                    Check your email for confirmation
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Role/Category *
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                      >
                        <option>Farmer</option>
                        <option>Investor</option>
                        <option>Partner/Business</option>
                        <option>NGO/Organization</option>
                        <option>Other</option>
                      </select>
                    </div>
                    {formType === 'waitlist' && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-900 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                    )}
                  </div>

                  {formType === 'contact' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition resize-none"
                        placeholder="Tell us more about your inquiry..."
                      ></textarea>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>{loading ? 'Sending...' : 'Send'}</span>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    We respect your privacy and will never share your information.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'When will Poulguard be available?',
                a: 'We are currently in beta and building our waitlist. Early adopters will receive exclusive pricing and priority support.',
              },
              {
                q: 'How much will Poulguard cost?',
                a: 'Pricing is designed to be affordable for small and medium-scale farmers. We will share detailed pricing with waitlist members.',
              },
              {
                q: 'Do I need technical knowledge to use Poulguard?',
                a: 'No. Our system is designed to be farmer-friendly with simple interfaces. We provide training and ongoing support.',
              },
              {
                q: 'What if I have connectivity issues?',
                a: 'Poulguard works in low-connectivity environments. We have designed the system to handle intermittent connections.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
