"use client";
import { Navigation } from "@/components/Navigation";
import { Quote } from "@/components/Quote";
import { quote } from "@/types/quote";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [quoteCount, setQuoteCount] = useState<number | null>(null);
  const unixStart = 1567317600 * 1000; // ms
  const [resolved, setResolved] = useState<quote | null>(null);
  useEffect(() => {
    // let isRandomQuoteFetchSuccessful = false;
    fetch("/api/quote/count")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setQuoteCount(json["count"]);
      });
    // fetch("/api/quote/random")
    //   .then((res) => {
    //     if (res.ok) isRandomQuoteFetchSuccessful = true;
    //     return res.ok ? res.json() : JSON.parse("{}");
    //   })
    //   .then((json) => {
    //     setResolved(isRandomQuoteFetchSuccessful ? json : null);
    //   });
  }, []);
  return (
    <>
      <Navigation />
      <div className="max-w-4xl mx-auto py-4">
        <h2 className="font-bold text-xl py-4">Losowy cytat</h2>
        <Quote quote={resolved} />
      </div>
      <h2 className="max-w-4xl mx-auto font-bold text-xl py-2">Statystyki</h2>
      <div className="max-w-4xl mx-auto py-4 flex flex-col md:flex-row flex-wrap gap-4">
        {[
          {
            head: quoteCount,
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
              {el.head !== null ? (
                <p className="font-extrabold text-4xl">{el.head}</p>
              ) : (
                <div className="mx-auto h-10 bg-slate-200 rounded animate-pulse" />
              )}
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
