import { motion } from 'framer-motion';
import { Shield, Zap, Clock, MessageSquare, Boxes, TrendingUp } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'AI agents that never sleep, always ready to engage',
      metric: '99.9%',
      metricLabel: 'Uptime',
      size: 'large',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance-minded workflows',
      highlight: 'SOC 2 Ready',
      size: 'medium',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized response times for seamless experiences',
      progress: 95,
      size: 'medium',
    },
    {
      icon: MessageSquare,
      title: 'AI Voice Intelligence',
      description: 'Natural conversations that convert prospects to customers',
      conversation: true,
      size: 'large',
    },
    {
      icon: Boxes,
      title: 'MVP Excellence',
      description: 'Clean, scalable architecture from day one',
      diagram: true,
      size: 'medium',
    },
    {
      icon: TrendingUp,
      title: 'Real-Time Analytics',
      description: 'Track performance metrics and ROI continuously',
      analytics: true,
      size: 'medium',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Built for <span className="text-gradient">Performance</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Enterprise-grade features that deliver measurable results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 ${
                feature.size === 'large' ? 'lg:col-span-2' : ''
              }`}
            >
              <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 mb-6">{feature.description}</p>

              {feature.metric && (
                <div className="mt-6">
                  <div className="text-5xl font-bold text-gradient">{feature.metric}</div>
                  <div className="text-sm text-gray-500 mt-2">{feature.metricLabel}</div>
                </div>
              )}

              {feature.highlight && (
                <div className="mt-6 inline-block">
                  <span className="glass-effect px-4 py-2 rounded-full text-sm text-blue-400 border border-blue-400/30">
                    {feature.highlight}
                  </span>
                </div>
              )}

              {feature.progress && (
                <div className="mt-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-400">Performance</span>
                    <span className="text-sm text-blue-400">{feature.progress}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${feature.progress}%` } : {}}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
                    />
                  </div>
                </div>
              )}

              {feature.conversation && (
                <div className="mt-6 space-y-3">
                  <div className="glass-effect rounded-2xl p-3 text-sm text-left">
                    <div className="text-blue-400 mb-1 font-semibold">AI Agent</div>
                    <div className="text-gray-300">How can I help you today?</div>
                  </div>
                  <div className="glass-effect rounded-2xl p-3 text-sm text-left ml-8">
                    <div className="text-gray-400 mb-1 font-semibold">Prospect</div>
                    <div className="text-gray-300">Tell me about your services</div>
                  </div>
                </div>
              )}

              {feature.diagram && (
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="h-12 glass-effect rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <div className="h-12 glass-effect rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                  <div className="h-12 glass-effect rounded-lg flex items-center justify-center">
                    <div className="w-2 h-2 bg-blue-400 rounded-full" />
                  </div>
                </div>
              )}

              {feature.analytics && (
                <div className="mt-6 flex items-end gap-2 h-20">
                  {[40, 70, 50, 85, 65, 90].map((height, i) => (
                    <motion.div
                      key={i}
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${height}%` } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                      className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
