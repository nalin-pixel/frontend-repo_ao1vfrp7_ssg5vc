import { motion } from 'framer-motion';

const logos = ['IIM', 'NALSAR', 'IIT', 'XLRI', 'NIT', 'ISB'];

export default function MarqueeLogos() {
  return (
    <section className="bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-slate-500 text-xs uppercase tracking-widest mb-4">Trusted by aspirants targeting</div>
        <div className="overflow-hidden relative">
          <motion.div
            className="flex items-center gap-10 whitespace-nowrap"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
          >
            {[...logos, ...logos, ...logos].map((name, i) => (
              <div
                key={i}
                className="px-4 py-2 rounded-full border border-slate-200 text-slate-600 bg-slate-50 shadow-sm"
              >
                {name}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
