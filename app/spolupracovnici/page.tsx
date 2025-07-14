import SubPageHeader from "@/components/subPageHeader";
import { getPeople } from "@/utils/getPeople";
import { Person } from "@/utils/getPeople";

export default async function PeoplePage() {
  const people: Person[] = await getPeople();

  return (
    <main className="min-h-screen w-full bg-white pb-16">
      <SubPageHeader
        title={"Spolupracovníci"}
        claim={"Bez správných lidí to nedává smysl."}
        description={
          "Produkce není jen o technice a plánování. Je to o chemii. O propojení. Fresh Lobster stojí na vztazích, které se tvoří roky a zrají zkušeností. Ať už jde o režiséry, produkční, kostyméry, střihače nebo runnera – pokud jsme s někým pracovali víc než jednou, je to pro nás víc než spolupráce. Je to partnerství. Níže najdete přehled lidí, kteří tvoří a tvořili s námi. Za každým projektem je jméno. A za každým jménem je příběh."
        }
      />
      <div className="w-full max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {people.map((person) => (
            <div key={person.slug} className="block group">
              <div className="w-full flex flex-col items-center gap-4 px-4">
                <div className="w-full aspect-square h-auto relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={person.photo}
                    alt={person.name}
                    className="object-cover w-full h-full blob-animated"
                  />
                </div>
                <div className="w-full text-center">
                  <div className="bg-lobster w-full px-3 py-1">
                    <h3 className="text-white text-lg font-semibold">
                      {person.name}
                    </h3>
                  </div>
                  <p className="font-bold mt-2">{person.role}</p>
                  <p className="text-sm mt-2 opacity-65">
                    {person.workedOn.map((w: { name: string }, i: number) => (
                      <span key={w.name}>
                        {w.name}
                        {i < person.workedOn.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
