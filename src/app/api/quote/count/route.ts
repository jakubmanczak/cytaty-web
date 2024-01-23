import { open } from "sqlite";
import sqlite3 from "sqlite3";
import { performDatabaseChecks } from "../../database";

export async function GET(req: Request) {
  await performDatabaseChecks();
  const db = await open({
    filename: "./bazadanych.db",
    driver: sqlite3.Database,
  });
  let quotes = await db.get("select count(id) as count from quotes");
  return Response.json(quotes);
}
