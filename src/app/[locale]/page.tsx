import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Deployment } from "@/components/sections/Deployment";
import { Portfolio } from "@/components/sections/Portfolio";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default async function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-page-glow pt-16">
        <Hero />
        <Services />
        <Portfolio />
        <Process />
        <Deployment />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
