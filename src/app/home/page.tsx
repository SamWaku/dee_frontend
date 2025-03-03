import NavBar from "@/components/NavBar";
import Hero from "../sections/Hero";
import Specials from "../sections/Specials";
import Services from "../sections/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Specials />
      <Services />
      <Footer />
    </main>
  );
}
