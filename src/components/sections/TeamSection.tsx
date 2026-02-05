import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Linkedin, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import pic_1 from "@/assets/team/venkatesh_t.jpeg"
import pic_2 from "@/assets/team/brindha_gr.jpg"
import pic_3 from "@/assets/team/jayavardhan.jpeg"
import pic_4 from "@/assets/team/ananthapavan.jpeg"
import pic_5 from "@/assets/team/nikil_ps.jpeg"


const teamMembers = [
  {
    name: 'Dr. Venkatesh T, PhD',
    role: 'Founder & Director (TARA)',
    expertise: 'Senior Asst. Professor at SASTRA',
    image: pic_1,
    linkedin_url: "https://www.linkedin.com/in/venkateshthirugnanasambandam/",
    mail_id: "venkatesh@eee.sastra.edu"
  },
  {
    name: 'Dr. Brindha GR, PhD',
    role: 'Founder & Director (SARA)',
    expertise: 'Asst. Professor - III at SASTRA',
    image: pic_2,
    linkedin_url: "https://www.linkedin.com/in/brindhagr/",
    mail_id: "brindha.gr@ict.sastra.ac.in"
  },
  {
    name: 'Sangam Jayavardhan Reddy',
    role: 'Lead Intern (AI Engineer)',
    expertise: 'B Tech - Robotics and AI (IV Year)',
    image: pic_3,
    linkedin_url: "https://www.linkedin.com/in/sangam-jayavardhan-reddy-a685a2250/",
    mail_id: "126179037@sastra.ac.in"
  },
  {
    name: 'Challagandla Anantha Pavan',
    role: 'Intern (AI Engineer)',
    expertise: 'B Tech - Robotics and AI (IV Year)',
    image: pic_4,
    linkedin_url: "https://www.linkedin.com/in/anantha-pavan-challagandla-b88200348/",
    mail_id: "126179008@sastra.ac.in"
  },
  {
    name: 'Nikil PS',
    role: 'Intern (Full Stack Developer)',
    expertise: 'B Tech - Robotics and AI (II Year)',
    image: pic_5,
    linkedin_url: "https://www.linkedin.com/in/nikil-sukumar",
    mail_id: "128179038@sastra.ac.in"
  },
];

export const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  // Triple the list to ensure seamless looping in both directions without blanks
  const extendedMembers = [...teamMembers, ...teamMembers, ...teamMembers];
  // The "real" start index is the length of the original array (middle set)
  const startIndex = teamMembers.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Initialize position to the middle set
  useEffect(() => {
    setCurrentIndex(startIndex);
  }, [startIndex]);

  // Handle Animation and Snapping
  useEffect(() => {
    const itemWidth = 100 / itemsPerPage;
    controls.start({
      x: `-${currentIndex * itemWidth}%`,
      transition: { type: "spring", stiffness: 300, damping: 30, mass: 1 }
    });
  }, [currentIndex, itemsPerPage, controls]);

  const handleSnap = useCallback(() => {
    // If we've scrolled into the third set (end), snap back to middle set
    if (currentIndex >= startIndex + teamMembers.length) {
      const resetIndex = currentIndex - teamMembers.length;
      setCurrentIndex(resetIndex);
      controls.set({ x: `-${resetIndex * (100 / itemsPerPage)}%` });
    }
    // If we've scrolled into the first set (beginning), snap forward to middle set
    else if (currentIndex < startIndex) {
      const resetIndex = currentIndex + teamMembers.length;
      setCurrentIndex(resetIndex);
      controls.set({ x: `-${resetIndex * (100 / itemsPerPage)}%` });
    }
  }, [currentIndex, itemsPerPage, controls, startIndex]);

  // Auto-scroll logic
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex(prev => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Handle snap after animation completes
  useEffect(() => {
    const timeout = setTimeout(handleSnap, 400); // Wait for transition to mostly finish
    return () => clearTimeout(timeout);
  }, [currentIndex, handleSnap]);

  return (
    <section id="team" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-wider">Team</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Leading Experts in
            <br />
            <span className="gradient-text">AI & Education</span>
          </h2>
        </motion.div>

        {/* Carousel Wrapper */}
        <div 
          className="relative max-w-7xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Controls */}
          <button 
            onClick={() => setCurrentIndex(prev => prev - 1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 p-3 rounded-full glass-card hover:bg-secondary/20 hover:text-white transition-all group border border-white/10"
          >
            <ChevronLeft className="w-6 h-6 text-muted-foreground group-hover:text-white" />
          </button>

          <button 
            onClick={() => setCurrentIndex(prev => prev + 1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 p-3 rounded-full glass-card hover:bg-secondary/20 hover:text-white transition-all group border border-white/10"
          >
            <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-white" />
          </button>

          {/* Mask / Viewport */}
          <div className="overflow-hidden py-10 -my-10"> {/* Padding to prevent shadow cutting */}
            <motion.div 
              className="flex"
              animate={controls}
            >
              {extendedMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="glass-card p-6 h-full flex flex-col items-center justify-between group hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_rgba(var(--secondary-rgb),0.3)] transition-all duration-300">
                    <div>
                      <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-secondary/30 to-accent/30 flex items-center justify-center mb-6 group-hover:from-secondary/50 group-hover:to-accent/50 transition-all p-[2px]">
                        <img src={member.image} className='w-full h-full rounded-full object-cover bg-background' alt={member.name}/>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-center mb-1">{member.name}</h3>
                      <p className="text-secondary text-sm text-center mb-3 font-medium">{member.role}</p>
                      <p className="text-muted-foreground text-xs text-center mb-6 leading-relaxed opacity-80">{member.expertise}</p>
                    </div>

                    <div className="flex gap-3">
                      <a href={member.linkedin_url} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href={`mailto:${member.mail_id}`} className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-muted-foreground hover:text-white transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {teamMembers.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(startIndex + idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  (currentIndex % teamMembers.length) === idx
                    ? 'w-8 bg-secondary' 
                    : 'w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};