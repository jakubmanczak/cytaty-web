import { Navigation } from "@/components/Navigation";
import { Quote } from "@/components/Quote";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="max-w-4xl mx-auto py-4">
        <h2 className="font-bold text-xl py-4">Cytat dnia</h2>
        <Quote
          quote={{
            lines: [
              {
                lineid: "asdasd",
                author: "Krzysztof Łuczka",
                content: "Ile potrzeba Mańczaków...",
              },
              {
                lineid: "rgdfsgs",
                author: "Jakub Mańczak",
                content: "Jak najmniej!",
              },
            ],
            context: "",
            quoteid: "fsyughqw489etgyaerhugfiswe4y8tgr",
            timestamp: 1698178080,
          }}
        />
      </div>
      <h2 className="max-w-4xl mx-auto font-bold text-xl py-2">Statystyki</h2>
      <div className="max-w-4xl mx-auto py-4 flex flex-row flex-wrap gap-4">
        {[
          {
            head: "2137",
            body: "cytatów w bazie",
            class: "min-w-[25%] flex-1",
          },
          {
            head: "∞",
            body: "przekleństw, wyzwisk i obelg",
            class: "min-w-[25%] flex-1",
          },
          {
            head: "1521",
            body: "dni w tym pierdolniku",
            class: "min-w-[25%] flex-1",
          },
          {
            head: "ndst.",
            body: "ocena Jakuba Kleki z matematyki",
          },
          {
            head: "204% ↘",
            body: "spadek akcji spółki CD Projekt wg. Rabendy",
          },
        ].map((el) => {
          return (
            <div
              className={`bg-slate-50 p-4 text-center rounded shadow min-w-max ${
                el.class ? el.class : "flex-1"
              }`}
              key={el.body}
            >
              <p className="font-extrabold text-4xl">{el.head}</p>
              <p>{el.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
