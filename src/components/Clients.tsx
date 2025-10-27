import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const clients = [
    { name: 'Nirvana Restaurant', logo: 'NR' },
    { name: 'Prince Limousine', logo: 'PL' },
    { name: 'Bhaktimay', logo: 'BM' },
    { name: 'Royal Star Restaurant', logo: 'RS' },
  ];

  const duplicatedClients = [...clients, ...clients, ...clients];

  return (
    <section id="clients" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Delivering AI solutions that drive real business results
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative overflow-hidden"
        >
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            animate={{
              x: [0, -1920],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
            className="flex gap-12 items-center"
          >
            {duplicatedClients.map((client, index) => (
              <motion.div
                key={`${client.name}-${index}`}
                whileHover={{ scale: 1.1 }}
                className="flex-shrink-0 group"
              >
                <div className="glass-effect rounded-2xl p-8 w-64 h-32 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center mb-3 text-white font-bold text-xl group-hover:scale-110 transition-transform">
                    {client.logo}
                  </div>
                  <div className="font-semibold text-center text-gray-300 group-hover:text-white transition-colors">
                    {client.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
