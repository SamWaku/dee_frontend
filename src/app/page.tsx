import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Specials from "./sections/Specials";

// app/page.tsx
export default function Home() {
  return (
    <div className="">
      <main>
        <div className=" flex-1  mx-auto xl:container md:mx-12 pb-20">
          <Hero />
        </div>

        <div className=" bg-white min-h-screen ">
          <Specials />
        </div>
        <div className=" min-h-screen">
          <Services />
        </div>
      </main>{" "}
    </div>
  );
}
