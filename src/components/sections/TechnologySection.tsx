import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Cpu, Cloud, Server, Database, Layers, Rocket } from 'lucide-react';

const techStack = [
  {
    icon: Cpu,
    name: 'LLM Engineering',
    description: 'Fine-tuned large language models for educational reasoning and assessment.',
    color: 'secondary',
  },
  {
    icon: Server,
    name: 'Edge AI (Jetson)',
    description: 'NVIDIA Jetson-powered edge deployment for low-latency inference.',
    color: 'accent',
  },
  {
    icon: Cloud,
    name: 'Cloud GPU/TPU',
    description: 'Scalable cloud infrastructure for training and high-throughput inference.',
    color: 'secondary',
  },
  {
    icon: Database,
    name: 'DGX H200',
    description: 'Enterprise AI supercomputing for large-scale model development.',
    color: 'accent',
  },
  {
    icon: Layers,
    name: 'SaaS / DaaS',
    description: 'Software and Data as a Service platforms for institutional clients.',
    color: 'secondary',
  },
  {
    icon: Rocket,
    name: 'EdTech Stack',
    description: 'Specialized tools and APIs for educational technology integration.',
    color: 'accent',
  },
];

const useCases = [
  {
    title: 'Faculty Assistance',
    description: 'AI-powered tools for curriculum development, assessment creation, and student analytics.',
    icon: '👨‍🏫',
  },
  {
    title: 'Student Learning',
    description: 'Personalized learning paths, intelligent tutoring, and adaptive content delivery.',
    icon: '📚',
  },
  {
    title: 'Institutional Assessment',
    description: 'Automated evaluation, plagiarism detection, and comprehensive reporting systems.',
    icon: '📊',
  },
  {
    title: 'Deployment Readiness',
    description: 'Enterprise-grade security, scalability testing, and production monitoring.',
    icon: '🚀',
  },
];

const pipelineSteps = [
  { label: 'Data', description: 'Collection & Curation' },
  { label: 'Model', description: 'Training & Fine-tuning' },
  { label: 'Deploy', description: 'Edge & Cloud' },
  { label: 'Scale', description: 'Enterprise Rollout' },
];

export const TechnologySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeUseCase, setActiveUseCase] = useState(0);

  const nextCase = () => setActiveUseCase((prev) => (prev + 1) % useCases.length);
  const prevCase = () => setActiveUseCase((prev) => (prev - 1 + useCases.length) % useCases.length);

  return (
    <section id="technology" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Technology</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Enterprise-Grade
            <br />
            <span className="gradient-text">AI Infrastructure</span>
          </h2>
        </motion.div>

        {/* Tech Stack Carousel */}
        <div className="mb-20">
          <h3 className="font-display text-xl font-semibold text-center mb-8">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 text-center card-lift"
              >
                <div className={`w-14 h-14 mx-auto rounded-xl bg-${tech.color}/10 flex items-center justify-center mb-4`}>
                  <tech.icon className={`w-7 h-7 text-${tech.color}`} />
                </div>
                <h4 className="font-medium text-sm mb-2">{tech.name}</h4>
                <p className="text-muted-foreground text-xs">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Animated Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-20"
        >
          <h3 className="font-display text-xl font-semibold text-center mb-8">AI Pipeline</h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative flex items-center justify-between">
              {/* Connection Line */}
              <div className="absolute top-1/4 left-0 right-0 h-1 bg-navy-light -translate-y-1/2" />
              <motion.div
                className="absolute top-1/4 left-0 h-1 bg-gradient-to-r from-secondary to-accent -translate-y-1/2"
                initial={{ width: '0%' }}
                animate={isInView ? { width: '100%' } : {}}
                transition={{ duration: 2, delay: 0.5, ease: 'easeOut' }}
              />
              
              {pipelineSteps.map((step, index) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.2 }}
                  className="relative z-10 flex flex-col items-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center shadow-lg">
                    <span className="text-foreground font-display font-bold">{index + 1}</span>
                  </div>
                  <div className="mt-4 text-center">
                    <h4 className="font-medium">{step.label}</h4>
                    <p className="text-muted-foreground text-xs mt-1">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Use Case Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h3 className="font-display text-xl font-semibold text-center mb-8">Use Cases</h3>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card p-8 relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeUseCase}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="text-center"
                >
                  <span className="text-5xl mb-4 block">{useCases[activeUseCase].icon}</span>
                  <h4 className="font-display text-2xl font-semibold mb-3">
                    {useCases[activeUseCase].title}
                  </h4>
                  <p className="text-muted-foreground">
                    {useCases[activeUseCase].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prevCase}
                  className="p-2 rounded-full glass-card hover:neon-glow-teal transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-muted-foreground" />
                </button>
                <div className="flex gap-2">
                  {useCases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveUseCase(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === activeUseCase ? 'w-6 bg-secondary' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextCase}
                  className="p-2 rounded-full glass-card hover:neon-glow-teal transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
