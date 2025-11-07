import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogGalleryFooter from './components/BlogGalleryFooter';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <BlogGalleryFooter />
    </div>
  );
}

export default App;
