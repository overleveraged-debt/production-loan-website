import HeroSection from '../components/HeroSection';
import Products from '../components/Products';
import WhyChooseUs from '../components/WhyChooseUs';
import EasySteps from '../components/EasySteps';
import PanIndia from '../components/PanIndia';
import Testimonials from '../components/Testimonials';
import Partners from '../components/Partners';
import Cities from '../components/Cities';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <WhyChooseUs />
      <Products />
      <EasySteps />
      <PanIndia />
      <Testimonials />
      <Partners />
      <Cities />
    </main>
  );
}
