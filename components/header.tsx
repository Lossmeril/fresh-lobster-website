import Image from "next/image";
import Button from "./button";

const Header = () => {
  return (
    // DESKTOP NAVBAR
    <nav className="navbar w-screen h-24 fixed bg-[#ffffff] shadow-lg">
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
          <p>Domů</p>
          <p>O nás</p>
          <p>Projekty</p>
          <p>Kontakt</p>
        </div>

        <Button link="/" inverse={false}>
          Objednat filma!
        </Button>
      </div>
    </nav>
  );
};

export default Header;
