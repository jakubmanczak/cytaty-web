import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const iconsize: number = 24;
  return (
    <nav className="flex flex-row shadow-md bg-slate-50">
      <Link href="/" className="flex flex-row px-4 mr-auto hover:bg-slate-200">
        <Image
          src="/zsklgbt.png"
          alt="tęczowe logo zsk"
          className="mr-4 object-contain transition hover:animate-spin"
          width={64}
          height={64}
        />
        <div className="flex flex-col py-4">
          <p className="font-bold text-xl">Cytaty 5C {"(2019-2024)"}</p>
          <p className="font-extralight">{"„Mamy na Panią teczkę...”"}</p>
        </div>
      </Link>
      <Link
        href="/szukaj"
        className="px-6 flex flex-row items-center gap-2 justify-center hover:bg-slate-200"
      >
        <Image
          src="/search.svg"
          alt="ikona reprezentatywna wyszukiwania"
          width={iconsize}
          height={iconsize}
        />
        <p className="hidden lg:block">Wyszukiwanie szczegółowe</p>
      </Link>
      <Link
        href="/panel-edytorski"
        className="px-6 flex flex-row items-center gap-2 justify-center hover:bg-slate-200"
      >
        <Image
          src="/layout.svg"
          alt="ikona reprezentatywna panelu edytorskiego"
          width={iconsize}
          height={iconsize}
        />
        <p className="hidden lg:block">Panel edytorski</p>
      </Link>
    </nav>
  );
};

export { Navigation };
