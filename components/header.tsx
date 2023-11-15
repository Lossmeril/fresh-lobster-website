import Image from "next/image";
import Link from "next/link";
import Button from "./button";

const links = [
  ["/", "Domů"],
  ["/o-nas", "O nás"],
  ["/projekty", "Projekty"],
  ["/kontakt", "Kontakt"],
];

const Header = () => {
  return (
    // DESKTOP NAVBAR
    <nav className="navbar w-screen h-24 fixed bg-white shadow-sm">
      <div className="flex flex-row gap-6 h-full justify-between items-center mx-[10vw]">
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
        <div className="flex flex-row gap-12 h-full justify-center items-center">
          {links.map((link) => (
            // <Link key={link[0]} href={link[0]}>
            <Link
              key={link[0]}
              href=""
              className="font-medium text-lg rotate-hover hover:text-lobster"
            >
              <p>{link[1]}</p>
            </Link>
          ))}
        </div>

        <Button link="/" inverse={false}>
          Objednat filma!
        </Button>
      </div>
    </nav>
  );
};

export default Header;
