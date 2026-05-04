import Header from "./components/Header";
import Hero from "./components/Hero";
import Hook from "./components/Hook";
import AIObjection from "./components/AIObjection";
import About from "./components/About";
import Process from "./components/Process";
import Differentiators from "./components/Differentiators";
import WhatsIncluded from "./components/WhatsIncluded";
import RiskReversal from "./components/RiskReversal";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import WhoFor from "./components/WhoFor";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Hook />
      <AIObjection />
      <About />
      <Process />
      <Differentiators />
      <WhatsIncluded />
      <RiskReversal />
      <Testimonials />
      <FAQ />
      <WhoFor />
      <FinalCTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
