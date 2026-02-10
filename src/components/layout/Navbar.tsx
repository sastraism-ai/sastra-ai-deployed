import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLocation, useNavigate } from 'react-router-dom'; // Import these
import logo from '@/assets/sastraism-logo.png';
import { Link } from 'react-router-dom';


const navLinks = [
  { name: 'About', href: 'about' },
  { name: 'Platforms', href: 'platforms' },
  { name: 'Technology', href: 'technology' },
  { name: 'TRL Roadmap', href: 'trl' },
  { name: 'Team', href: 'team' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Contact', href: 'contact' },
];


export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Hooks for navigation logic
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    if (location.pathname === '/') {
      // already on home → just scroll
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -100;
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      // on another page → go home with hash
      navigate(`/#${id}`);
    }

    setIsMobileMenuOpen(false);
  };
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/80 backdrop-blur-xl border-b border-border'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Uses standard navigate to reset scroll */}
          <motion.a
            onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo(0, 0); }}
            href="/"
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img src={logo} alt="SASTRAISM" className="h-10 w-auto" />
            <span className="font-display font-bold text-xl hidden sm:block">
              <span className="text-foreground">SASTRA</span>
              <span className="gradient-text">ISM</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 group-hover:w-full" />
              </motion.button>
            ))}

            <button onClick={() => navigate('/platforms')}>
              <Button variant="hero" size="sm">
                Explore our Platforms
              </Button>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 text-lg text-left"
                >
                  {link.name}
                </button>
              ))}
              <Button variant="hero" className="mt-4" onClick={() => navigate('/platforms')}>
                Explore TARA
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};