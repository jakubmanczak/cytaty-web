import { Navigation } from "@/components/Navigation";
import Image from "next/image";

export default function Search() {
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
            />
            <button
              className="
              flex justify-center items-center w-12
              bg-gradient-to-t from-violet-700 to-blue-600
              rounded rounded-tl-none rounded-bl-none drop-shadow
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
        </section>
        <hr className="border-slate-300" />
        {/* RESULTS SECTION */}
        <section>
          <h1 className="text-2xl font-bold text-slate-500 text-center mt-8">
            Nie znaleziono cytatów.
          </h1>
        </section>
      </main>
    </>
  );
}
