import { motion } from 'motion/react';
import { ArrowRight, Rocket, DollarSign, Globe, BookOpen, TrendingUp, Clock } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-neutral-950/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="https://lh3.googleusercontent.com/d/11yuTE40NZx1imt0DARVHUfIPTrgtrJA6=s512" alt="WEBNIXO AI Logo" className="w-8 h-8 rounded-full" />
            <span className="font-display font-bold text-xl tracking-tight">WEBNIXO<span className="text-indigo-400">.AI</span></span>
          </div>
          <a 
            href="https://forms.gle/MDgLgsSUHsyPEu2q9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
          >
            Apply
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
              Shape the future of AI with us.
            </h1>
            <p className="text-xl text-neutral-400 mb-10 leading-relaxed">
              Join WEBNIXO AI and work on cutting-edge machine learning models that solve real-world problems. We're looking for passionate builders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://forms.gle/MDgLgsSUHsyPEu2q9"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-950 rounded-lg font-medium hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Advantages Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-32 pt-16 border-t border-white/10 w-full"
          >
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Advantages of Joining</h2>
              <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                We believe in taking care of our team so they can focus on doing their best work.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                { icon: DollarSign, title: "Competitive Salary", desc: "Top-tier compensation packages that reflect your skills and impact." },
                { icon: Globe, title: "Remote-First", desc: "Work from anywhere in the world. We care about output, not office hours." },
                { icon: BookOpen, title: "Learning Budget", desc: "Generous annual stipend for courses, conferences, and books." },
                { icon: TrendingUp, title: "Meaningful Equity", desc: "We want everyone to share in the success of what we build together." },
                { icon: Clock, title: "Flexible Hours", desc: "Set your own schedule and work when you are most productive." }
              ].map((adv, i) => (
                <div key={i} className="p-6 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-indigo-500/30 transition-colors">
                  <adv.icon className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{adv.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{adv.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 text-center">
              <a
                href="https://forms.gle/MDgLgsSUHsyPEu2q9"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
              >
                Open Application Form
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
