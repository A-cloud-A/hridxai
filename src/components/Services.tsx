import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Bot, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState<'automation' | 'management'>('automation');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = {
    automation: {
      icon: Bot,
      title: 'AI Automation',
      description: 'Streamline operations with intelligent automation that scales',
      points: [
        'Custom workflow automation tailored to your processes',
        'AI-powered decision making and task routing',
        'Integration with existing tools and systems',
        'Real-time monitoring and performance optimization',
        'Scalable architecture that grows with your business',
      ],
      diagram: ['CRM', 'AI Engine', 'Automation', 'Analytics'],
    },
    management: {
      icon: Users,
      title: 'Client Management',
      description: 'Intelligent systems that nurture and convert leads automatically',
      points: [
        'AI voice agents for 24/7 client engagement',
        'Automated lead qualification and scoring',
        'Personalized communication at scale',
        'Seamless CRM integration and data sync',
        'Predictive analytics for client behavior',
      ],
      diagram: ['Leads', 'AI Agent', 'CRM', 'Conversion'],
    },
  };

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive AI solutions designed for measurable business impact
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="glass-effect rounded-full p-2 inline-flex gap-2">
            <button
              onClick={() => setActiveService('automation')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === 'automation'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5" />
                AI Automation
              </div>
            </button>
            <button
              onClick={() => setActiveService('management')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeService === 'management'
                  ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Client Management
              </div>
            </button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                {activeService === 'automation' ? (
                  <Bot className="w-10 h-10 text-blue-400" />
                ) : (
                  <Users className="w-10 h-10 text-blue-400" />
                )}
                <h3 className="text-3xl font-bold">{services[activeService].title}</h3>
              </div>
              <p className="text-xl text-gray-400 mb-8">
                {services[activeService].description}
              </p>

              <div className="space-y-4 mb-8">
                {services[activeService].points.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{point}</span>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={scrollToBooking}
                className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-200 hover:scale-105 flex items-center gap-2 group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="glass-effect rounded-3xl p-8">
              <motion.div
                key={`diagram-${activeService}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {services[activeService].diagram.map((step, index) => (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <span className="text-lg font-semibold">{step}</span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-blue-400" />
                      </div>
                    </div>
                    {index < services[activeService].diagram.length - 1 && (
                      <div className="absolute left-6 top-full w-0.5 h-6 bg-gradient-to-b from-blue-500 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
