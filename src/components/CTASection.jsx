import { Rocket, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl overflow-hidden border border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-purple-50 shadow-lg">
          <div className="px-6 py-10 md:px-10 flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 text-indigo-700 font-semibold"><Rocket className="h-5 w-5" /> Ready to accelerate your prep?</div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2">Join the Think Plus cohort and get structured learning, mocks and mentorship</h3>
              <p className="text-slate-600 mt-2">Admissions open for CAT, IPMAT, CLAT. Limited seats per batch.</p>
            </div>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              href="#join"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-indigo-700"
            >
              Join Now <ArrowRight className="h-4 w-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
