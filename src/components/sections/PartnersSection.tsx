import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Building2, GraduationCap, HandHeart, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button'; // Assuming you have this from previous components
// Import your logos here. Example: import TCSLogo from "@/assets/tcs-logo.png"
import sastra_logo from "@/assets/logos/sastra_logo.png"
import tata_logo from "@/assets/logos/tata_logo.jpg"
import tcs_logo from "@/assets/logos/tcs_logo.jpg"

const partners = [
  {
    id: 'tcs',
    name: 'TCS Foundation',
    type: 'Strategic Funding Partner',
    image: tcs_logo,
    description: 'The philanthropic arm of Tata Consultancy Services. They provide the core funding grant that powers our research into Large Language Models and their application in Indian education.',
    website: 'https://www.tcs.com/',
    color: 'from-blue-400/20 to-violet-400/20', // Custom gradient for card glow
  },
  {
    id: 'tata',
    name: 'TATA Group',
    type: 'Corporate Sponsor',
    image: tata_logo,
    description: 'A global enterprise that provides industrial mentorship, computing infrastructure support, and pathways for deploying our AI solutions into real-world enterprise environments.',
    website: 'https://www.tata.com/',
    color: 'from-blue-600/20 to-cyan-400/20',
  },
  {
    id: 'sastra',
    name: 'SASTRA Deemed University',
    type: 'Academic & Research Host',
    image: sastra_logo,
    description: 'A leading research university offering intellectual resources, campus facilities, and a real-world academic environment to validate the TARA and SARA platforms.',
    website: 'https://www.sastra.edu',
    color: 'from-red-500/20 to-orange-400/20',
  },
];

export const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="partners" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-secondary/5 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Ecosystem</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Backed by
            <br />
            <span className="gradient-text">Renowned Academic & Industry Institutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our work is made possible through the generous support and strategic collaboration of India's leading industrial and academic institutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="glass-card h-full p-1 flex flex-col overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_-5px_rgba(var(--secondary-rgb),0.3)]">

                {/* Logo / Image Placeholder Area */}
                <div className={`relative h-48 rounded-t-lg overflow-hidden bg-gradient-to-br ${partner.color} flex items-center justify-center p-8`}>

                  <img 
                      src={partner.image} 
                      alt={`${partner.name} logo`} 
                      className="w-auto h-24 object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500" 
                  />


                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>

                <div className="p-6 flex flex-col flex-grow bg-card/30">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary/10 text-secondary border border-secondary/20 mb-3">
                      {partner.type}
                    </span>
                    <h3 className="font-display text-2xl font-bold">{partner.name}</h3>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {partner.description}
                  </p>

                  <div className="pt-4 border-t border-white/5">
                    <a
                      href={partner.website}
                      className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-secondary transition-colors"
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">Interested in partnering with SASTRAISM?</p>
          <a href="#contact">
            <Button variant="outline" className="glass-card hover:bg-secondary/20">
              Become a Sponsor
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};