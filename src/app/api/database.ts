import sqlite3 from "sqlite3";
import { open } from "sqlite";

const createLogs = `
  CREATE TABLE IF NOT EXISTS logs (
    id          INTEGER NOT NULL PRIMARY KEY,
    content     TEXT NOT NULL,
    timestamp   INTEGER DEFAULT 0
  );
`;
const createUsers = `
  CREATE TABLE IF NOT EXISTS users (
    id          INTEGER NOT NULL PRIMARY KEY,
    flags       INTEGER NOT NULL DEFAULT 0,
    username    TEXT NOT NULL,
    password    TEXT NOT NULL
  );
`;
const createAuthors = `
  CREATE TABLE IF NOT EXISTS authors (
    id          INTEGER NOT NULL PRIMARY KEY,
    name        TEXT NOT NULL,
    tags        INTEGER DEFAULT 0
  );
`;
const createLines = `
  CREATE TABLE IF NOT EXISTS lines (
    id          INTEGER NOT NULL PRIMARY KEY,
    position    INTEGER NOT NULL,
    content     TEXT DEFAULT NULL,
    author      INTEGER DEFAULT NULL
  );
`;
const createQuotes = `
  CREATE TABLE IF NOT EXISTS quotes (
    id          INTEGER NOT NULL PRIMARY KEY,
    tags        INTEGER NOT NULL DEFAULT 0,
    context     TEXT DEFAULT NULL,
    timestamp   INTEGER DEFAULT 0
  );
`;

const performDatabaseChecks = async () => {
  const db = await open({
    filename: "./bazadanych.db",
    driver: sqlite3.Database,
  });
  await db.exec(createLogs);
  await db.exec(createUsers);
  await db.exec(createAuthors);
  await db.exec(createLines);
  await db.exec(createQuotes);
};
export { performDatabaseChecks };
