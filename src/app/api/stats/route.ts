import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { performDatabaseChecks } from "../database";

export async function GET(req: Request) {
  await performDatabaseChecks();
  const db = await open({
    filename: "./bazadanych.db",
    driver: sqlite3.Database,
  });
  let quoteCount = await db.get("select count(id) as quotes from quotes");
  let userCount = await db.get("select count(id) as users from users");
  return Response.json([{ ...quoteCount }, { ...userCount }]);
}
