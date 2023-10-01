import { useState } from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import Link from "next/link";

type NavItemsProps = {
  label: string;
  page: string;
};

const NAV_ITEMS: NavItemsProps[] = [
  {
    label: "Home",
    page: "#home",
  },
  {
    label: "About",
    page: "#about",
  },
  {
    label: "Projects",
    page: "#projects",
  },
];

const Navbar = () => {
  const [navbar, setNavBar] = useState(false);

  return (
    <nav className="w-screen z-50 mx-auto px-4 shadow  top-0 dark:border-stone-600 sm:px-20">
      <div className="justify-between md:items-center md:flex">
        <div>
          <div className="md:py-5 md:block flex justify-between py-5 ">
            <Link href={"/"}>
              <h2 className="text-2xl font-bold cursor-pointer">
                Umur Deniz Dikmen
              </h2>
            </Link>

            <div className="md:hidden">
              <button onClick={() => setNavBar(!!!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="md:flex md:space-x-6 items-center justify-between md:space-x-6 space-y-8 md:space-y-0">
              {NAV_ITEMS.map((items, idx) => {
                return (
                  <Link
                    key={idx}
                    className={"block lg:inline-block  hover:text-neutral-500 "}
                    onClick={() => setNavBar(!navbar)}
                    href={items.page}
                  >
                    {items.label}
                  </Link>
                );
              })}
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
