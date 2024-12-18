import React from 'react';
import { motion } from 'framer-motion';
import MockupImage from './MockupImage';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-gray-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900">
            Meet Sibyl - Your
            <span className="block text-primary">AI Guide to Inner Wisdom</span>
          </h1>

          <p className="max-w-2xl mx-auto text-xl text-gray-600">
            Combine ancient numerology with modern AI to receive daily insights, 
            personalized forecasts, and guidance for your personal growth journey.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
          >
            <a
              href="https://t.me/SibylCompanionBot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-colors duration-200"
            >
              Start Free Trial
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-primary bg-white border border-primary hover:bg-gray-50 transition-colors duration-200"
            >
              Learn More
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 pointer-events-none"></div>
            <div className="relative max-w-4xl mx-auto">
              <MockupImage />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
