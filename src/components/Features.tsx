import React from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, ChartBarIcon, HeartIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Daily Insights',
    description: 'Receive personalized daily guidance based on ancient numerology principles combined with AI.',
    icon: SparklesIcon,
  },
  {
    name: 'Personal Growth Tracking',
    description: 'Track your journey with interactive journaling and progress visualization.',
    icon: ChartBarIcon,
  },
  {
    name: 'Gratitude Practice',
    description: 'Develop a daily gratitude practice with guided prompts and reflection tools.',
    icon: HeartIcon,
  },
  {
    name: 'Custom Forecasts',
    description: 'Get personalized forecasts and recommendations for important life decisions.',
    icon: LightBulbIcon,
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-gray-900 sm:text-4xl"
          >
            Ancient Wisdom Meets Modern Technology
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-xl text-gray-600"
          >
            Experience the power of AI-enhanced numerology for personal growth and decision-making
          </motion.p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                    <p className="mt-2 text-base text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
