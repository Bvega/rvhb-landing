import SeoSchema from "@/components/SeoSchema";
import Hero from "@/components/Hero";
import Value from "@/components/Value";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABand from "@/components/CTABand";

export default function Page() {
  return (
    <>
      <SeoSchema />
      <Hero />
      <Value />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQ />
      <CTABand />
    </>
  );
}
