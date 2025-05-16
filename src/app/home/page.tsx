import Hero from "../sections/Hero";
import Specials from "../sections/Specials";
import Services from "../sections/Services";
import Footer from "@/components/Footer";
import Testimonials from "../sections/Testimonials";
import { Suspense } from "react";

export default function Home() {
  return (
    <main>
      <Hero />
      <Specials />
      <Services />
      <Testimonials />
      <Footer />
    </main>
  );
}
