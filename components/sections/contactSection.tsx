import React from "react";

import ContactForm from "../contactForm";
import { SiInstagram } from "react-icons/si";

export const ContactSection: React.FC = () => (
  <section id="kontakt" className="bg-white relative overflow-hidden pb-20">
    <h2 className="text-lobster text-center text-2xl uppercase font-bold mt-20">
      Kontaktujte nás
    </h2>
    <p className="text-black text-center text-5xl font-bold mt-5 leading-[1] mb-5">
      Tak co spolu natočíme?
    </p>
    <p className="text-center text-xl mt-5 mb-10 mx-[25%] opacity-65 leading-tight">
      Chcete něco natočit? Nebo jen hledáte někoho, kdo vás pochopí? Ozvěte se.
      Jsme otevření projektům, lidem i&nbsp;výzvám
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-3 w-[90%] lg:w-[80%] mx-auto">
      <div className="flex flex-col gap-8 justify-center mb-10 lg:mb-0">
        <a
          href="mailto:ludvik@freshlobster.cz"
          className="text-lobster underline"
        >
          {" "}
          <div className="flex flex-row items-center gap-4 text-xl">
            <div className="bg-lobster blob-animated h-12 w-12 grid place-content-center text-white">
              <SiInstagram size={24} />
            </div>
            <p>@freshlobster</p>
          </div>
        </a>

        <div>
          <h3 className="text-lobster text-xl uppercase font-bold">
            Ludvík Mareček
          </h3>
          <p className="font-bold mb-5">producent</p>
          <p className="text-sm text-gray-800">
            E-mail:{" "}
            <a
              href="mailto:ludvik@freshlobster.cz"
              className="text-lobster underline"
            >
              ludvik@freshlobster.cz
            </a>
          </p>
          <p className="text-sm text-gray-800">
            Telefon:{" "}
            <a href="tel:+420603152835" className="text-lobster underline">
              +420 603 152 835
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-lobster text-xl uppercase font-bold">
            Kristýna Drozdová
          </h3>
          <p className="font-bold mb-5">vedoucí natáčení</p>
          <p className="text-sm text-gray-800">
            E-mail:{" "}
            <a
              href="mailto:kristyna@freshlobster.cz"
              className="text-lobster underline"
            >
              kristyna@freshlobster.cz
            </a>
          </p>
          <p className="text-sm text-gray-800">
            Telefon:{" "}
            <a href="tel:+420774084626" className="text-lobster underline">
              +420 774 084 626
            </a>
          </p>
        </div>
      </div>
      <div className="lg:col-span-2 w-full">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default ContactSection;
