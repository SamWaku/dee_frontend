import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Specials from "./sections/Specials";

// app/page.tsx
export default function Home() {
  return (
    <div className="">
      <main>
        <div className="mx-auto xl:container md:mx-12 pb-20">
          <Hero />
        </div>

        <div className=" bg-white min-h-screen ">
          <Services />
        </div>
        <div className="  min-h-screen ">
          <Specials />
        </div>
      </main>{" "}
    </div>
  );
}
