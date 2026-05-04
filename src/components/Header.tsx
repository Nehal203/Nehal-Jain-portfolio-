import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20' 
        : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('hero')}
            className={`flex items-center space-x-2 text-2xl font-bold ${
              isScrolled ? 'text-black dark:text-white' : 'text-white'
            } hover:text-blue-600 dark:hover:text-blue-400 transition-colors group`}
          >
            <span className="hidden sm:block">NJ</span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative ${
                  isScrolled ? 'text-black-500 dark:text-gray-300' : 'text-white'
                } hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium py-2 group`}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl ${
                isScrolled ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white/20'
              } hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border ${
                isScrolled ? 'border-gray-200 dark:border-gray-700' : 'border-white/20'
              }`}
            >
              {isDark ? <Sun size={20} className={isScrolled ? '' : 'text-white'} /> : <Moon size={20} className={isScrolled ? '' : 'text-white'} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-3 rounded-xl ${
                isScrolled ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white/20'
              } hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border ${
                isScrolled ? 'border-gray-200 dark:border-gray-700' : 'border-white/20'
              }`}
            >
              {isDark ? <Sun size={20} className={isScrolled ? '' : 'text-white'} /> : <Moon size={20} className={isScrolled ? '' : 'text-white'} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 rounded-xl ${
                isScrolled ? 'bg-gray-100 dark:bg-gray-800' : 'bg-white/20'
              } hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors border ${
                isScrolled ? 'border-gray-200 dark:border-gray-700' : 'border-white/20'
              }`}
            >
              {isMenuOpen ? <X size={24} className={isScrolled ? '' : 'text-white'} /> : <Menu size={24} className={isScrolled ? '' : 'text-white'} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/20 dark:border-gray-700/20 shadow-lg">
            <div className="container mx-auto px-4 py-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium border-b border-gray-200/20 dark:border-gray-700/20 last:border-b-0"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;