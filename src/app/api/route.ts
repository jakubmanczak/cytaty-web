import { performDatabaseChecks } from "./database";

export async function GET(req: Request) {
  await performDatabaseChecks();
  return Response.json({
    message: "You've reached the public API for the quote collection system.",
  });
}
