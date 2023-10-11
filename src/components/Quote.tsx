type quoteType = {
  quoteid: string;
  context: string | null;
  timestamp: number; // in seconds
  lines: {
    lineid: string;
    content: string;
    author: string;
  }[];
};

const Quote = (props: { quote: quoteType }) => {
  let datetime = new Date(props.quote.timestamp * 1000);
  return (
    <article className="w-full bg-white rounded shadow">
      <div className="p-4">
        {props.quote.lines.map((line) => {
          return (
            <p key={line.lineid}>
              <span>
                {/* {"„"} */}
                {line.content}
                {/* {"”"} */}
              </span>
              <span className="text-slate-400">
                {" ~ "}
                {line.author}
              </span>
            </p>
          );
        })}
      </div>
      <hr className="border-slate-300" />
      <div className="flex flex-row justify-between bg-slate-100 rounded-bl-lg rounded-br-lg px-4 py-2">
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
};

export { Quote };
