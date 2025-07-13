import React from "react";
import Button from "../button";
import ContactForm from "../contactForm";

export const ContactSection: React.FC = () => (
  <section className="bg-white relative overflow-hidden pb-20">
    <h2 className="text-lobster text-center text-2xl uppercase font-bold mt-20">
      Kontaktujte nás
    </h2>
    <p className="text-black text-center text-5xl font-bold mt-5 leading-[1] mb-5">
      Chcete něco natočit?
    </p>
    <p className="text-center text-xl mt-5 mb-10 mx-[20%] opacity-65 leading-tight">
      Chcete něco natočit? Nebo jen hledáte někoho, kdo vás pochopí? Ozvěte se.
      Jsme otevření projektům, lidem i&nbsp;výzvám
    </p>
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div></div> <ContactForm />
    </div>
  </section>
);

export default ContactSection;
