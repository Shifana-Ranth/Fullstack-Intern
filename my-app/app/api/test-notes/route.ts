
import { NextResponse } from "next/server";
import { listNotes } from "../../../packages/integrations/notion/notesync/notesync.functions";

export async function GET() {
  try {
    const data = listNotes({
      maxResults: 10,           // return up to 10 notes
      query: "",                // empty string = return all notes
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching notes:", error);
    return NextResponse.json(
      { error: "Failed to fetch notes" },
      { status: 500 }
    );
  }
}
