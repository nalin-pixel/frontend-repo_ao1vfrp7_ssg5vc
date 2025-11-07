import HeroSection from './components/HeroSection';
import MarqueeLogos from './components/MarqueeLogos';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import BlogGalleryFooter from './components/BlogGalleryFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroSection />
      <MarqueeLogos />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <BlogGalleryFooter />
    </div>
  );
}

export default App;
