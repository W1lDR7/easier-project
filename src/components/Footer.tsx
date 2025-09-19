import React from 'react';
import { Bot } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Bot className="w-6 h-6 text-purple-400" />
            <span className="font-semibold text-lg">Real Estate AI Assistant</span>
          </div>
          <p className="text-gray-400 text-sm">
            Powered by <span className="text-purple-400 font-medium">Easier Project</span> | AI Solutions
          </p>
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs">
              © 2025 Easier Project. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;