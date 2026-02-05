import { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Building2, Users, TrendingUp, Award, CheckCircle, Star } from 'lucide-react';

const facultyTestimonials = [
  {
    id: 1,
    name: 'Dr. S. Vaidhyasubramaniam',
    role: 'Vice-Chancellor',
    institution: 'SASTRA University',
    avatar: 'VS',
    rating: 5,
    feedback: 'TARA has revolutionized how I create assessments. The AI-powered question generation saves hours while maintaining academic rigor. The reasoning engine understands context remarkably well.',
    metrics: { timeSaved: '60%', assessmentsCreated: 150 },
  },
  {
    id: 2,
    name: 'Dr. Thenmozhi K',
    role: 'Dean',
    institution: 'SASTRA University',
    avatar: 'TK',
    rating: 5,
    feedback: 'The automated grading with detailed feedback has transformed student engagement. Students receive instant, constructive feedback that helps them learn from mistakes immediately.',
    metrics: { timeSaved: '75%', assessmentsCreated: 200 },
  },
  {
    id: 3,
    name: 'Dr. Krishnamoorthy A',
    role: 'Associate Dean - Academics',
    institution: 'Partner Institution',
    avatar: 'AK',
    rating: 5,
    feedback: 'The platform\'s ability to generate varied question formats while maintaining difficulty levels is impressive. It has significantly improved our examination process quality.',
    metrics: { timeSaved: '50%', assessmentsCreated: 180 },
  },
];

const caseStudies = [
  {
    id: 1,
    title: 'Engineering Faculty Pilot Studies',
    institution: 'SASTRA University',
    icon: Building2,
    description: 'Pilot deployment across 5 engineering departments with 50+ faculty members.',
    results: [
      'Reduced assessment creation time by 65%',
      'Improved student feedback quality scores by 40%',
      'Generated 2,000+ unique assessment items',
    ],
    status: 'Completed',
    participants: '50+ Faculty',
    duration: '6 Months',
  },
  {
    id: 2,
    title: 'Multi-Institution Pilot',
    institution: '3 Partner Universities',
    icon: Users,
    description: 'Cross-institutional validation of TARA platform across diverse academic environments.',
    results: [
      '95% faculty satisfaction rate',
      'Successfully processed 10,000+ assessments',
      'Achieved 98% grading accuracy',
    ],
    status: 'Ongoing',
    participants: '150+ Faculty',
    duration: '12 Months',
  },
  {
    id: 3,
    title: 'TRL-5 Validation Study',
    institution: 'SASTRA & TCS Research',
    icon: TrendingUp,
    description: 'Rigorous technology readiness validation in operational academic environment.',
    results: [
      'Passed all TRL-5 milestone criteria',
      'Demonstrated enterprise scalability',
      'Validated security & compliance',
    ],
    status: 'Completed',
    participants: '200+ Users',
    duration: '8 Months',
  },
  {
    id: 4,
    title: 'SARA Enterprise Trial',
    institution: 'Administrative Offices',
    icon: Award,
    description: 'Real-time AI assistant deployment for institutional administrative workflows.',
    results: [
      'Handled 5,000+ queries successfully',
      'Reduced response time by 80%',
      'Achieved 92% user satisfaction',
    ],
    status: 'Active',
    participants: '100+ Staff',
    duration: '4 Months',
  },
];

const ValidationCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % facultyTestimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const next = () => setActiveIndex((prev) => (prev + 1) % facultyTestimonials.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + facultyTestimonials.length) % facultyTestimonials.length);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 lg:p-10"
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-[23%] opacity-10">
              <Quote className="w-20 h-20 text-secondary" />
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Testimonial Content */}
              <div className="flex-1">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(facultyTestimonials[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>

                <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-6">
                  "{facultyTestimonials[activeIndex].feedback}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                    <span className="text-lg font-display font-bold text-foreground">
                      {facultyTestimonials[activeIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-display font-semibold">
                      {facultyTestimonials[activeIndex].name}
                    </h4>
                    <p className="text-secondary text-sm">
                      {facultyTestimonials[activeIndex].role}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {facultyTestimonials[activeIndex].institution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics */}
              <div className="lg:w-64 flex lg:flex-col gap-4 lg:border-l lg:border-border lg:pl-8">
                <div className="flex-1 glass-card p-4 text-center">
                  <div className="text-3xl font-display font-bold gradient-text">
                    {facultyTestimonials[activeIndex].metrics.timeSaved}
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">Time Saved</p>
                </div>
                <div className="flex-1 glass-card p-4 text-center">
                  <div className="text-3xl font-display font-bold gradient-text">
                    {facultyTestimonials[activeIndex].metrics.assessmentsCreated}+
                  </div>
                  <p className="text-muted-foreground text-sm mt-1">Assessments Created</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="p-3 rounded-full glass-card hover:neon-glow-teal transition-all"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="flex gap-2">
          {facultyTestimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? 'w-8 bg-secondary'
                  : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-3 rounded-full glass-card hover:neon-glow-teal transition-all"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

const CaseStudiesCarousel = () => {
  const [activeCase, setActiveCase] = useState(0);

  const next = () => setActiveCase((prev) => (prev + 1) % caseStudies.length);
  const prev = () => setActiveCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Active Case Study */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCase}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="glass-card p-8 md:col-span-1"
          >
            <div className="flex items-start gap-4 mb-6 ">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                {(() => {
                  const IconComponent = caseStudies[activeCase].icon;
                  return <IconComponent className="w-7 h-7 text-foreground" />;
                })()}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">
                  {caseStudies[activeCase].title}
                </h3>
                <p className="text-secondary text-sm">
                  {caseStudies[activeCase].institution}
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6">
              {caseStudies[activeCase].description}
            </p>

            {/* Results */}
            <div className="space-y-3 mb-6">
              {caseStudies[activeCase].results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{result}</span>
                </motion.div>
              ))}
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {caseStudies[activeCase].participants}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">
                  {caseStudies[activeCase].duration}
                </span>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                caseStudies[activeCase].status === 'Completed'
                  ? 'bg-secondary/20 text-secondary'
                  : caseStudies[activeCase].status === 'Active'
                  ? 'bg-accent/20 text-accent'
                  : 'bg-muted text-muted-foreground'
              }`}>
                {caseStudies[activeCase].status}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Case Study Selector */}
        <div className="flex flex-col justify-between h-min-96">
          {caseStudies.map((study, index) => (
            <motion.button
              key={study.id}
              onClick={() => setActiveCase(index)}
              className={`flex flex-col w-full  text-left p-4 rounded-xl transition-all duration-300 ${
                index === activeCase
                  ? 'glass-card border border-secondary/30'
                  : 'bg-muted/30 hover:bg-muted/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  index === activeCase
                    ? 'bg-gradient-to-br from-secondary to-accent'
                    : 'bg-muted'
                }`}>
                  {(() => {
                    const IconComponent = study.icon;
                    return <IconComponent className={`w-5 h-5 ${
                      index === activeCase ? 'text-foreground' : 'text-muted-foreground'
                    }`} />;
                  })()}
                </div>
                <div className="flex-1">
                  <h4 className={`font-medium text-sm ${
                    index === activeCase ? 'text-foreground' : 'text-muted-foreground'
                  }`}>
                    {study.title}
                  </h4>
                  <p className="text-xs text-muted-foreground">{study.institution}</p>
                </div>
                {index === activeCase && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-2 h-2 rounded-full bg-secondary"
                  />
                )}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-6">
        <button onClick={prev} className="p-2 rounded-full glass-card">
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>
        <div className="flex gap-2">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeCase ? 'bg-secondary' : 'bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
        <button onClick={next} className="p-2 rounded-full glass-card">
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
};

export const ValidationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="validation" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Validation</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Proven by Faculty,
            <br />
            <span className="gradient-text">Validated in Production</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from academic professionals and institutional pilots demonstrating measurable impact.
          </p>
        </motion.div>

        {/* Faculty Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="font-display text-xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <Quote className="w-5 h-5 text-secondary" />
            Faculty Pilot Feedback
          </h3>
          <ValidationCarousel />
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-display text-xl font-semibold text-center mb-8 flex items-center justify-center gap-2">
            <Building2 className="w-5 h-5 text-secondary" />
            Institutional Pilot Case Studies
          </h3>
          <CaseStudiesCarousel />
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {[
            { value: '200+', label: 'Faculty Participants' },
            { value: '12,000+', label: 'Assessments Processed' },
            { value: '95%', label: 'Satisfaction Rate' },
            { value: '60%', label: 'Avg. Time Saved' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="font-display text-3xl lg:text-4xl font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
