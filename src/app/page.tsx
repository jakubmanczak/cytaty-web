import { Navigation } from "@/components/Navigation";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="max-w-4xl mx-auto py-4">
        <h1 className="font-bold text-xl">Główna</h1>
        <p>Strona w konstrukcji.</p>
      </div>
    </>
  );
}
