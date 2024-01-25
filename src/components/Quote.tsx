import { quote } from "@/types/quote";

const Quote = (props: { quote: quote | null }) => {
  if (props.quote) {
    let datetime = new Date(props.quote.timestamp * 1000);
    return (
      <article className="w-full bg-white md:rounded shadow">
        <div className="p-4">
          {props.quote.lines.map((line) => {
            return (
              <p key={line.lineid}>
                <span>
                  {/* {"„"} */}
                  {line.content}
                  {/* {"”"} */}
                </span>
                <span className="text-slate-400 pl-3">
                  {" ~ "}
                  {line.author}
                </span>
              </p>
            );
          })}
        </div>
        <hr className="border-slate-300" />
        <div className="flex flex-row justify-between bg-slate-100 rounded-bl rounded-br px-4 py-2">
          <p className="text-slate-400">
            {"("}
            {props.quote.context || "brak kontekstu"}
            {")"}
          </p>
          <p className="text-slate-400">
            {datetime.getDate() + 1 < 10 ? "0" : ""}
            {datetime.getDate()}
            {"/"}
            {datetime.getMonth() + 1 < 10 ? "0" : ""}
            {datetime.getMonth() + 1}
            {"/"}
            {datetime.getFullYear()}
            {" @ "}
            {datetime.getHours() < 10 ? "0" : ""}
            {datetime.getHours()}
            {":"}
            {datetime.getMinutes() < 10 ? "0" : ""}
            {datetime.getMinutes()}
          </p>
        </div>
      </article>
    );
  } else {
    return (
      <article className="w-full bg-white md:rounded shadow">
        <div className="flex flex-col gap-2 p-4">
          <div className="block w-3/4 h-5 bg-slate-200 rounded animate-pulse" />
          <div className="block w-3/5 h-5 bg-slate-200 rounded animate-pulse" />
        </div>
        <hr className="border-slate-300" />
        <div className="flex flex-row justify-between bg-slate-100 rounded-bl rounded-br px-4 py-2">
          <div className="block w-2/5 h-5 bg-white rounded animate-pulse" />
          <div className="block w-1/5 h-5 bg-white rounded animate-pulse" />
        </div>
      </article>
    );
  }
};

export { Quote };
