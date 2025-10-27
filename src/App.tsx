import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Process from './components/Process';
import AudioShowcase from './components/AudioShowcase';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navigation />
      <Hero />
      <Features />
      <Services />
      <Process />
      <AudioShowcase />
      <Testimonials />
      <Clients />
      <Booking />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
