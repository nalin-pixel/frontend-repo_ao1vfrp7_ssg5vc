import { useMemo } from 'react';
import { Star, Phone, Mail, ArrowRight, Sparkles } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function HeroSection() {
  const stats = useMemo(() => (
    [
      { label: 'Happy Students', value: '400+' },
      { label: 'Dedicated Lectures', value: '600 Hrs' },
      { label: 'Experienced Faculty', value: '10+ Yrs' },
      { label: 'IIM Admissions', value: '47' },
    ]
  ), []);

  return (
    <div className="relative overflow-hidden">
      {/* Top navigation with primary CTA */}
      <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/60 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-slate-900 font-semibold text-lg">
            <Sparkles className="h-5 w-5 text-indigo-600" />
            <span>Think Plus Education</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
            <a href="#services" className="hover:text-indigo-600">Services</a>
            <a href="#testimonials" className="hover:text-indigo-600">Testimonials</a>
            <a href="#blog" className="hover:text-indigo-600">Blog</a>
            <a href="#contact" className="hover:text-indigo-600">Contact</a>
          </nav>
          <a href="#join" className="inline-flex items-center gap-2 rounded-full bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            Join Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* Hero section with BIG animation */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        {/* Background glow overlay must not block interaction */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,rgba(79,70,229,0.12),transparent_40%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 relative">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-medium mb-4">
                <Star className="h-4 w-4 fill-indigo-600 text-indigo-600" />
                IIM grads • Expert-led coaching
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Welcome to Think Plus Education
              </h1>
              <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl">
                Crack CAT, IPMAT, CLAT and more with specially curated courses made by IIM grads for future IIM grads.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="#services" className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 text-white px-5 py-3 text-sm font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Explore Courses <ArrowRight className="h-4 w-4" />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white text-slate-900 px-5 py-3 text-sm font-medium hover:bg-slate-50">
                  Let’s Keep In Touch
                </a>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-700">
                <div className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-indigo-600" /> +91 9581400055</div>
                <div className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-600" /> support@thinkpluseducation.com</div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
                    <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                    <div className="text-xs text-slate-600 mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Massive Spline animation */}
            <div className="relative w-full h-[380px] sm:h-[460px] md:h-[560px] rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-black">
              <Spline
                scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
