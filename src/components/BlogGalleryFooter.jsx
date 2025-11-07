import { Dot, ArrowRight, MapPin, Phone, Mail, Star } from 'lucide-react';

const blogPosts = [
  {
    title: 'Cracking CAT - The Complete Guide',
    href: '#blog-cat-guide',
  },
  {
    title: 'Beyond Coaching: Self Preparation is the next step for IPMAT',
    href: '#blog-ipmat-self-prep',
  },
];

export default function BlogGalleryFooter() {
  return (
    <div>
      {/* Blog preview */}
      <section id="blog" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
                <Dot className="h-7 w-7 text-indigo-600" /> Latest from the Blog
              </h2>
              <p className="mt-2 text-slate-600 max-w-2xl">Know more about the CAT, IPMAT and CLAT exams with tips, guides and prep strategies.</p>
            </div>
            <a href="#blog-all" className="hidden sm:inline-flex items-center gap-2 text-indigo-700 font-medium hover:underline">Explore More <ArrowRight className="h-4 w-4" /></a>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {blogPosts.map((p) => (
              <a key={p.title} href={p.href} className="group rounded-xl border border-slate-200 overflow-hidden bg-white hover:shadow-md transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100" />
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 group-hover:text-indigo-700">{p.title}</h3>
                  <div className="mt-2 inline-flex items-center gap-1 text-indigo-700 text-sm font-medium">
                    Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 text-center">Campus & Activities</h2>
          <p className="text-slate-600 text-center mt-2">Seminars, infrastructure, activities, and classes.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {[0,1,2,3,4,5,6,7].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-slate-100 to-slate-200" />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 text-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-lg font-semibold">About Us</h3>
              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                Think Plus Education, an initiative by IIM grads started in 2022 to help students prepare for alternate career opportunities through quality coaching and mentoring.
              </p>
              <div className="mt-4 inline-flex items-center gap-2 text-amber-400">
                <Star className="h-5 w-5" /> Trusted by hundreds of learners
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#service-cat" className="hover:underline">CAT</a></li>
                <li><a href="#service-ipmat" className="hover:underline">IPMAT</a></li>
                <li><a href="#service-clat" className="hover:underline">CLAT</a></li>
                <li><a href="#service-iqplus" className="hover:underline">IQ+</a></li>
                <li><a href="#service-career" className="hover:underline">Career Counselling</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /> 45-56-03/5/4, near Axis Bank, Narasimhanagar, Akkayyapalem, Vishakapatnam Andhra Pradesh 530024</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 9581400055</li>
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@thinkpluseducation.com</li>
              </ul>
              <a id="join" href="#" className="mt-4 inline-flex items-center gap-2 rounded-lg bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow hover:bg-indigo-700">Join Now</a>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-700 pt-6 text-sm text-slate-400">© {new Date().getFullYear()} Think Plus Education. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
