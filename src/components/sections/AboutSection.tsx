import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, GraduationCap, Lightbulb, Target } from 'lucide-react';

const timelineItems = [
  {
    year: '2023',
    title: 'Foundation & Recognition',
    description: 'Launched "Intro to AI" coursework. The flagship project, "Shadow of Deception," achieved IEEE Runner-up status, validating our initial approach.',
  },
  {
    year: '2024',
    title: 'GenAI & ML Expansion',
    description: 'Transitioned research focus to Generative AI and Machine Learning architectures, establishing the core logic for the SASTRA AI platform.',
  },
  {
    year: '2025',
    title: 'Strategic Development',
    description: 'Submitted the SASTRA AI development proposal to TCS, formalizing the transition from prototype to enterprise-grade solution.',
  },
  {
    year: '2026',
    title: 'Platform Deployment',
    description: 'Official rollout of the SASTRA AI ecosystem, integrating real-time lecture transcription and automated assessment in live classrooms.',
  },
];

const pillars = [
  {
    icon: Building2,
    title: 'Institutional Backing',
    description: 'Powered by TATA Group and SASTRA University\'s academic excellence.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Focus',
    description: 'Purpose-built for teaching, learning, and assessment transformation.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Bridging research and real-world AI deployment at enterprise scale.',
  },
  {
    icon: Target,
    title: 'Deployment Ready',
    description: 'Validated at TRL-6. Transitioning from prototype demonstration to full-scale production systems.',
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">About Us</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            The AI Foundry for
            <br />
            <span className="gradient-text">Institutional Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            SASTRAISM—SASTRA AI Samudra Mathanam—represents the churning of the ocean of knowledge, 
            extracting transformative AI solutions for education and enterprise.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 card-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <pillar.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display text-2xl font-semibold text-center mb-12">Our Journey</h3>
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-secondary/50 via-accent/30 to-transparent -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-8 md:space-y-0">
              {timelineItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
                  className={`relative md:flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="glass-card p-6">
                      <span className="text-secondary font-display font-bold text-xl">{item.year}</span>
                      <h4 className="font-display font-semibold text-lg mt-2">{item.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="timeline-dot" />
                  </div>
                  
                  <div className="md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
