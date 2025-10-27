import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, Phone, MessageCircle, CheckCircle2, DollarSign } from 'lucide-react';

const Booking = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const expectations = [
    'ROI-based approach, not retainers',
    'Fast setup for automations and voice agents',
    'Transparent pricing, no hidden layers',
    'Direct access to your project engineer',
    'Scalable systems for future expansion',
  ];

  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Get Started</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Schedule a call to discuss how AI can transform your business
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-8">What to Expect</h3>
            <div className="space-y-6 mb-8">
              {expectations.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-gray-300 text-lg">{item}</p>
                </motion.div>
              ))}
            </div>

            <div className="glass-effect rounded-2xl p-6">
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Phone className="w-5 h-5 text-blue-400" />
                Direct Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+41767053502"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+41 767053502</span>
                </a>
                <a
                  href="https://wa.me/41767053502"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp: +41 767053502</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Free Discovery Call</h3>
                  <p className="text-sm text-gray-400">30 minutes</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Explore your needs, discuss potential solutions, and determine if we're a good fit.
                No commitment required.
              </p>
              <a
                href="https://calendly.com/hridxai/discovery-call"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-4 rounded-full font-semibold text-center hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-200 hover:scale-105"
              >
                Schedule Free Call
              </a>
            </div>

            <div className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Strategy Deep-Dive</h3>
                  <p className="text-sm text-gray-400">90 minutes - $250</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                Comprehensive session with technical scoping, ROI projections, and a custom
                implementation roadmap. Refundable if you proceed with a project.
              </p>
              <a
                href="https://calendly.com/hridxai/strategy-session"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full glass-effect border border-emerald-400/30 text-emerald-400 px-6 py-4 rounded-full font-semibold text-center hover:bg-emerald-400/10 transition-all duration-200 hover:scale-105"
              >
                Book Deep-Dive Session
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
