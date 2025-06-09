// packages/integrations/notion/notesync/notesync.functions.ts

import { z } from "zod";
import { listNotesSchema } from "./notesync.schema";

/**
 * Mock function to list notes
 * @param input Object containing maxResults and query
 * @returns Array of mock notes
 */
export function listNotes(input: unknown) {
  // Validate input with Zod schema
  const parsed = listNotesSchema.safeParse(input);
  if (!parsed.success) {
    throw new Error("Invalid input");
  }
  
  const { maxResults, query } = parsed.data;

  // Mock notes array
  const notes = [
    { id: 1, title: "Meeting Notes", completed: false },
    { id: 2, title: "Shopping List", completed: true },
    { id: 3, title: "Project Ideas", completed: false },
  ];

  // Filter notes by query (simple case-insensitive check)
  const filtered = notes.filter(note =>
    note.title.toLowerCase().includes(query.toLowerCase())
  );

  // Return up to maxResults items
  return filtered.slice(0, maxResults);
}
