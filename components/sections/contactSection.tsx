import React from "react";

import ContactForm from "../contactForm";

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
      <div></div>
      <div className="lg:col-span-2 w-full">
        <ContactForm />
      </div>
    </div>
  </section>
);

export default ContactSection;
