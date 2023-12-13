import { Navigation } from "@/components/Navigation";
import { Quote } from "@/components/Quote";
import Link from "next/link";

export default function Home() {
  const unixStart = 1567317600 * 1000; // ms
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
      <div className="max-w-4xl mx-auto py-4 flex flex-col md:flex-row flex-wrap gap-4">
        {[
          {
            head: "2137",
            body: "cytatów w bazie",
          },
          {
            head: "∞",
            body: "przekleństw, wyzwisk i obelg",
          },
          {
            head: Math.floor((Date.now() - unixStart) / (1000 * 60 * 60 * 24)),
            body: "dni w tym pierdolniku",
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
              className="bg-slate-50 p-4 text-center md:rounded shadow flex-1 min-w-[30%]"
              key={el.body}
            >
              <p className="font-extrabold text-4xl">{el.head}</p>
              <p>{el.body}</p>
            </div>
          );
        })}
      </div>
      <hr className="max-w-4xl mx-auto border-slate-300 my-8" />
      <div className="max-w-4xl mx-auto py-4 flex flex-row justify-between">
        <div className="flex flex-col flex-1 px-4 text-center">
          <h3 className="font-bold text-2xl">Dodaj cytat</h3>
          <p className="text-slate-500">
            Z czego się tak śmiejesz? Powiedz. <br /> Wszyscy się pośmiejemy.
          </p>
          <Link
            href="/dodaj"
            className="mt-6 flex rounded outline-black outline-offset-4"
          >
            <button
              className="
                p-2 rounded flex-1 text-white shadow
                bg-violet-500 bg-gradient-to-r from-violet-700 to-blue-600
                hover:from-violet-800 hover:to-blue-700
                "
              tabIndex={-1}
            >
              Przejdź do dodawania cytatów.
            </button>
          </Link>
        </div>
        <div className="w-px bg-slate-300" />
        <div className="flex flex-col flex-1 px-4 text-center">
          <h3 className="font-bold text-2xl">Szukaj cytatu</h3>
          <p className="text-slate-500">
            Nie pamiętasz *jak* pan Jezus powiedział? <br /> To patrz teraz.
          </p>
          <Link
            href="/szukaj"
            className="mt-6 flex rounded outline-black outline-offset-4"
          >
            <button
              className="
                p-2 rounded flex-1 text-white shadow
                bg-violet-500 bg-gradient-to-r from-violet-700 to-blue-600
                hover:from-violet-800 hover:to-blue-700
                "
              tabIndex={-1}
            >
              Przejdź do szukania cytatów.
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
