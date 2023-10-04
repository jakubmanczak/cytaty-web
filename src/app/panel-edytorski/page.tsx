import { Navigation } from "@/components/Navigation";

export default function EditorPanel() {
  return (
    <>
      <Navigation />
      <div className="max-w-xl mx-auto py-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-bold text-3xl mt-4">Zaloguj się</h1>
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
            <button className="bg-violet-500 bg-gradient-to-r from-violet-700 to-blue-600 p-2 rounded text-white shadow mt-3 outline-black">
              Zaloguj się
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
