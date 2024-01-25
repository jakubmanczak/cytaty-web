import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { performDatabaseChecks } from "../../database";
import { quote } from "@/types/quote";

export async function GET(req: Request) {
  await performDatabaseChecks();
  const db = await open({
    filename: "./bazadanych.db",
    driver: sqlite3.Database,
  });
  const quotes: quote[] = [];
  let res = await db.all(`
    SELECT q.id AS "quoteid", q.tags AS "quotetags",
    q.context AS "context", q.timestamp,
    l.id AS "lineid", l.position AS "lineposition",
    l.content AS "linecontent", a.name AS "lineauthor"
    FROM quotes AS q
    JOIN lines AS l ON q.id = l.quote
    JOIN authors AS a ON l.author = a.id
    ORDER BY q.id ASC, l.position ASC;
  `);
  res.forEach((el) => {
    const {
      quoteid,
      quotetags,
      context,
      timestamp,
      lineid,
      lineposition,
      linecontent,
      lineauthor,
    } = el;
    if (!quotes.some((qel) => qel.quoteid === quoteid)) {
      quotes.push({
        quoteid: quoteid,
        context: context,
        lines: [],
        tags: quotetags,
        timestamp: timestamp,
      });
    }
    if (quotes[quotes.findIndex((qel) => qel.quoteid === quoteid)]) {
      quotes[quotes.findIndex((qel) => qel.quoteid === quoteid)].lines.push({
        lineid: lineid,
        content: linecontent,
        author: lineauthor,
      });
    }
  });
  return quotes.length
    ? Response.json(quotes)
    : Response.json(null, { status: 500 });
}
