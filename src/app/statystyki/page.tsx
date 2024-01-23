"use client";
import { Navigation } from "@/components/Navigation";
import { useEffect, useState } from "react";

const statTitles = {
  quotes: "Ilość cytatów w bazie danych",
};

export default function BigStatsPage() {
  const [stats, setStats] = useState<{}[]>([{}]);
  useEffect(() => {
    fetch("/api/stats")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setStats(json);
      });
  }, []);
  return (
    <>
      <Navigation />
      <div className="max-w-4xl mx-auto py-4">
        <h1 className="font-bold text-2xl">Statystyki</h1>
        <div className="flex flex-row gap-2">
          {/* {stats.map((el) => {
            return (
              <div>
                <h1>
                  {
                    Object.entries(Object.keys(statTitles))
                    // statTitles[Object.entries(statTitles).includes(Object.keys(el)) ? Object.keys(el) : ""]
                  }
                </h1>
              </div>
            );
            // return `${statTitles[`${Object.keys(el)}`]} ${Object.values(el)}`;
          })} */}
        </div>
      </div>
    </>
  );
}
