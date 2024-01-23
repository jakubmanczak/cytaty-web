import Link from "next/link";

const LoginNeeded = () => {
  return (
    <>
      <div className="max-w-xl mx-auto py-4 text-center">
        <h2 className="font-bold text-3xl">Bramka autoryzacjna</h2>
        <p className="text-slate-500 font-thin text-lg">
          Węzeł państwowy, ale nie do końca.
        </p>
        <br />
        <p>Musisz być zalogowanym aby wyświetlić tą stronę.</p>
        <Link href="/zaloguj-sie">
          <button
            className="
                p-2 rounded text-white shadow mt-3 outline-black
                bg-violet-500 bg-gradient-to-r from-violet-700 to-blue-600
                hover:from-violet-800 hover:to-blue-700
                w-80
              "
          >
            Zaloguj się
          </button>
        </Link>
      </div>
    </>
  );
};
export { LoginNeeded };
