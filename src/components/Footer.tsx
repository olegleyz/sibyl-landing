import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              Sibyl
            </span>
            <p className="mt-4 text-gray-600">
              Your AI companion for personal growth and wisdom
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#features" className="text-base text-gray-600 hover:text-primary">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-base text-gray-600 hover:text-primary">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-primary">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
              Connect With Us
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="https://t.me/SibylCompanionBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-600 hover:text-primary"
                >
                  Telegram
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-600 hover:text-primary">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-200 pt-8">
          <p className="text-base text-gray-500 text-center">
            {new Date().getFullYear()} Sibyl. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
