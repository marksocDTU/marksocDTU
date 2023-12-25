"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

type Props = {};

const Header = (props: Props) => {
  const pathname = usePathname();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="flex items-center justify-between px-8 py-4">
        <div className="flex h-12 w-12"><Logo /></div>
      

      {/* // Desktop/Tablet */}
      <nav className="hidden xl:block">
        <Navlink href="/" pathname={pathname}>
          Home
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          How it Works
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          Features
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          Clients
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          Categories
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          Testimonials
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          Contact
        </Navlink>
        <button className="bg-primary-500 ml-4 rounded-full px-6 py-3 font-bold text-white">Get Started</button>
      </nav>
      {/* // Mobile */}
      <nav className={`absolute right-0 top-24 flex h-[calc(100%-6rem)] w-full flex-col items-center justify-center bg-white text-xl xl:hidden ${showMobileMenu ? "flex" : "hidden"}`}>
        <Navlink href="/" pathname={pathname}>
          Home
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          How it Works
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          Features
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          Clients
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          Categories
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          Testimonials
        </Navlink>
        <Navlink href="#" pathname={pathname}>
          Contact
        </Navlink>
      </nav>
      <MdMenu
        className={`cursor-pointer text-4xl xl:hidden ${showMobileMenu ? "hidden" : ""}`}
        onClick={() => {
          setShowMobileMenu(true);
        }}
      />
      <MdClose
        className={`cursor-pointer text-4xl xl:hidden ${showMobileMenu ? "" : "hidden"}`}
        onClick={() => {
          setShowMobileMenu(false);
        }}
      />
    </header>
  );
};

export default Header;

const Navlink = (props: { href: string; children: string; pathname?: string }) => {
  return (
    <Link href={props.href} className={`m-3 hover:text-gray-600 xl:mx-4 ${props.pathname === props.href ? "text-gray-600" : "text-black"}`}>
      {props.children}
    </Link>
  );
};
