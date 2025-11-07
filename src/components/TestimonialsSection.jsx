import { useState } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Kundana',
    quote:
      'The mentorship and structured approach helped me stay consistent. The mocks were spot on!',
  },
  {
    name: 'Prameela',
    quote:
      'Classes were insightful and focused on fundamentals. I felt confident walking into the exam.',
  },
  {
    name: 'Bhavisya Reddy',
    quote:
      'Loved the doubt-solving sessions and personal feedback. Made all the difference for me.',
  },
];

export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[index];

  return (
    <section id="testimonials" className="py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">What students have to say about THINKPLUS</h2>
        <p className="text-slate-600 text-center mt-2">Real stories from learners who trusted the process.</p>

        <div className="mt-10 relative">
          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
            <Quote className="h-6 w-6 text-indigo-600" />
            <p className="mt-4 text-slate-900 text-lg leading-relaxed">“{t.quote}”</p>
            <p className="mt-3 text-slate-600">— {t.name}</p>
          </div>

          <div className="absolute inset-y-0 -left-4 flex items-center">
            <button onClick={prev} aria-label="Previous" className="p-2 rounded-full bg-white border border-slate-200 shadow hover:bg-slate-50">
              <ArrowLeft className="h-4 w-4" />
            </button>
          </div>
          <div className="absolute inset-y-0 -right-4 flex items-center">
            <button onClick={next} aria-label="Next" className="p-2 rounded-full bg-white border border-slate-200 shadow hover:bg-slate-50">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="#all-testimonials" className="text-indigo-700 font-medium hover:underline">View All Testimonials</a>
        </div>
      </div>
    </section>
  );
}
