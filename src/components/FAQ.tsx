import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const faqs: FAQItem[] = [
    {
      question: 'Is this custom?',
      answer:
        'Yes. We scope to ROI, not retainers. Your stack, your use cases. Every solution is tailored to your specific business needs and technical requirements.',
    },
    {
      question: 'Voice agent or human?',
      answer:
        'Both. AI handles routine volume and instant responses; humans close nuance. This hybrid approach ensures efficiency while maintaining the personal touch for complex interactions.',
    },
    {
      question: 'How fast can we go live?',
      answer:
        'Voice agents: typically 7–14 days. MVPs: 3–6 weeks (scope-dependent). We prioritize rapid deployment without compromising quality or security.',
    },
    {
      question: 'Security & data?',
      answer:
        'We use clean, reviewable workflows and compliance-minded processes. You keep control of data and access. Bank-grade encryption and SOC 2 ready infrastructure.',
    },
    {
      question: 'Do you disclose pricing?',
      answer:
        'For projects, yes—see plans above. For ongoing ops, we tailor based on usage and outcomes. Transparent pricing with no hidden fees or surprise costs.',
    },
    {
      question: 'What tech stacks do you support?',
      answer:
        'CRM (HubSpot/Salesforce/Pipedrive, etc.), calendars, telephony/SIP, WhatsApp/SMS, helpdesks, and modern app infra. If you use it, we can integrate with it.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-900/30 to-gray-950" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-4 mb-12"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openIndex === index ? (
                    <Minus className="w-6 h-6 text-blue-400" />
                  ) : (
                    <Plus className="w-6 h-6 text-blue-400" />
                  )}
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <button
            onClick={scrollToBooking}
            className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-200 hover:scale-105 inline-flex items-center gap-2 group"
          >
            Book a Discovery Call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
