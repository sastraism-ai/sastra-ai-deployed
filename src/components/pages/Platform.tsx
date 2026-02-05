import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  BrainCircuit, 
  Database, 
  FileAudio, 
  Files, 
  GraduationCap, 
  LayoutDashboard, 
  Mic, 
  Network, 
  Server, 
  Users, 
  Zap 
} from 'lucide-react';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/sections/Footer';
import { TaraChatbot } from '@/components/chatbot/TaraChatbot';

// --- Shared Components for the Page ---

const SectionBadge = ({ children, className = "" }) => (
  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border uppercase tracking-wider mb-4 ${className}`}>
    {children}
  </span>
);

const TechChip = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background/40 border border-white/5 backdrop-blur-sm">
    <Icon className="w-4 h-4 text-secondary" />
    <span className="text-xs font-medium text-foreground/80">{label}</span>
  </div>
);

const ModuleHeader = ({ title, subtitle, description, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
      {title}
    </h2>
    <h3 className="text-2xl text-secondary font-display font-medium mb-6">
      {subtitle}
    </h3>
    <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
      {description}
    </p>
  </div>
);

// --- Main Page Component ---

const PlatformPage = () => {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      
      const timer = setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100; 
          const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 300);

      return () => clearTimeout(timer);
    } else {
        window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-secondary/30">
      <Navbar />
      
      <main className="pt-24 lg:pt-32">
        
        <section className="relative px-4 lg:px-8 mb-24 lg:mb-32">
          <div className="container mx-auto max-w-5xl text-center">
            <SectionBadge className="bg-red-500/10 text-red-400 border-red-500/20">The Challenge</SectionBadge>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Bridging the <span className="gradient-text">Engagement Gap</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              In the age of instant digital gratification, traditional lengthy lectures often fail to retain student attention. 
              <span className="text-foreground font-medium"> SASTRA AI </span> 
              turns this passive experience into an active ecosystem using real-time intelligent interventions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {[
                { label: 'Attention Decline', desc: 'Combating passive listening during long sessions.' },
                { label: 'Instant Gratification', desc: 'Meeting the need for immediate, customized feedback.' },
                { label: 'Academic Rigor', desc: 'Maintaining depth while increasing engagement.' }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 border-l-4 border-l-secondary/50">
                  <h4 className="font-bold text-lg mb-2">{item.label}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tara_sec" className="py-24 relative bg-muted/20 border-y border-white/5 scroll-mt-20">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[100px] rounded-full" />
          </div>

          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <SectionBadge className="bg-secondary/10 text-secondary border-secondary/20">Module 02 • TRL-6 Validated</SectionBadge>
                <ModuleHeader 
                  title="TARA"
                  subtitle="Teaching & AI-Assessment Reasoning Assistant"
                  description="An advanced 'Audio Quiz Spark' engine that deepens learning analytics. TARA integrates locally deployed Large Language Models (LDLLM) to create context-aware, conceptually rich assessments directly from lecture audio."
                />
                
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <BrainCircuit className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">DeepSeek Reasoning Engine</h4>
                      <p className="text-muted-foreground text-sm">Uses state-of-the-art DeepSeek generative AI to perform semantic reasoning, generating questions that test conceptual depth rather than just keywords.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Mic className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Whisper AI Transcription</h4>
                      <p className="text-muted-foreground text-sm">High-fidelity automatic speech recognition (ASR) that converts live or recorded lectures into text with institutional-grade accuracy.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <LayoutDashboard className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Institutional Dashboard</h4>
                      <p className="text-muted-foreground text-sm">Deployed at <span className="font-mono text-xs bg-muted px-1 py-0.5 rounded">sastraai.sastra.edu</span>. Includes real-time leaderboards, Google OAuth auth, and performance analytics.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                   <TechChip icon={BrainCircuit} label="DeepSeek LLM" />
                   <TechChip icon={Mic} label="OpenAI Whisper" />
                   <TechChip icon={Server} label="NVIDIA DGX A100" />
                   <TechChip icon={Network} label="Python Flask" />
                </div>
              </div>

              <div className="relative">
                 <div className="glass-card p-8 relative z-10 card-lift">
                    <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                        <span className="text-sm font-medium text-muted-foreground">Workflow: Audio Quiz Spark</span>
                    </div>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-white/5">
                            <FileAudio className="w-8 h-8 text-blue-400" />
                            <div>
                                <div className="text-xs text-blue-400 font-bold mb-0.5">INPUT SOURCE</div>
                                <div className="text-sm font-medium">Faculty Lecture Audio / Recording</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-white/5">
                            <Server className="w-8 h-8 text-secondary" />
                            <div>
                                <div className="text-xs text-secondary font-bold mb-0.5">LOCAL DGX PROCESSING</div>
                                <div className="text-sm font-medium">Whisper ASR + DeepSeek Reasoning</div>
                            </div>
                        </div>


                        <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-white/5">
                            <Zap className="w-8 h-8 text-yellow-400" />
                            <div>
                                <div className="text-xs text-yellow-400 font-bold mb-0.5">OUTPUT</div>
                                <div className="text-sm font-medium">Adaptive Quiz & Learning Analytics</div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 text-center">
                        <p className="text-xs text-muted-foreground">
                            Validating with <span className="text-foreground font-bold">180+ Students</span> per session & <span className="text-foreground font-bold">15 Classrooms</span>
                        </p>
                    </div>
                 </div>
                 
                 <div className="absolute -top-10 -right-10 w-full h-full border border-secondary/20 rounded-xl z-0" />
              </div>
            </div>
          </div>
        </section>

        <section id="sara_sec" className="py-24 relative scroll-mt-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <div className="order-2 lg:order-1 relative">
                 <div className="glass-card p-8 border-l-4 border-l-accent">
                    <h4 className="font-display text-xl font-bold mb-6">Dual-Source Intelligence</h4>
                    
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-accent/5 border border-accent/20 text-center">
                            <Mic className="w-8 h-8 text-accent mx-auto mb-3" />
                            <span className="block text-sm font-bold">Live Speech</span>
                            <span className="text-xs text-muted-foreground">Real-time Transcript</span>
                        </div>
                        <div className="p-4 rounded-lg bg-blue-500/5 border border-blue-500/20 text-center">
                            <Files className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                            <span className="block text-sm font-bold">Course PDF</span>
                            <span className="text-xs text-muted-foreground">Syllabus Context</span>
                        </div>
                    </div>

                    <div className="mt-4 p-4 rounded-lg bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 flex items-center gap-4">
                        <Database className="w-10 h-10 text-accent" />
                        <div>
                            <div className="text-sm font-bold text-accent">Pinecone Vector DB</div>
                            <div className="text-xs text-muted-foreground">Semantic Search & Context Matching</div>
                        </div>
                    </div>
                 </div>
              </div>

              <div className="order-1 lg:order-2">
                <SectionBadge className="bg-accent/10 text-accent border-accent/20">Module 01 • Real-time Assistant</SectionBadge>
                <ModuleHeader 
                  title="SARA"
                  subtitle="Smart AI-Enabled Real-time Assistant"
                  description="The foundation of classroom interaction. SARA creates contextual, high-quality multiple-choice questions within minutes of a lecture ending by combining live speech data with static course materials."
                />
                
                <div className="space-y-6 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Mistral AI Integration:</strong> Leveraging efficient, high-performance models to generate evaluations that are contextually accurate to the specific class session.
                  </p>
                  <p>
                    <strong className="text-foreground">Dual-Source Processing:</strong> Unlike generic quiz generators, SARA syncs the <span className="italic">spoken word</span> with the <span className="italic">written text</span> (PDFs) to ensure questions are relevant to what was actually taught.
                  </p>
                  <p>
                    <strong className="text-foreground">Rapid Deployment:</strong> Designed for speed, offering immediate post-lecture engagement to reinforce concepts while they are fresh.
                  </p>
                </div>

                <div className="mt-10 flex flex-wrap gap-3">
                   <TechChip icon={BrainCircuit} label="Mistral AI" />
                   <TechChip icon={Database} label="Pinecone Vector DB" />
                   <TechChip icon={Users} label="Student Interaction" />
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/10 border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-display font-bold mb-10">Production Ready Architecture</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                        { val: 'TRL-6', label: 'Readiness Level' },
                        { val: '750+', label: 'Active Users' },
                        { val: '15+', label: 'Classrooms Pilot' },
                        { val: '98%', label: 'Semantic Accuracy' }
                    ].map((stat, i) => (
                        <div key={i} className="glass-card py-6">
                            <div className="text-3xl lg:text-4xl font-bold gradient-text mb-2">{stat.val}</div>
                            <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

      </main>
      
      <Footer />
      <TaraChatbot />
    </div>
  );
};

export default PlatformPage;