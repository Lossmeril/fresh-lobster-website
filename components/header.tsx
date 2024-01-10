"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "./button";

import { GiHamburgerMenu } from "react-icons/gi";

const links = [
  ["/", "Domů"],
  ["/o-nas", "O nás"],
  ["/projekty", "Projekty"],
  ["/kontakt", "Kontakt"],
];

interface NavbarLinkProps {
  children: React.ReactNode;
  link: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, link }) => {
  return (
    <Link
      href=""
      className="font-medium text-lg rotate-hover hover:text-lobster"
    >
      <p>{children}</p>
    </Link>
  );
};

const Header = () => {
  return (
    <header>
      <nav className="navbar w-screen h-24 fixed bg-white shadow-sm z-50">
        <div className="flex flex-row gap-6 h-full justify-between items-center mx-[5vw] lg:mx-[10vw]">
          <div className="w-[118px] relative aspect-[12/5]">
            <a href="/">
              <Image
                src="/src/img/logo-color-light.png"
                alt="Fresh Lobster logo"
                className="object-contain"
                fill
              />
            </a>
          </div>

          {/* --------------------- DESKTOP NAVBAR --------------------- */}
          <div className="hidden md:flex flex-row md:gap-6 lg:gap-12 h-full justify-center items-center">
            {links.map((link) => (
              <NavbarLink key={link[0]} link="">
                {link[1]}
              </NavbarLink>
            ))}
          </div>

          {/* --------------------- MOBILE NAVBAR --------------------- */}
          <div className="flex md:hidden flex-row md:gap-6 lg:gap-12 h-full justify-center items-center">
            <div
              className={
                "px-3 py-3 border-2 transition-all duration-300 bg-lobster border-lobster text-white cursor-pointer"
              }
            >
              <GiHamburgerMenu />
            </div>
          </div>

          <Button link="/" inverse={false}>
            Objednat filma!
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
