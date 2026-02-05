import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter, Youtube } from 'lucide-react';
import logo from '@/assets/sastraism-logo.png';

const footerLinks = {
  platforms: [
    { name: 'TARA', href: '/platforms#tara_sec' },
    { name: 'SARA', href: '/platforms#sara_sec' },
    // { name: 'API Access', href: '/#' },
    // { name: 'Documentation', href: '/#' },
  ],
  resources: [
    { name: 'Research Papers', href: '/#' },
    { name: 'Case Studies', href: '/#' },
    { name: 'Blog', href: '/#' },
    { name: 'News', href: '/#' },
  ],
  company: [
    { name: 'About', href: '/#about' },
    { name: 'Team', href: '/#team' },
    // { name: 'Careers', href: '/#' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/#' },
    { name: 'Terms of Service', href: '/#' },
    { name: 'Cookie Policy', href: '/#' },
  ],
};

const socialLinks = [
  // { icon: Twitter, href: '/#', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/sastra-ai-samudra-mathanam-8150a53a8/', label: 'LinkedIn' },
  // { icon: Youtube, href: '/#', label: 'YouTube' },
  // { icon: Github, href: '/#', label: 'GitHub' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-deep border-t border-border">
      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          {/* Brand Column */}
          <div className="flex flex-col h-min w-full md:w-fit">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src={logo} alt="SASTRAISM" className="h-10 w-auto" />
              <span className="font-display font-bold text-xl">
                <span className="text-foreground">SASTRA</span>
                <span className="gradient-text">ISM</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm mb-6 max-w-xs">
              An Institutional AI Foundry for Teaching, Assessment & Real-World Deployment.
              Funded by TCS Foundation.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center hover:bg-secondary/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground" />
                </motion.a>
              ))}
            </div>
          </div>
          <div className='flex flex-row w-full justify-around md:w-1/2'>
            <div className="flex flex-col">
              <h4 className="font-display font-semibold mb-4">Platforms</h4>
              <ul className="space-y-3">
                {footerLinks.platforms.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* <div className="flex flex-col">
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

            <div className="flex flex-col">
              <h4 className="font-display font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h4 className="font-display font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <span>© 2026 SASTRAISM. All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span>A TATA & SASTRA Initiative</span>
            </div>

            {/* Scroll to Top */}
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:neon-glow-teal transition-all"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-5 h-5 text-muted-foreground" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
