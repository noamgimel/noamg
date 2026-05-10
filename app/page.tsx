import Hero from "./components/Hero";
import Hook from "./components/Hook";
import Testimonials from "./components/Testimonials";
import AIObjection from "./components/AIObjection";
import About from "./components/About";
import Process from "./components/Process";
import Differentiators from "./components/Differentiators";
import WhatsIncluded from "./components/WhatsIncluded";
import RiskReversal from "./components/RiskReversal";
import FAQ from "./components/FAQ";
import WhoFor from "./components/WhoFor";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Hook />
      <Testimonials />
      <AIObjection />
      <About />
      <Process />
      <Differentiators />
      <WhatsIncluded />
      <RiskReversal />
      <FAQ />
      <WhoFor />
      <FinalCTA />
    </>
  );
}
