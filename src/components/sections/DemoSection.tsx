import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Play } from 'lucide-react';
import vid1 from '@/assets/videos/Demo1.mp4'
import vid2 from '@/assets/videos/Demo2.mp4'

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
  }
];

export const DemoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="demo" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
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
            SECTION_DESCRIPTION
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {demoVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group"
            >
              <div className="glass-card overflow-hidden bg-background/50 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl">
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={video.src}
                    controls
                    preload="metadata"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <p className="text-secondary text-xs font-bold uppercase tracking-widest mb-1">
                        {video.subtitle}
                      </p>
                      <h3 className="text-xl font-bold font-display">
                        {video.title}
                      </h3>
                    </div>
                    <div className="bg-secondary/10 p-2 rounded-full text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                      <Play size={18} fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
