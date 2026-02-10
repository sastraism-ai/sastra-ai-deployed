import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import vid1 from '@/assets/videos/Demo1.mp4'
import vid2 from '@/assets/videos/Demo2.mp4'
import vid3 from '@/assets/videos/Sara.mp4'

const demoVideos = [
  {
    title: 'SASTRA AI Ecosystem Overview',
    subtitle: 'Real-time Transcription & Analytics',
    src: vid1,
    description: 'A deep dive into how our platform integrates with live classroom environments.'
  },
  {
    title: 'Automated Assessment Demo',
    subtitle: 'GenAI Driven Evaluation',
    src: vid2,
    description: 'Demonstrating the transition from prototype to enterprise-grade assessment solutions.'
  },
  {
    title: 'SARA Assistant',
    subtitle: 'Real-time Polling & Feedback',
    src: vid3,
    description: 'Revolutionizing audience engagement through interactive, AI-powered feedback loops.'
  }
];

export const DemoSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const next = () => setActiveIndex((prev) => (prev + 1) % demoVideos.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + demoVideos.length) % demoVideos.length);

  return (
    <section id="demo" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">
            PLATFORM DEMONSTRATIONS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            The AI Foundry in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the future of pedagogy. Our demonstrations showcase how SASTRA AI transforms passive learning into an interactive journey.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="max-w-5xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -20 }}
              transition={{ duration: 0.5 }}
              className="glass-card overflow-hidden bg-background/50 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Video Side (3/5 width) */}
                <div className="lg:col-span-3 relative aspect-video bg-black flex items-center justify-center">
                  <video
                    key={demoVideos[activeIndex].src}
                    className="w-full h-full object-cover"
                    src={demoVideos[activeIndex].src}
                    controls
                    preload="metadata"
                  />
                </div>

                {/* Content Side (2/5 width) */}
                <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10">
                  <div className="mb-6">
                    <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">
                      {demoVideos[activeIndex].subtitle}
                    </p>
                    <h3 className="text-2xl lg:text-3xl font-bold font-display leading-tight">
                      {demoVideos[activeIndex].title}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-base leading-relaxed mb-8">
                    {demoVideos[activeIndex].description}
                  </p>

                  <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                        <Play size={20} fill="currentColor" />
                     </div>
                     <span className="text-sm font-medium text-foreground/70 tracking-wide uppercase">
                        Module Demonstration
                     </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={prev}
              className="p-4 rounded-full glass-card hover:bg-secondary/20 hover:text-secondary transition-all shadow-xl group"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-20">
            <button
              onClick={next}
              className="p-4 rounded-full glass-card hover:bg-secondary/20 hover:text-secondary transition-all shadow-xl group"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {demoVideos.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-10 bg-secondary'
                  : 'w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};