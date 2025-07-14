import Button from "@/components/button";
import ProjectsSection from "@/components/sections/projectsSection";
import SubPageHeader from "@/components/subPageHeader";
import { Film, getFilms } from "@/utils/getFilms";

const AboutPage = async () => {
  const films: Film[] = await getFilms();

  return (
    <main className="max-w-screen overflow-x-hidden">
      <SubPageHeader
        title="O nás"
        claim="Vyprávět nestačí. Musíte tomu věřit."
        description="Fresh Lobster je produkce postavená na lidech. Lidech, kteří znají řemeslo, věří v obsah a mají odvahu říkat věci naplno. Tvoříme audiovizi, která má v sobě tah – ať už jde o celovečerní film, televizní cyklus nebo komorní projekt. Nehoníme trendy. Děláme věci, které chceme dělat. Věci, které dávají smysl nám – a skrz nás i těm, kteří je sledují."
      />

      <section className="mt-12 max-w-[80%] mx-auto px-4">
        <h2 className="text-lobster text-center text-2xl uppercase font-bold mt-20">
          Kristýna &amp; Ludvík
        </h2>
        <p className="text-black text-center text-6xl font-bold mt-5 leading-[1.1]">
          Dvě cesty, jeden směr
        </p>
        <p className="text-center text-xl mt-5 mb-10 w-1/2 mx-auto opacity-65 leading-tight">
          Nejsme značka, která vznikla v marketingové agentuře. Je to značka,
          která vznikla mezi dvěma lidmi. Mezi Kristýnou Drozdovou a Ludvíkem
          Marečkem. Dva lidé, dva různé přístupy – ale stejné hodnoty.
        </p>
        <div className="flex flex-col gap-10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lobster text-2xl uppercase font-bold mt-20">
                Kristýna Drozdová
              </h3>
              <blockquote className="italic text-primary mb-2">
                „Pro mě je nejdůležitější kolektiv. Když nefunguje tým,
                nefunguje projekt.“
              </blockquote>
              <p className="opacity-65">
                Kristýna věřila filmům od dětství. Sledující televizi jako
                jedináček, obklopená světem obrazů, věděla, že bude jednou stát
                „někde v pozadí“. Jen ještě netušila, kde přesně. Prošla si
                zábavnými i bolestivými momenty začátků – brigádami,
                podhodnocenými produkcemi, lidmi, kteří uměli mluvit, ale málo
                dělat.
              </p>
              <p className="mt-2 opacity-65">
                Ale nepřestala. Nikdy se nenechala odradit. Byla u Zlínského
                natáčení Znamení koně, přinesla do Fresh Lobsteru první lidi i
                první energii. Dnes je srdcem týmu a tím, kdo nejen tvoří
                zázemí, ale i drží prostor pro růst druhých.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lobster text-2xl uppercase font-bold mt-20">
                Ludvík Mareček
              </h3>
              <blockquote className="italic text-primary mb-2">
                „Já jsem táta Deníčku moderního fotra. A když na něj nikdo
                nepřišel, je to i moje vina.“
              </blockquote>
              <p className="opacity-65">
                Ludvík se k filmu dostal oklikou. Náhoda, kamera, produkce,
                FAMU. Záhy si ale uvědomil, že víc než formální role ho zajímá
                obsah – to, co film říká, co za ním stojí, proč vzniká.
              </p>
              <p className="mt-2 opacity-65">
                Zkušenosti z první ruky – od vedoucího natáčení až po
                spolutvůrce scénáře – mu ukázaly, že největší síla producenta
                není v kontrole, ale v důvěře a vizi. A v ochotě nést
                zodpovědnost. I když to někdy bolí.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-32 max-w-[80%] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-20">
        <div>
          <h2 className="text-2xl font-bold mb-4">Proč to děláme takhle?</h2>
          <p className="mb-4">
            Protože jsme zažili i jiný svět. Svět servisních produkcí, kde jsou
            lidé rozdělení na tabulky, výkazy a konkurenty. Kde se nepočítá s
            duší, jen s deadline.
          </p>
          <p>
            Ten svět jsme poznali. A rozhodli se jít jinudy. Protože víme, že
            dobrý projekt nevzniká v excelu. Vzniká ve vztazích. Ve vzájemném
            respektu, otevřenosti a ochotě dát víc než jen svůj čas.
          </p>
        </div>
        <div className="col-span-2">
          <h2 className="text-2xl font-bold mb-4">Stojíme na</h2>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold">Otevřené komunikaci</span>
              <br />
              Všechno se dá říct, když se to říká včas. Neřídíme se hierarchií,
              ale důvěrou.
            </li>
            <li>
              <span className="font-semibold">Kolektivní energie</span>
              <br />
              Nevěříme v solitéry. Věříme v tým. A ten je funkční jen tehdy,
              když každý ví, že je důležitý.
            </li>
            <li>
              <span className="font-semibold">Mainstream s kvalitou</span>
              <br />
              Nezaštiťujeme se „uměním“. Ale i komedie může být chytrá, upřímná
              a poctivě natočená.
            </li>
            <li>
              <span className="font-semibold">Producent jako spolutvůrce</span>
              <br />
              Nejsme ti, co čekají, až jim někdo přinese scénář. Věci
              rozjíždíme. A dotahujeme.
            </li>
          </ul>
        </div>
      </section>

      <section className="mt-12 max-w-[80%] mx-auto px-4">
        <h2 className="text-lobster text-center text-2xl uppercase font-bold mt-20 mb-10">
          Kam nás to dovedlo?
        </h2>
        <ProjectsSection films={films} />
        <div className="flex flex-row justify-center mt-10 gap-5">
          <Button link={"/projekty"} inverse={false}>
            Prohlédnout všechny projekty
          </Button>
          <Button link={"/spolupracovnici"} inverse={true}>
            Kdo s námi spolupracuje
          </Button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
