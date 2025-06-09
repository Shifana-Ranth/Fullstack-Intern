// packages/integrations/notion/notesync/notesync.schema.ts

import { z } from "zod";

/**
 * Input schema for listNotes function
 * maxResults: max number of notes to return
 * query: string to filter note titles
 */
export const listNotesSchema = z.object({
  maxResults: z.number().int().min(1).max(100),
  query: z.string().min(0).max(100),
});
