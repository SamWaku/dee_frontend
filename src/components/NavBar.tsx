"use client";

type NavBarProps = {
  name: string | null; // Define the type for the name prop
};

const NavBar = () => {
  return (
    <div className="xl:px-10 lg:px-10 fixed w-full bg-slate-200 bg-opacity-70 backdrop-blur-lg justify-between z-10">
      <nav className="flex w-full py-4 justify-between">
        <div></div>
        <div className="">
          <p>Navbar</p>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
