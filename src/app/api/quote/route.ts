// SELECT L.id, L.quote, L.position, L.content, L.author FROM quotes AS Q INNER JOIN lines AS L ON L.quote = Q.id WHERE (SELECT COUNT(*) FROM lines WHERE quote = q.id AND author = '01HHKXDVHJJ7S2D13Y32D82XZR') > 0;
import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { performDatabaseChecks } from "../database";

export async function GET(req: Request) {
  await performDatabaseChecks();
  const db = await open({
    filename: "./bazadanych.db",
    driver: sqlite3.Database,
  });

  let quotes = await db.get("select count(id) as count from quotes");
  return Response.json(quotes);
}
