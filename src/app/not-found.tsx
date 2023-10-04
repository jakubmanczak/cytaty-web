import { Navigation } from "@/components/Navigation";

export default function EditorPanel() {
  return (
    <>
      <Navigation />
      <div className="max-w-4xl mt-16 m-auto p-4 rounded shadow-xl bg-slate-950 text-slate-50">
        <h1 className="font-bold text-xl">404</h1>
        <p className="text-slate-300">{"Cholerka, coś nie pykło."}</p>
      </div>
    </>
  );
}
