"use client";
import { Navigation } from "@/components/Navigation";
import { UserContext } from "@/contexts/UserContext";
import Link from "next/link";
import { useContext } from "react";

export default function LogInPage() {
  const userctx = useContext(UserContext);
  return (
    <>
      <Navigation />
      <div className="max-w-xl mx-auto py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="mt-4 text-3xl font-bold">
            {userctx?.user.loggedin ? "Zalogowano pomyślnie" : "Zaloguj się"}
          </h1>
          {userctx?.user.loggedin ? (
            <div>
              <div className="flex flex-col pt-8 gap-2">
                <p className="mb-3">przejdź do:</p>
                {[
                  {
                    name: "Strony głównej",
                    link: "/",
                  },
                  {
                    name: "Statystyk",
                    link: "/statystyki",
                  },
                  {
                    name: "Panelu edytorskiego",
                    link: "/panel-edytorski",
                  },
                  {
                    name: "Szukania cytatów",
                    link: "/szukaj",
                  },
                  {
                    name: "Dodawania cytatów",
                    link: "/dodaj",
                  },
                  {
                    name: "Ustawień konta",
                    link: "/ustawienia-konta",
                  },
                ].map((el) => {
                  return (
                    <Link
                      key={el.name}
                      href={el.link}
                      className="
                      p-2 rounded text-white text-center shadow outline-black
                      bg-violet-500 bg-gradient-to-r from-violet-700 to-blue-600
                      hover:from-violet-800 hover:to-blue-700
                      "
                    >
                      {el.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex flex-col pt-8 gap-2">
              <label htmlFor="username">Nazwa użytkownika</label>
              <input
                id="username"
                type="text"
                placeholder={`np. "franiu"`}
                className="p-2 rounded"
                autoComplete="off"
                spellCheck="false"
              />
              <label htmlFor="password">Hasło</label>
              <input
                id="password"
                type="password"
                placeholder={`np. "haslo123"`}
                className="p-2 rounded"
                autoComplete="off"
                spellCheck="false"
              />
              <button
                className="
                  p-2 rounded text-white shadow mt-3 outline-black
                  bg-violet-500 bg-gradient-to-r from-violet-700 to-blue-600
                  hover:from-violet-800 hover:to-blue-700
                "
                onClick={() => {
                  userctx?.setUser({ loggedin: true });
                }}
              >
                Zaloguj się
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
