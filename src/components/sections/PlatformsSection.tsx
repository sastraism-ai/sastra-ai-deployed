import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Sparkles, BookOpen, MessageSquare, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const platforms = [
  {
    name: 'TARA',
    fullName: 'Teaching & Assessment Reasoning Assistant',
    description: 'AI-powered platform transforming academic evaluation through intelligent reasoning, automated assessment, and personalized learning insights.',
    features: [
      { icon: Brain, label: 'Reasoning Engine', description: 'Advanced LLM-based evaluation' },
      { icon: BookOpen, label: 'Assessment AI', description: 'Automated grading & feedback' },
      { icon: MessageSquare, label: 'Interactive QA', description: 'Real-time student support' },
    ],
    gradient: 'from-secondary to-teal-light',
    accentColor: 'secondary',
    linkTo: '#tara_sec',
  },
  {
    name: 'SARA',
    fullName: 'Smart AI Real-time Assistant',
    description: 'Enterprise-grade conversational AI for institutional operations, research support, and administrative efficiency.',
    features: [
      { icon: Zap, label: 'Real-time', description: 'Instant response processing' },
      { icon: Shield, label: 'Secure', description: 'Enterprise-grade security' },
      { icon: Sparkles, label: 'Intelligent', description: 'Context-aware interactions' },
    ],
    gradient: 'from-accent to-violet-glow',
    accentColor: 'accent',
    linkTo: '#sara_sec',
  },
];

export const PlatformsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="platforms" className="py-24 lg:py-32 relative overflow-hidden bg-muted/20" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Our Platforms</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            AI Systems Built for
            <br />
            <span className="gradient-text">Institutional Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Purpose-built AI platforms designed for enterprise deployment in educational and institutional environments.
          </p>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="glass-card p-8 lg:p-10 card-lift group"
            >
              {/* Platform Header */}
              <div className="mb-8">
                <div className={`inline-flex items-center gap-3 mb-4`}>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center`}>
                    <Brain className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-3xl font-bold">{platform.name}</h3>
                  </div>
                </div>
                <p className={`text-${platform.accentColor} font-medium text-sm mb-3`}>
                  {platform.fullName}
                </p>
                <p className="text-muted-foreground min-h-20">
                  {platform.description}
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {platform.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + featureIndex * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-${platform.accentColor}/10 flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className={`w-5 h-5 text-${platform.accentColor}`} />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{feature.label}</h4>
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Architecture Diagram Placeholder */}
              <div className="relative h-48 rounded-xl bg-navy-light/50 border border-border overflow-hidden mb-6">
                <div className="absolute inset-0 flex items-center justify-center overflow-scroll">
                  <div className="flex flex-col items-center gap-4 md:flex-row">
                    {['Input', 'Process', 'Reason', 'Output'].map((step, i) => (
                      <motion.div
                        key={step}
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                        className="flex flex-col items-center gap-2 md:flex-row"
                      >
                        <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${platform.gradient} flex items-center justify-center`}>
                          <span className="text-xs font-medium text-foreground">{step}</span>
                        </div>
                        {i < 3 && (
                          <div className="w-0.5 h-8 bg-muted-foreground/30 md:w-8 md:h-0.5" />
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-background/50 text-xs text-muted-foreground">
                  Architecture Overview
                </div>
              </div>

              {/* Deployment Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-sm text-muted-foreground">Production Ready</span>
                </div>
                <Link to={`/platforms${platform.linkTo}`}>
                  <Button variant="heroOutline" size="sm">
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
