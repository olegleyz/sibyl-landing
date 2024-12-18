import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from '@heroicons/react/24/outline';

const features = [
  'Daily personalized insights',
  'Numerology-based guidance',
  'Gratitude journaling',
  'Custom forecasts',
  'Priority support',
  'Advanced analytics',
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Start Your Journey Today
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Try Sibyl free for 7 days, then choose the plan that works best for you
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden lg:max-w-2xl lg:mx-auto"
        >
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="flex justify-center">
              <span className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-primary/10 text-primary">
                Monthly Plan
              </span>
            </div>
            <div className="mt-4 flex justify-center items-baseline text-6xl font-bold">
              $9.99
              <span className="ml-1 text-2xl text-gray-500">/mo</span>
            </div>
          </div>
          <div className="px-6 pt-6 pb-8 sm:p-10 sm:pt-6">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0">
                    <CheckIcon className="h-6 w-6 text-green-500" aria-hidden="true" />
                  </div>
                  <p className="ml-3 text-base text-gray-700">{feature}</p>
                </motion.li>
              ))}
            </ul>
            <div className="mt-8">
              <a
                href="https://t.me/SibylCompanionBot"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-center rounded-lg py-3 px-4 text-white font-medium hover:bg-primary-dark transition-colors duration-200"
              >
                Start Free Trial
              </a>
            </div>
            <p className="mt-4 text-sm text-center text-gray-500">
              No credit card required. Cancel anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
