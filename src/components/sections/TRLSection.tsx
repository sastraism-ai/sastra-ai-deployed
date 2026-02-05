import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

const trlLevels = [
  { level: 1, name: 'Basic Principles', description: 'Fundamental research observed and reported', status: 'complete' },
  { level: 2, name: 'Concept Formulation', description: 'Technology concept and application formulated', status: 'complete' },
  { level: 3, name: 'Proof of Concept', description: 'Analytical and experimental proof of concept', status: 'complete' },
  { level: 4, name: 'Lab Validation', description: 'Technology validated in laboratory environment', status: 'complete' },
  { level: 5, name: 'Relevant Environment', description: 'Validation in relevant operational environment', status: 'complete' },
  { level: 6, name: 'Operational Demo', description: 'Demonstrated in operational environment', status: 'current' },
  { level: 7, name: 'System Prototype', description: 'Prototype demonstration in operational environment', status: 'future' },
  { level: 8, name: 'System Complete', description: 'Actual system completed and qualified', status: 'future' },
  { level: 9, name: 'Production', description: 'Proven through successful mission operations', status: 'future' },
];

const stats = [
  { value: 'TRL-6', label: 'Current Level', suffix: '' },
  { value: '12', label: 'AI Modules', suffix: '+' },
  { value: '50', label: 'Field tests done', suffix: '+' },
  { value: '3', label: 'Institutions', suffix: '' },
];

export const TRLSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [selectedTRL, setSelectedTRL] = useState(6);
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => 0));

  useEffect(() => {
    if (!isInView) return;
    
    const timers = stats.map((stat, index) => {
      const numValue = parseInt(stat.value.replace(/\D/g, '')) || 0;
      const duration = 2000;
      const steps = 60;
      const increment = numValue / steps;
      let current = 0;
      
      return setInterval(() => {
        current += increment;
        if (current >= numValue) {
          current = numValue;
          clearInterval(timers[index]);
        }
        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = Math.floor(current);
          return newValues;
        });
      }, duration / steps);
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, [isInView]);

  return (
    <section id="trl" className="py-24 lg:py-32 relative overflow-hidden bg-muted/20" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Roadmap</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Technology Readiness
            <br />
            <span className="gradient-text">Level Progression</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Systematic advancement from research to production-ready deployment.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="font-display text-4xl lg:text-5xl font-bold gradient-text mb-2">
                {stat.value.includes('TRL') ? 'TRL-' : ''}{animatedValues[index]}{stat.suffix}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive TRL Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8">
            {/* TRL Progress Bar */}
            <div className="relative mb-8">
              <div className="flex justify-between mb-4">
                {trlLevels.map((trl) => (
                  <button
                    key={trl.level}
                    onClick={() => setSelectedTRL(trl.level)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      trl.status === 'complete'
                        ? 'bg-secondary text-secondary-foreground'
                        : trl.status === 'current'
                        ? 'bg-gradient-to-br from-secondary to-accent text-foreground ring-2 ring-secondary/50 ring-offset-2 ring-offset-background'
                        : trl.status === 'target'
                        ? 'bg-accent/50 text-foreground'
                        : 'bg-muted text-muted-foreground'
                    } ${selectedTRL === trl.level ? 'scale-125' : ''}`}
                  >
                    {trl.level}
                  </button>
                ))}
              </div>
              
              {/* Progress Track */}
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-secondary to-accent"
                  initial={{ width: '0%' }}
                  animate={isInView ? { width: '67%' } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                />
              </div>
            </div>

            {/* Selected TRL Info */}
            <motion.div
              key={selectedTRL}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  trlLevels[selectedTRL - 1].status === 'complete'
                    ? 'bg-secondary/20 text-secondary'
                    : trlLevels[selectedTRL - 1].status === 'current'
                    ? 'bg-gradient-to-r from-secondary/20 to-accent/20 text-foreground'
                    : trlLevels[selectedTRL - 1].status === 'target'
                    ? 'bg-accent/20 text-accent'
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {trlLevels[selectedTRL - 1].status === 'complete' && '✓ Achieved'}
                  {trlLevels[selectedTRL - 1].status === 'current' && '● In Progress'}
                  {trlLevels[selectedTRL - 1].status === 'target' && '◎ Target'}
                  {trlLevels[selectedTRL - 1].status === 'future' && '○ Future'}
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">
                TRL {selectedTRL}: {trlLevels[selectedTRL - 1].name}
              </h3>
              <p className="text-muted-foreground">
                {trlLevels[selectedTRL - 1].description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
