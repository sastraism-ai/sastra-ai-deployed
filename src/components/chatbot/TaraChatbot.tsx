import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// --- TYPES ---
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface KnowledgeNode {
  keys: string[];
  response: string;
  weight?: number;
}

const knowledgeBase: KnowledgeNode[] = [
  {
    keys: ['sastra', 'samudra', 'mathanam', 'what is', 'overview'],
    response: "**SASTRA AI Samudra Mathanam** is an institutional AI Foundry funded by the TCS Foundation. It unifies teaching, assessment, and real-time intelligence into a single TRL-6+ platform to solve classroom engagement challenges."
  },
  {
    keys: ['problem', 'engagement', 'issue', 'attention'],
    response: "The core problem is the **engagement crisis**. Students struggle to pay attention during lengthy lectures due to digital distractions. Sastra AI solves this by turning passive listening into active involvement via real-time interventions."
  },
  {
    keys: ['solution', 'modules', 'components'],
    response: "Sastra AI consists of two modules:\n\n1. **SARA (Smart AI-Enabled Real-time Assistant):** For live transcription and interaction.\n2. **TARA (Teaching & AI-Assessment Reasoning Assistant):** For deep reasoning and complex assessment generation."
  },
  {
    keys: ['tech', 'stack', 'gpu', 'whisper', 'deepseek', 'architecture'],
    response: "**Technical Architecture:**\n• **Compute:** SASTRA's DGX HPC cluster & H200 GPUs.\n• **Models:** Whisper AI (Speech) & DeepSeek/Mistral (Reasoning).\n• **Backend:** Python Flask & Node.js.\n• **Novelty:** Dual-Source Intelligence (Live Audio + PDF Context)."
  },
  {
    keys: ['tara', 'module 2'],
    response: "**TARA (Module 2)** is the reasoning engine. It integrates locally deployed LLMs (**DeepSeek**) to create concept-rich MCQs. It analyzes student performance to automatically adjust difficulty and provides detailed reasoning."
  },
  {
    keys: ['trl', 'readiness'],
    response: "We are at **Technology Readiness Level (TRL) 6**. The system is a fully functional prototype successfully validated in real classroom environments at SASTRA."
  },
  {
    keys: ['impact', 'benefit', 'time'],
    response: "**Impact Metrics:**\n• **Efficiency:** Assessment creation time reduced by 70–80%.\n• **Engagement:** Targeted 40% increase in participation.\n• **Scale:** Built for 100+ faculty and 8,000+ students."
  }
];

const findBestResponse = (query: string): string => {
  const q = query.toLowerCase();
  let bestMatch: KnowledgeNode | null = null;
  let maxScore = 0;

  knowledgeBase.forEach((node) => {
    let score = 0;
    node.keys.forEach((key) => {
      if (q.includes(key)) score += 1;
      if (q === key) score += 2;
    });
    if (node.weight) score *= node.weight;
    if (score > maxScore) {
      maxScore = score;
      bestMatch = node;
    }
  });

  return bestMatch ? bestMatch.response : "I can explain SASTRAISM, the TARA/SARA platforms, our TRL-6 readiness, or the technical stack (DeepSeek/Whisper). How may I assist?";
};

// --- MAIN COMPONENT ---
export const TaraChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Initial message restored to fit the theme
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: 'Welcome. I am **TARA**, the official Teaching & Assessment Reasoning Assistant. How may I assist you today?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = async (textOverride?: string) => {
    const text = textOverride || input;
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: 'user', content: text, timestamp: new Date() },
    ]);
    setInput('');
    setIsTyping(true);

    // Dynamic delay to simulate thinking
    const delay = Math.floor(Math.random() * 800) + 600;
    await new Promise((r) => setTimeout(r, delay));

    const responseText = findBestResponse(text);

    setMessages((prev) => [
      ...prev,
      { id: (Date.now() + 1).toString(), role: 'assistant', content: responseText, timestamp: new Date() },
    ]);

    setIsTyping(false);
  };


  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => (
      <span key={i} className="block min-h-[1.2em] mb-1 last:mb-0">
        {line.split(/(\*\*.*?\*\*)/).map((part, j) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} className="font-bold text-foreground">{part.slice(2, -2)}</strong>
          ) : (
            part
          )
        )}
      </span>
    ));
  };

  return (
    <>
      {/* ---------- ORIGINAL AI ORB ---------- */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="chatbot-orb flex items-center justify-center"
          >
            <Sparkles className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* ---------- CHAT WINDOW (ORIGINAL THEME) ---------- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className={`fixed z-50 ${isFullscreen
                ? 'inset-4 lg:inset-8'
                : 'bottom-6 right-6 w-[80%] h-[70%] md:w-[380px] md:h-[520px]'
              } rounded-2xl overflow-hidden flex flex-col`}
            style={{
              // RESTORED ORIGINAL BACKGROUND
              background: 'hsl(222 47% 8% / 0.95)',
              backdropFilter: 'blur(20px)',
              border: '1px solid hsl(192 91% 36% / 0.25)',
              boxShadow: '0 30px 60px hsl(222 47% 6% / 0.6)',
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-inner">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">TARA Assistant</h3>
                  <p className="text-xs text-slate-400">Teaching & Assessment Reasoning</p>
                </div>
              </div>
              <div className="flex gap-1 text-slate-400">
                <button onClick={() => setIsFullscreen(!isFullscreen)} className="p-2 hover:bg-white/5 rounded-lg transition">
                  {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/5 rounded-lg transition">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed shadow-sm ${m.role === 'user'
                        ? 'bg-slate-700 text-white rounded-2xl rounded-br-sm' // Darker User Bubble
                        : 'bg-slate-800/80 text-slate-200 rounded-2xl rounded-bl-sm border border-white/5' // Assistant Bubble
                      }`}
                  >
                    {renderContent(m.content)}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-slate-500 ml-2">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-150" />
                  <span className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce delay-300" />
                  Processing...
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area (Restored Floating Style) */}
            <div className="p-4 bg-slate-900/40 border-t border-white/5 backdrop-blur-md shrink-0">
              {/* Suggestions (Only when idle) */}
              {messages.length < 3 && !isTyping && (
                <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar mask-gradient">
                  {['What is SASTRA AI?', 'Explain TARA', 'Tech Stack'].map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 transition"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex gap-2 relative">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask TARA..."
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  className="bg-slate-950/50 border-white/10 text-black placeholder:text-slate-500 focus-visible:ring-indigo-500"
                />
                <Button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  size="icon"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white shrink-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};  