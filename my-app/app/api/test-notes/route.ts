// app/api/test-notes/route.ts
import { NextResponse } from "next/server";
import { listNotes } from "../../../packages/integrations/notion/notesync/notesync.functions";

export async function GET() {
  const data = listNotes({ maxResults: 2, query: "test" });
  return NextResponse.json(data);
}
