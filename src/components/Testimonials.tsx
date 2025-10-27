import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star } from 'lucide-react';

interface Testimonial {
  name: string;
  username: string;
  content: string;
  avatar: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 mb-4">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-blue-400 text-blue-400" />
        ))}
      </div>
      <p className="text-gray-300 mb-6 leading-relaxed">{testimonial.content}</p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-sm text-gray-500">{testimonial.username}</div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      username: '@sarahj_tech',
      content:
        'HridxAI transformed our lead generation process. We went from manual outreach to fully automated qualification, and our conversion rate doubled in just 3 months.',
      avatar: 'S',
    },
    {
      name: 'Michael Chen',
      username: '@mchen_ceo',
      content:
        'The AI voice agents are incredible. They handle routine inquiries 24/7, freeing up our team to focus on high-value conversations. ROI was clear within weeks.',
      avatar: 'M',
    },
    {
      name: 'Emily Rodriguez',
      username: '@emily_ops',
      content:
        'Implementation was seamless. The team understood our workflows and built automation that actually fits how we work. No more forcing our processes into rigid software.',
      avatar: 'E',
    },
    {
      name: 'David Park',
      username: '@davidp_founder',
      content:
        "Best decision we made this year. The MVP they built scaled from 10 to 1000 users without breaking. Clean architecture and transparent communication throughout.",
      avatar: 'D',
    },
    {
      name: 'Lisa Thompson',
      username: '@lisathompson',
      content:
        'Finally, an AI solution that delivers on its promises. The analytics dashboard gives us real-time insights we never had before. Data-driven decisions have never been easier.',
      avatar: 'L',
    },
    {
      name: 'James Wilson',
      username: '@jwilson_tech',
      content:
        'Security was our biggest concern, and they exceeded expectations. Compliance-minded approach with complete transparency. We trust them with our most sensitive workflows.',
      avatar: 'J',
    },
  ];

  const column1 = testimonials.slice(0, 2);
  const column2 = testimonials.slice(2, 4);
  const column3 = testimonials.slice(4, 6);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/50 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real results from businesses that chose to automate with intelligence
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-gray-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-6 max-h-[600px] overflow-hidden"
          >
            <motion.div
              animate={{
                y: [0, -1000],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="space-y-4"
            >
              {[...column1, ...column1].map((testimonial, index) => (
                <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>

            <motion.div
              animate={{
                y: [0, -1000],
              }}
              transition={{
                duration: 19,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="space-y-4"
            >
              {[...column2, ...column2].map((testimonial, index) => (
                <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>

            <motion.div
              animate={{
                y: [0, -1000],
              }}
              transition={{
                duration: 17,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="space-y-4"
            >
              {[...column3, ...column3].map((testimonial, index) => (
                <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
