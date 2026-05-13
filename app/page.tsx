import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Hook from "./components/Hook";
import WhatsIncluded from "./components/WhatsIncluded";
import Differentiators from "./components/Differentiators";
import Process from "./components/Process";
import RiskReversal from "./components/RiskReversal";
import AIObjection from "./components/AIObjection";
import About from "./components/About";
import WhoFor from "./components/WhoFor";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Testimonials />
      <Hook />
      <WhatsIncluded />
      <Differentiators />
      <Process />
      <RiskReversal />
      <AIObjection />
      <About />
      <WhoFor />
      <FAQ />
      <FinalCTA />
    </>
  );
}
