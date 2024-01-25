"use client";
import { Navigation } from "@/components/Navigation";
import { Quote } from "@/components/Quote";
import { useEffect, useState } from "react";
import { IconSearch } from "@/icons/Search";
import { quote } from "@/types/quote";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [resolved, setResolved] = useState<quote[] | null>(null);
  useEffect(() => {
    let resOk = false;
    fetch("/api/quote/all")
      .then((res) => {
        if (res.ok) resOk = true;
        return res.ok ? res.json() : "";
      })
      .then((json) => {
        if (resOk) setResolved(json);
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
          {/* {searchQuery ? (
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
          )} */}
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
