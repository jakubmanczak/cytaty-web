"use client";
import { Navigation } from "@/components/Navigation";
import { Quote } from "@/components/Quote";
import { useState } from "react";
import Image from "next/image";

const exampleDataSet = [
  {
    quoteid: "01HBY5X0KZV4AQWXA7XFX84Y3A",
    context: "data na plakacie z PRL-u",
    timestamp: 1696324197,
    lines: [
      {
        lineid: "asdasdfasdfa",
        content: "8 marca? W sumie nie wiem co to za data...",
        author: "Mateusz Dobrzyński",
      },
      {
        lineid: "ehtdngw5yresgdf",
        content:
          "Dzień kobiet... ale podobno w ZSK macie prawo tego nie wiedzieć.",
        author: "Sławomir Wartacz",
      },
    ],
  },
  {
    quoteid: "01HBY66QS7VP7SY0RK5A0K52B4",
    context: "o tatuażu Kacpra Włosińskiego",
    timestamp: 1696412277,
    lines: [
      {
        lineid: "6uhdfxfgwe",
        content: "A ty znowu jak brudnopis wyglądasz.",
        author: "Alicja Gizelska",
      },
    ],
  },
  {
    quoteid: "01HBY8EXFV0T62N2EB8X7975TD",
    context: null,
    timestamp: 1695282767,
    lines: [
      {
        lineid: "asfgafgsdfg",
        content: "Franek bez bolca dostaje pierdolca.",
        author: "Aleksander Skubała",
      },
      {
        lineid: "dsfgheuyhdgdgf",
        content: "Jak się Olka nie bije to mu wątroba gnije.",
        author: "Franciszek Niemczewski",
      },
    ],
  },
  {
    quoteid: "01HBY8QBWTBPC6FN5DJ0JG8AXT",
    context: null,
    timestamp: 1695200627,
    lines: [
      {
        lineid: "sdfgsdfgsdfg",
        content: "A gdzie tu jest sex?",
        author: "Ryszard Pyssa",
      },
    ],
  },
];

const resolvedData = exampleDataSet;

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <>
      <Navigation />
      <main className="max-w-4xl mx-auto py-4">
        {/* SEARCH SECTION */}
        <section className="flex flex-col gap-3 my-6">
          <div className="w-full flex flex-row shadow rounded">
            <input
              type="text"
              placeholder={`Szukaj w cytatach, kontekstach lub autorach...`}
              className="w-full p-3 rounded-lg rounded-tr-none rounded-br-none"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
              }}
            />
            <button
              className="
              flex justify-center items-center w-12
              bg-gradient-to-t from-violet-700 to-blue-600
              rounded-lg rounded-tl-none rounded-bl-none drop-shadow
            "
            >
              <Image
                src="/search-white.svg"
                alt="ikona szukania reprezentująca przycisk do zatwierdzenia wyszukania"
                width={24}
                height={24}
              />
            </button>
          </div>
          {/* <div className="w-full flex flex-row">
            <p>aa</p>
          </div> */}
          <p className="text-slate-400 text-center">
            (Aktualnie niefunkcjonalne z powodu braku backendu - szukanie pokaże
            brak wyników.)
          </p>
        </section>
        <hr className="border-slate-300" />
        {/* RESULTS SECTION */}
        <section>
          {searchQuery ? (
            <p className="text-2xl font-bold text-slate-500 text-center mt-8">
              Nie znaleziono cytatów.
            </p>
          ) : (
            <p className="text-slate-500 text-center mt-1">
              Znaleziono {resolvedData.length} cytat
              {resolvedData.length == 1
                ? ""
                : [2, 3, 4].includes(resolvedData.length)
                ? "y"
                : "ów"}
              .
            </p>
          )}
          {/*  */}
          <div className="flex flex-col gap-4 mt-2">
            {resolvedData
              ? resolvedData.map((quote) => {
                  return (
                    <Quote
                      quote={{
                        quoteid: quote.quoteid,
                        context: quote.context,
                        timestamp: quote.timestamp,
                        lines: quote.lines,
                      }}
                    />
                  );
                })
              : ""}
          </div>
        </section>
      </main>
    </>
  );
}
