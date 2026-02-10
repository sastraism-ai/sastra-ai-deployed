import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from "@/assets/sastraism-logo.png"
import tcs_logo from "@/assets/logos/tcs_logo.jpg"
import sastra_logo from "@/assets/logos/sastra_logo.png"
import tata_logo from "@/assets/logos/tata_logo.jpg"


/* ------------------ HERO SLIDES ------------------ */
const heroSlides = [
  {
    title: 'Bringing next-gen AI technologies to classrooms',
    description:
      'Building enterprise-grade AI systems for education, assessment, and institutional deployment at TRL-6+ maturity.',
  },
  {
    title: 'TARA Platform',
    description:
      'Teaching & Assessment Reasoning Assistant — enabling intelligent, real-time academic evaluation at scale.',
  },
  {
    title: 'Research to Deployment',
    description:
      'Bridging academic innovation with production-ready AI systems for real-world impact.',
  },
];

/* ------------------ ANIMATION VARIANTS ------------------ */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () =>
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () =>
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pb-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ---------- BACKGROUND LAYER ---------- */}
      <div className="absolute inset-0 -z-10">
        {/* Soft animated glow */}
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-secondary/10 blur-3xl"
          animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-accent/10 blur-3xl"
          animate={{ x: [0, -60, 0], y: [0, -80, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Neural lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(7)].map((_, i) => (
            <motion.line
              key={i}
              x1={`${12 + i * 12}%`}
              y1="0%"
              x2={`${22 + i * 10}%`}
              y2="100%"
              stroke="hsl(192, 91%, 36%)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.4, 0] }}
              transition={{
                duration: 9,
                repeat: Infinity,
                delay: i * 0.6,
                ease: 'easeInOut',
              }}
            />
          ))}
        </svg>
      </div>

      {/* ---------- CONTENT ---------- */}
      <motion.div
        className="container mx-auto px-4 lg:px-8 relative z-10 mt-20"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          >
            <img
              src={tcs_logo}
              alt={`tcs logo`}
              className="w-auto h-16 object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500"
            />
            <img
              src={tata_logo}
              alt={`tata logo`}
              className="w-auto h-16 object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500"
            />
            <img
              src={sastra_logo}
              alt={`sastra logo`}
              className="w-auto h-16 object-contain drop-shadow-xl transform group-hover:scale-110 transition-transform duration-500"
            />

          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.9 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <div className='flex flex-col justify-center gap-5 items-center flex-grow md:flex-row'>
              <img src={Logo} className="flex h-32 w-auto" />
              <span className="flex gradient-text text-9xl">SARADHI AI</span>
            </div>
            {/* <span className="gradient-text">Samudra Mathanam</span> */}
          </motion.h1>

          {/* Carousel */}
          <div className="relative h-36 mb-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -25 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col items-center justify-center"
              >
                <h2 className="text-xl sm:text-2xl font-semibold text-secondary mb-3">
                  {heroSlides[currentSlide].title}
                </h2>
                <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
                  {heroSlides[currentSlide].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full glass-card hover:neon-glow-teal transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === currentSlide
                      ? 'w-8 bg-secondary'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 rounded-full glass-card hover:neon-glow-teal transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="/platforms">
              <Button variant="hero" size="xl" className="group">
                Explore TARA & SARA Platform
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
            {/* <Button variant="heroOutline" size="xl">
              Research & Deployment
            </Button> */}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
