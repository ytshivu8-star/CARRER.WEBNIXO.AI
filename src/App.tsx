import { motion } from 'motion/react';
import { Bot, ArrowRight, Code, Brain, Rocket, Briefcase } from 'lucide-react';

export default function App() {
  const jobOpenings = [
    { title: "Senior AI Engineer", department: "Engineering", location: "Remote" },
    { title: "Machine Learning Researcher", department: "Research", location: "Remote" },
    { title: "Frontend Developer", department: "Engineering", location: "Hybrid" },
    { title: "Product Manager, AI", department: "Product", location: "Remote" }
  ];

  // Note: Replace these Google Form URLs with your actual Google Form links
  const GOOGLE_FORM_URL = "https://forms.google.com/";

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-neutral-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bot className="w-6 h-6 text-indigo-400" />
            <span className="font-display font-bold text-xl tracking-tight">WEBNIXO<span className="text-indigo-400">.AI</span></span>
          </div>
          <a href="#careers" className="text-sm font-medium text-neutral-300 hover:text-white transition-colors">
            Careers
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium mb-8">
              <Rocket className="w-4 h-4" />
              We are hiring!
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white to-neutral-500 bg-clip-text text-transparent">
              Build the future of intelligence.
            </h1>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed">
              Join WEBNIXO AI and work on cutting-edge machine learning models that solve real-world problems. We're looking for passionate builders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#careers" 
                className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                View Open Roles
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Features */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid md:grid-cols-3 gap-8 mt-32"
          >
            {[
              { icon: Brain, title: "Hard Problems", desc: "Tackle some of the most challenging problems in AI and machine learning today." },
              { icon: Code, title: "Modern Stack", desc: "Work with the latest tools, frameworks, and infrastructure in the industry." },
              { icon: Rocket, title: "Fast Growth", desc: "Grow your career rapidly in a high-paced, high-impact startup environment." }
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </motion.div>

          {/* Careers Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            id="careers" 
            className="mt-32 pt-16 border-t border-white/10"
          >
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Open Positions</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                Don't see a role that fits perfectly? Apply anyway. We're always looking for exceptional talent to join our team.
              </p>
            </div>

            <div className="max-w-4xl mx-auto flex flex-col gap-4">
              {jobOpenings.map((job, i) => (
                <div key={i} className="group p-6 rounded-xl border border-white/10 bg-neutral-900/50 hover:bg-neutral-800/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium mb-2 group-hover:text-indigo-400 transition-colors">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-neutral-500">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.department}</span>
                      <span>•</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <a 
                    href={GOOGLE_FORM_URL} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition-colors text-center sm:text-left whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center bg-indigo-500/10 border border-indigo-500/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="font-display text-2xl font-bold mb-4 text-white">General Application</h3>
              <p className="text-indigo-200 mb-6 max-w-xl mx-auto">
                Ready to join WEBNIXO AI but don't see the right role? Submit a general application through our Google Form and we'll keep you in mind.
              </p>
              <a 
                href={GOOGLE_FORM_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
              >
                Submit General Application
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="py-8 text-center text-neutral-600 text-sm mt-16 border-t border-white/5">
        <p>© {new Date().getFullYear()} WEBNIXO AI. All rights reserved.</p>
      </footer>
    </div>
  );
}
