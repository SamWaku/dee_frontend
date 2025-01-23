import NavBar from "@/components/NavBar";
import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Specials from "@/sections/Specials";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Specials />
      <Services />
    </main>
  );
}
