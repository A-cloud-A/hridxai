import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  scenario: string;
  outcome: string;
  duration: string;
}

const AudioPlayer = ({ title, scenario, outcome, duration }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        <button
          onClick={togglePlay}
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-200 hover:scale-105"
        >
          {isPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white ml-1" />
          )}
        </button>
        <div className="flex-1">
          <h4 className="font-bold text-lg mb-1">{title}</h4>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Volume2 className="w-4 h-4" />
            <span>{duration}</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: isPlaying ? '100%' : `${progress}%` }}
            transition={{ duration: isPlaying ? 3 : 0 }}
            className="h-full bg-gradient-to-r from-blue-600 to-blue-400"
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>0:00</span>
          <span>{duration}</span>
        </div>
      </div>

      <div className="space-y-3">
        <div className="glass-effect rounded-xl p-4">
          <div className="text-xs text-blue-400 font-semibold mb-1">SCENARIO</div>
          <p className="text-sm text-gray-300">{scenario}</p>
        </div>
        <div className="glass-effect rounded-xl p-4">
          <div className="text-xs text-emerald-400 font-semibold mb-1">OUTCOME</div>
          <p className="text-sm text-gray-300">{outcome}</p>
        </div>
      </div>
    </motion.div>
  );
};

const AudioShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const audioSamples = [
    {
      title: 'Lead Qualification',
      scenario: 'Incoming call from potential client asking about services',
      outcome: 'Successfully qualified lead and scheduled discovery call',
      duration: '2:34',
    },
    {
      title: 'Appointment Booking',
      scenario: 'Client wants to reschedule their consultation',
      outcome: 'Appointment rescheduled with calendar integration',
      duration: '1:45',
    },
    {
      title: 'FAQ Handling',
      scenario: 'Customer inquiry about pricing and timelines',
      outcome: 'Questions answered with personalized pricing sent via email',
      duration: '3:12',
    },
    {
      title: 'Follow-up Call',
      scenario: 'Checking in with prospect after initial consultation',
      outcome: 'Re-engaged prospect and moved to next stage of pipeline',
      duration: '2:18',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Voice AI in <span className="text-gradient">Action</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience how our AI voice agents handle real conversations
          </p>
          <p className="text-sm text-gray-500 mt-4">
            Audio samples coming soon - placeholder interface shown below
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {audioSamples.map((sample, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AudioPlayer {...sample} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AudioShowcase;
