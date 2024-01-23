"use client";
import { Navigation } from "@/components/Navigation";
import { Quote } from "@/components/Quote";
import { useEffect, useState } from "react";
import { IconSearch } from "@/icons/Search";
import { quote } from "@/types/quote";

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

const resolvedData: quote[] = [];

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [resolved, setResolved] = useState<quote[]>([]);
  useEffect(() => {
    fetch("/api/quote/all")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setResolved(json);
      });
  });
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
              className="w-full p-3 rounded rounded-tr-none rounded-br-none"
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
              }}
            />
            <button
              className="
              flex justify-center items-center w-12 text-slate-50
              bg-gradient-to-t from-violet-700 to-blue-600
              hover:from-violet-800 hover:to-blue-700
              rounded rounded-tl-none rounded-bl-none drop-shadow
            "
            >
              <IconSearch />
            </button>
          </div>
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
              Znaleziono {resolved.length} cytat
              {resolved.length == 1
                ? ""
                : [2, 3, 4].includes(resolved.length)
                ? "y"
                : "ów"}
              .
            </p>
          )}
          {/*  */}
          <div className="flex flex-col gap-4 mt-2">
            {resolved
              ? resolved.map((quote) => {
                  return <Quote quote={quote} key={quote.quoteid} />;
                })
              : ""}
          </div>
        </section>
      </main>
    </>
  );
}
