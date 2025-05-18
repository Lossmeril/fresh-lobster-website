import SubPageHeader from "@/components/subPageHeader";

const AboutPage = () => {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <SubPageHeader
        title={"O nás"}
        claim={"Vyprávět nestačí. Musíte tomu věřit."}
        description={
          "Fresh Lobster je produkce postavená na lidech. Lidech, kteří znají řemeslo, věří v obsah a mají odvahu říkat věci naplno. Tvoříme audiovizi, která má v sobě tah – ať už jde o celovečerní film, televizní cyklus nebo komorní projekt. Nehoníme trendy. Děláme věci, které chceme dělat. Věci, které dávají smysl nám – a skrz nás i těm, kteří je sledují."
        }
      />
    </main>
  );
};

export default AboutPage;
