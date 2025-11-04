import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Plans from "@/components/Plans";
import Results from "@/components/Results";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Choices from "@/components/Choices";
import WhatYouGet from "@/components/WhatYouGet";
import FAQ from "@/components/Faq";

export default function Home() {
  return (
    <main>
      {/* <Header /> */}
      <Hero />
      <About />
      <Results />
      <Choices />
      <WhatYouGet />
      <FAQ />
      <CTASection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
