"use client";
import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import Image from "next/image";

const exampleDataSet = [
  {
    quoteid: "01HBY5X0KZV4AQWXA7XFX84Y3A",
    context: "data 8 marca na socrealistycznym plakacie z PRL-u",
    timestamp: 0,
    lines: [
      {
        content: "8 marca? W sumie nie wiem co to za data...",
        author: "Mateusz Dobrzyński",
      },
      {
        content:
          "Dzień kobiet... ale podobno w ZSK macie prawo tego nie wiedzieć.",
        author: "Sławomir Wartacz",
      },
    ],
  },
  {
    quoteid: "01HBY66QS7VP7SY0RK5A0K52B4",
    context: "do Kacpra Włosińskiego na temat jego tatuażu",
    timestamp: 0,
    lines: [
      {
        content: "A ty znowu jak brudnopis wyglądasz.",
        author: "Alicja Gizelska",
      },
    ],
  },
  {
    quoteid: "01HBY8EXFV0T62N2EB8X7975TD",
    context: null,
    timestamp: 0,
    lines: [
      {
        content: "Franek bez bolca dostaje pierdolca.",
        author: "Aleksander Skubała",
      },
      {
        content: "Jak się Olka nie bije to mu wątroba gnije.",
        author: "Franciszek Niemczewski",
      },
    ],
  },
  {
    quoteid: "01HBY8QBWTBPC6FN5DJ0JG8AXT",
    context: null,
    timestamp: 0,
    lines: [
      {
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
            {!searchQuery
              ? resolvedData.map((quote) => {
                  return (
                    <article
                      key={quote.quoteid}
                      className="w-full bg-white rounded-lg shadow"
                    >
                      <div className="p-4">
                        {quote.lines.map((line) => {
                          return (
                            <p key={line.content}>
                              <span>{line.content}</span>
                              <span className="text-slate-400">
                                {" ~ "}
                                {line.author}
                              </span>
                            </p>
                          );
                        })}
                      </div>
                      <hr className="border-slate-300" />
                      <div className="flex flex-row justify-between bg-slate-100 rounded-bl-lg rounded-br-lg px-4 py-2">
                        <p className="text-slate-400">
                          {"("}
                          {quote.context || "brak kontekstu"}
                          {")"}
                        </p>
                        <p className="text-slate-400">
                          {new Date(quote.timestamp).toUTCString()}
                        </p>
                      </div>
                    </article>
                  );
                })
              : ""}
          </div>
        </section>
      </main>
    </>
  );
}
