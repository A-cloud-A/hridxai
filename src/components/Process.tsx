import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Pencil, Code, TrendingUp } from 'lucide-react';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discovery & Scoping',
      description:
        'Understand business objectives, assess current systems, and define measurable ROI goals.',
      color: 'from-blue-600 to-blue-500',
    },
    {
      icon: Pencil,
      number: '02',
      title: 'Automation Design',
      description:
        'Map workflows, select tools, and design AI systems that integrate seamlessly into existing infrastructure.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code,
      number: '03',
      title: 'Development & Integration',
      description:
        'Build, train, and deploy AI agents or automation modules while ensuring compliance and scalability.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      number: '04',
      title: 'Optimization & Growth',
      description:
        'Monitor results, iterate on data feedback, and expand automation layers as ROI grows.',
      color: 'from-teal-500 to-emerald-500',
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A proven methodology that delivers results at every stage
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-cyan-500 to-emerald-500 transform -translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div
                  className={`${
                    index % 2 === 0 ? 'lg:text-right' : 'lg:col-start-2'
                  } mb-8 lg:mb-0`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-effect rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 group hover:shadow-2xl hover:shadow-blue-500/20"
                  >
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        index % 2 === 0 ? 'lg:justify-end' : ''
                      }`}
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className={`text-6xl font-bold text-gradient opacity-30`}>
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
                  </motion.div>
                </div>

                <div className="hidden lg:flex justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                    className={`w-6 h-6 rounded-full bg-gradient-to-r ${step.color} shadow-lg`}
                    style={{
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)',
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 inline-block">
            <p className="text-lg text-gray-300 mb-2">
              Average project timeline:{' '}
              <span className="text-gradient font-bold">3-6 weeks</span>
            </p>
            <p className="text-sm text-gray-500">Voice agents typically deploy in 7-14 days</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
