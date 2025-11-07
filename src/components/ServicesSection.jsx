import { BookOpen, Compass, Briefcase, Brain, GraduationCap, ArrowRight } from 'lucide-react';

const services = [
  {
    key: 'ipmat',
    title: 'IPMAT Coaching',
    desc: 'Integrated program prep with concept mastery, mocks, and mentorship.',
    icon: GraduationCap,
  },
  {
    key: 'clat',
    title: 'CLAT Preparation',
    desc: 'Legal reasoning, reading comprehension and mock drills to ace CLAT.',
    icon: BookOpen,
  },
  {
    key: 'iqplus',
    title: 'IQ+ Program',
    desc: 'Analytical and logical reasoning booster for foundational strength.',
    icon: Brain,
  },
  {
    key: 'career',
    title: 'Career Counselling',
    desc: 'Personalized guidance for course selection and long-term planning.',
    icon: Compass,
  },
  {
    key: 'cat',
    title: 'CAT Coaching',
    desc: 'Quant, VARC, DILR with adaptive practice and full-length mocks.',
    icon: Briefcase,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Services</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Start your IPMAT, CAT, and CLAT preparation with Think Plus. Expert-led courses designed to get you exam-ready.</p>
          </div>
          <a href="#join" className="hidden sm:inline-flex items-center gap-2 text-indigo-700 font-medium hover:underline">Join Now <ArrowRight className="h-4 w-4" /></a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ key, title, desc, icon: Icon }) => (
            <a key={key} href={`#service-${key}`} className="group rounded-xl border border-slate-200 p-5 bg-gradient-to-b from-white to-slate-50 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-50 text-indigo-700"><Icon className="h-5 w-5" /></div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">{desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-indigo-700 text-sm font-medium">
                Explore <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
